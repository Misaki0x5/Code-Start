import { createClient } from '@supabase/supabase-js';

const { VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY } = import.meta.env;

if (!VITE_SUPABASE_URL || !VITE_SUPABASE_PUBLISHABLE_KEY) {
  window.__SUPABASE_CONFIG_ERROR__ = 'Supabase URL or publishable key is missing.';
} else {
  window.supabaseClient = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY);
}

window.dispatchEvent(new Event('supabase-ready'));