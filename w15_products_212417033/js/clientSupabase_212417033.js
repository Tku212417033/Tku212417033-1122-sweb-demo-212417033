const SUPABASE_URL = 'https://ifafquhvqbvtxtzaghzf.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmYWZxdWh2cWJ2dHh0emFnaHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwODE4NDMsImV4cCI6MTk5ODY1Nzg0M30.A83rZ-9FDcI7HUqVZHRBidzWdJnOeONnfXWg8ofpNEo';

export const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
