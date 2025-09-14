# Deployment Guide for GitHub Pages

## Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Xcode Command Line Tools** (for macOS): Install if not already installed
3. **Supabase Project**: Set up with the provided schema
4. **Gmail App Password**: Generated for nkkleirikoulu@gmail.com

## Step 1: Install Xcode Command Line Tools (macOS)

If you're getting the "No developer tools found" error, install Xcode command line tools:

```bash
xcode-select --install
```

## Step 2: Initialize Git Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Leirikoulu Marketplace app"
```

## Step 3: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it something like `leirikoulu-marketplace` or `kirppisapp`
3. Don't initialize with README (since we already have files)
4. Copy the repository URL

## Step 4: Connect Local Repository to GitHub

```bash
# Add remote origin (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Step 5: Set Up Environment Variables

1. Go to your repository on GitHub
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following secrets:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key
   - `GMAIL_APP_PASSWORD`: Your Gmail app password

## Step 6: Enable GitHub Pages

1. Go to Settings > Pages in your repository
2. Under "Source", select "GitHub Actions"
3. The deployment will start automatically

## Step 7: Test the Deployment

1. Wait for the GitHub Actions workflow to complete (check the Actions tab)
2. Visit your deployed site at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
3. Test the contact seller functionality

## Troubleshooting

### If GitHub Actions fails:
- Check that all secrets are properly set
- Verify the Gmail app password is correct
- Make sure 2FA is enabled on the Gmail account

### If emails don't work:
- Check the server logs in GitHub Actions
- Verify the Gmail app password hasn't expired
- Test with a simple email first

### If the site doesn't load:
- Check that the build completed successfully
- Verify the repository name matches the GitHub Pages URL
- Wait a few minutes for the deployment to propagate

## Local Testing

For local testing with full functionality:

```bash
# Create .env.local file with your credentials
echo "NEXT_PUBLIC_SUPABASE_URL=your_supabase_url" > .env.local
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key" >> .env.local
echo "GMAIL_APP_PASSWORD=your_gmail_app_password" >> .env.local

# Run development server
npm run dev
```

Visit `http://localhost:3000` (or the port shown in terminal) to test locally.
