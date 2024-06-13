const SUPABASE_URL = 'https://sldvcsgcmhhgtrjjccxd.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsZHZjc2djbWhoZ3RyampjY3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwODE3MjQsImV4cCI6MTk5ODY1NzcyNH0.JSxiJyqoCFyO5fz6HG--pht_kMFBKTACBbG732aX2bI';

export const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
