# CodeStart

## Supabase setup

The browser app uses the Supabase publishable key and Supabase Auth. Never put a service-role key in this project.

1. In Supabase, open **SQL Editor**, paste the contents of `supabase/schema.sql`, and run it.
2. In **Authentication → URL Configuration**, set the local development URL `http://127.0.0.1:5173` (or `http://localhost:5173` if you use localhost) and add both to the allowed redirect URLs. Add the deployed website URL before publishing.
3. The local `.env.local` is already configured for this Supabase project and is ignored by Git. `.env.example` documents the required variable names.
4. Install and start the app with `npm install` and `npm run dev`.
5. Create or sign in to teacher accounts, generate student codes, then register student accounts with those codes. Supabase Auth owns passwords and persists shared records across devices.

Email confirmation may be enabled in Supabase Auth. If it is enabled, new users must confirm their email before signing in.

Existing accounts stored by the old browser-only version are not automatically migrated. They must be recreated in Supabase Auth; old local data remains in that browser until it is cleared.