# Deployment ke Vercel

## Prerequisites
- Akun Vercel (gratis)
- GitHub repository
- Wix Headless project aktif

## Steps

### 1. Push ke GitHub
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/username/blog-pribadi.git
git push -u origin main
```

### 2. Import ke Vercel
1. Login ke vercel.com
2. Click "New Project"
3. Import GitHub repo
4. Framework: Astro
5. Build command: `npm run build`
6. Output directory: `dist`

### 3. Environment Variables
```
WIX_SITE_ID=xxx
WIX_API_KEY=xxx
```

### 4. Deploy
- Vercel auto-deploy on push to main
- Preview deployments on PR

## Custom Domain (Optional)
1. Buka Vercel Dashboard
2. Project Settings → Domains
3. Tambah custom domain
4. Update DNS records