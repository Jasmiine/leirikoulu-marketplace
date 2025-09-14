# Setup Guide for Kirppisapp

## Prerequisites

1. Node.js (version 18 or higher)
2. A Supabase account
3. A GitHub account

## Step 1: Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a new project
2. In your Supabase dashboard, go to Settings > API
3. Copy your Project URL and anon public key
4. Go to the SQL Editor and run the SQL from `supabase-schema.sql` to create the database tables and policies
5. Go to Storage and create a bucket called `item-images` (or it will be created automatically by the SQL)

## Step 2: Environment Variables

1. Create a `.env.local` file in the project root
2. Add your Supabase credentials and Gmail app password:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   GMAIL_APP_PASSWORD=your_gmail_app_password_here
   ```

## Step 3: Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Step 4: GitHub Pages Deployment

1. Push your code to a GitHub repository
2. Go to your repository Settings > Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy when you push to the main branch
5. Add your Supabase environment variables as repository secrets:
   - Go to Settings > Secrets and variables > Actions
   - Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Features

- **Home Page (`/`)**: Displays all items for sale in a responsive grid
- **Contact Seller**: Buyers can contact sellers via popup form with email/phone
- **Admin Page (`/admin`)**: Requires authentication, allows users to add/remove their own items
- **Authentication**: Email/password signup and signin
- **Image Upload**: Users can upload images for their items
- **Email Notifications**: Sellers receive email notifications when contacted
- **Responsive Design**: Works on desktop and mobile devices

## Usage

1. Visit the home page to browse items
2. Click "Contact Seller" on any item to send a message to the seller
3. Fill in your email and/or phone number and optional message
4. Click "Admin" to access the administration panel
5. Sign up for a new account or sign in with existing credentials
6. Add new items with title, description, price, and image
7. Delete items you've added
8. Sign out when done

## Gmail Configuration

The app uses Gmail SMTP to send contact messages. To set this up:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Generate an App Password:
   - Go to Security > 2-Step Verification > App passwords
   - Select "Mail" and generate a password
   - Use this password as `GMAIL_APP_PASSWORD` in your environment variables
4. All emails will be sent from `nkkleirikoulu@gmail.com` with the subject "New message from Leirikoulu Marketplace"

## Troubleshooting

- Make sure your Supabase environment variables are correctly set
- Check that the database schema has been applied correctly
- Ensure the storage bucket `item-images` exists and has the correct policies
- Check the browser console for any error messages
- For email issues, check the server logs and Gmail app password configuration
- Make sure 2-Factor Authentication is enabled on the Gmail account
- Verify the Gmail app password is correct and not expired
