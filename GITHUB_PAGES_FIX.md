# Fix GitHub Pages Deployment Issues

## The Problem
GitHub is showing errors because:
1. GitHub Pages is not enabled
2. The repository is not configured to use GitHub Actions for building
3. The workflow might be running on the wrong branch

## Step-by-Step Fix

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (in the repository menu)
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select **"GitHub Actions"**
5. Click **Save**

### 2. Check Repository Branch

Make sure your code is on the `main` branch (or `master`):

```bash
# Check current branch
git branch

# If you're on a different branch, switch to main
git checkout main

# If main doesn't exist, create it
git checkout -b main
```

### 3. Push the Updated Workflow

The workflow has been updated to work with both `main` and `master` branches:

```bash
# Add the updated workflow
git add .github/workflows/deploy.yml

# Commit the changes
git commit -m "Fix GitHub Pages workflow"

# Push to GitHub
git push origin main
```

### 4. Verify Environment Variables

Make sure you have these secrets set in your repository:

1. Go to **Settings** > **Secrets and variables** > **Actions**
2. Add these secrets if not already present:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `GMAIL_APP_PASSWORD`

### 5. Check the Actions Tab

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Click on it to see the progress
4. If it fails, check the logs for specific errors

### 6. Alternative: Manual Pages Setup

If the above doesn't work, try this alternative approach:

1. Go to **Settings** > **Pages**
2. Under **Source**, select **"Deploy from a branch"**
3. Select **main** branch and **/ (root)** folder
4. Click **Save**
5. Wait a few minutes for the site to build

## Troubleshooting

### If you still get errors:

1. **Check the branch name**: Make sure you're pushing to `main` or `master`
2. **Check permissions**: Ensure the repository has Pages write permissions
3. **Check the workflow file**: Make sure `.github/workflows/deploy.yml` exists
4. **Check environment variables**: All required secrets must be set

### If the site loads but emails don't work:

1. Check that `GMAIL_APP_PASSWORD` is set correctly
2. Verify the Gmail account has 2FA enabled
3. Check the server logs in GitHub Actions

## Quick Test

After following these steps:

1. Wait 5-10 minutes for the deployment
2. Visit your site at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
3. Test the contact seller functionality

## Still Having Issues?

If you're still getting errors, try this simplified approach:

1. Delete the `.github/workflows/deploy.yml` file
2. Go to Settings > Pages
3. Select "Deploy from a branch"
4. Choose your main branch
5. This will use the static files from the `out` folder

The static approach won't support the email functionality, but it will get your site online for testing the basic features.
