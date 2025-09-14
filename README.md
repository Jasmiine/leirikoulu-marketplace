# Kirppisapp - Online Marketplace

A simple webapp for selling items built with Next.js and Supabase.

## Features

- Browse items in a grid layout
- User authentication with email/password
- Add and remove items (admin functionality)
- Image upload for items
- Contact seller functionality with popup form
- Email notifications to sellers when contacted
- Responsive design

## Setup

1. Clone this repository
2. Install dependencies: `npm install`
3. Set up Supabase:
   - Create a new Supabase project
   - Run the SQL schema from `supabase-schema.sql` in your Supabase SQL editor
   - Get your project URL and anon key from Settings > API
4. Create `.env.local` file with:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   GMAIL_APP_PASSWORD=your_gmail_app_password_here
   ```
5. Run the development server: `npm run dev`

## Deployment

This app is configured for GitHub Pages deployment. The build process will create a static export that can be deployed to GitHub Pages.

### GitHub Pages Setup

1. Push your code to a GitHub repository
2. Go to Settings > Pages and select "GitHub Actions" as the source
3. Add the following secrets in Settings > Secrets and variables > Actions:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `GMAIL_APP_PASSWORD`

## Usage

1. Visit the home page to browse items
2. Click "Contact Seller" on any item to send a message to the seller
3. Fill in your email and/or phone number and optional message
4. Click "Admin" to access the administration panel
5. Sign up for a new account or sign in with existing credentials
6. Add new items with title, description, price, and image
7. Delete items you've added
8. Sign out when done

## Pages

- `/` - Items display page
- `/admin` - Administration page (requires authentication)