# Supabase Setup Guide

Follow these steps to set up Supabase for storing waitlist emails.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in your project details:
   - **Name**: PickPlot (or your preferred name)
   - **Database Password**: Choose a strong password (save it!)
   - **Region**: Choose the closest region to your users
5. Click "Create new project" (takes 1-2 minutes)

## Step 2: Create the Waitlist Table

1. In your Supabase dashboard, go to **SQL Editor** (left sidebar)
2. Click **New Query**
3. Paste this SQL to create the `waitlist` table:

```sql
-- Create waitlist table
CREATE TABLE waitlist (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  agree_to_emails BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at DESC);

-- Disable Row Level Security (RLS) since we're using service_role key
-- Service role key bypasses RLS anyway, but disabling it is cleaner
ALTER TABLE waitlist DISABLE ROW LEVEL SECURITY;
```

4. Click **Run** (or press Cmd/Ctrl + Enter)
5. You should see "Success. No rows returned"

## Step 3: Get Your API Keys

1. In Supabase dashboard, go to **Settings** (gear icon) → **API**
2. Find these two values:
   - **Project URL** (under "Project URL")
   - **service_role** key (under "Project API keys" → "service_role" - click "Reveal")

⚠️ **Important**: The `service_role` key has admin privileges and bypasses RLS. Never expose it to the client! It's only used in server-side API routes.

## Step 4: Configure Environment Variables

### For Local Development:

1. In your project root, create a `.env.local` file
2. Add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

3. **Never commit `.env.local` to git** (it should already be in `.gitignore`)

### For Vercel Deployment:

1. Go to your Vercel project dashboard: [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these two variables:

   - **Name**: `NEXT_PUBLIC_SUPABASE_URL`
     - **Value**: Your Supabase project URL
     - **Environment**: Production, Preview, Development (select all)

   - **Name**: `SUPABASE_SERVICE_ROLE_KEY`
     - **Value**: Your Supabase service role key
     - **Environment**: Production, Preview, Development (select all)

5. Click **Save** for each variable
6. **Redeploy** your application (Vercel will automatically redeploy, or you can trigger it manually)

⚠️ **Important**: After adding environment variables, you must redeploy for them to take effect!

## Step 5: Test It Out

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000)
3. Click "Join Waitlist" and submit an email
4. Check your Supabase dashboard → **Table Editor** → `waitlist` table
5. You should see your email entry!

## Viewing Waitlist Entries

- **Supabase Dashboard**: Go to **Table Editor** → `waitlist` table
- **Export**: Click the download icon to export as CSV
- **SQL Query**: Use SQL Editor to query:
  ```sql
  SELECT * FROM waitlist ORDER BY created_at DESC;
  ```

## Security Notes

✅ **Good**: API route uses `SUPABASE_SERVICE_ROLE_KEY` (server-side only)
✅ **Good**: Environment variables are never exposed to the client
✅ **Good**: Email validation and duplicate checking on the server

## Troubleshooting

### "Missing Supabase environment variables"

**Local Development:**
- Make sure `.env.local` exists and has both variables
- Restart your dev server after adding environment variables
- Check that variable names match exactly (no typos)

**Vercel Deployment:**
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Verify both `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are set
- Make sure they're enabled for the correct environments (Production/Preview/Development)
- **Redeploy your application** after adding/updating environment variables
- Check Vercel deployment logs for errors

### "Failed to join waitlist"

**Local Development:**
- Check Supabase dashboard → **Logs** for errors
- Verify the `waitlist` table exists
- Check that your service role key is correct

**Vercel Deployment:**
- Check Vercel deployment logs (Deployments → Click deployment → Functions tab)
- Check Supabase dashboard → **Logs** for database errors
- Verify environment variables are set correctly in Vercel
- Make sure you redeployed after adding environment variables
- Test the API route directly: `https://your-domain.vercel.app/api/waitlist` (should return 400 for GET, which is expected)

### "This email is already on the waitlist"
- This is expected! The table has a UNIQUE constraint on email
- Users can't sign up twice with the same email

## Next Steps

- Set up email notifications (Resend, SendGrid, etc.)
- Add analytics to track signups
- Create an admin dashboard to view/manage waitlist
- Set up automated emails when beta launches

