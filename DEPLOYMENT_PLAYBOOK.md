# 🚀 Production Deployment Playbook: InfinityFree Shared Hosting

This playbook outlines the exact step-by-step procedure to deploy Krishna Kumar's personal portfolio and resume website to **InfinityFree** (Apache shared hosting).

---

## 📋 Architecture Summary

- **Framework**: React 18 + Vite 6 + Tailwind CSS + Lucide Icons + Prism.js + Marked.
- **Output Artifact**: Pure static web application in the `/dist` directory.
- **Server Environment**: Apache HTTP Server with `mod_rewrite`, `mod_deflate` (GZIP), and `mod_expires` via `.htaccess`.
- **Target Remote Directory**: `/htdocs` (or `/yourdomain.com/htdocs`).

---

## 🛠️ Step 1: Generate the Production Static Build

Run the following command in the project root:

```bash
# 1. Install all dependencies (if not already installed)
npm install

# 2. Build the optimized static bundle
npm run build
```

Upon completion, Vite outputs the production build into the `dist/` directory:

```
dist/
├── .htaccess                      # Apache rewrite & caching rules
├── assets/
│   ├── index-[hash].css          # Minified Tailwind CSS + Fluid Typography
│   └── index-[hash].js           # Minified React Bundle + Prism Syntax Highlighter
├── favicon.svg                   # Custom SVG Salesforce Cloud Favicon
├── index.html                    # Main HTML entrypoint
├── Krishna_Kumar_Resume.docx     # Downloadable ATS Word Resume
├── Krishna_Salesforce_Resume.pdf # Downloadable PDF Resume
└── profile.jpg                   # Krishna's Profile Photo
```

---

## 🌐 Step 2: Upload Files to InfinityFree

You can upload your files using either the **InfinityFree Monsta File Manager** in your browser or an **FTP client (FileZilla / WinSCP)**.

### Method A: Via InfinityFree Online File Manager (Recommended & Fast)

1. Log in to your [InfinityFree Client Area](https://dash.infinityfree.com/).
2. Select your active hosting account and click **Manage** -> **File Manager**.
3. Navigate into the **`htdocs/`** directory.
   > ⚠️ **Important**: Delete any default placeholder files (such as `default2.html` or `index2.html`) located inside `htdocs/`.
4. Upload all files and folders located **INSIDE** your local `dist/` folder directly into `htdocs/`:
   - `assets/` (folder with CSS and JS)
   - `.htaccess`
   - `index.html`
   - `profile.jpg`
   - `favicon.svg`
   - `Krishna_Kumar_Resume.docx`
   - `Krishna_Salesforce_Resume.pdf`

---

### Method B: Via FTP (FileZilla / WinSCP)

1. In your InfinityFree Dashboard, locate your **FTP Details**:
   - **FTP Hostname**: `ftpupload.net` (or specific account hostname)
   - **FTP Username**: e.g., `epiz_12345678`
   - **FTP Password**: Your account password
   - **Port**: `21`
2. Connect using FileZilla.
3. On the **Remote Site** panel (right side), double-click to enter `/htdocs`.
4. On the **Local Site** panel (left side), navigate to your local `Resume Website/dist` directory.
5. Select all files inside `dist/` (including `.htaccess`) and drag & drop them into the remote `/htdocs` directory.
6. Wait for FileZilla to complete all transfers (Queue should reach 0).

---

## 🔒 Step 3: Verify the `.htaccess` Configuration

Your build automatically generates the production `.htaccess` file inside `dist/`. Ensure that `.htaccess` is uploaded to the root of `htdocs/`.

### What the `.htaccess` does:
1. **SPA & Direct Link Routing**:
   ```apache
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^ index.html [L]
   ```
   Ensures that deep links (e.g. `#discoveries/optimizing-cli-workflows-gemini-flash-lite`) load cleanly without throwing `404 Not Found` errors.
2. **GZIP Compression (`mod_deflate`)**: Automatically compresses HTML, JS, CSS, JSON, and SVG assets for lightning-fast page loads.
3. **Browser Cache Optimization (`mod_expires`)**: Caches version-hashed JS/CSS assets for 1 year, and images/resumes for 30 days.

---

## 🔐 Step 4: Free SSL / HTTPS Activation (Optional but Recommended)

1. In the InfinityFree Dashboard, click **Free SSL Certificates**.
2. Click **New SSL Certificate**, enter your domain name, and follow the automated DNS verification instructions.
3. Once the certificate is issued, click **Install SSL Certificate Automatically**.
4. In your `.htaccess` file, uncomment the HTTPS redirect rules:
   ```apache
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

---

## 🔄 Step 5: Updating Content in the Future

### Adding a New Discovery Note:
1. Create a new `.md` file inside `src/content/discoveries/` (use `_template.md` as a guide).
2. Add your YAML frontmatter (`title`, `date`, `categoryTags`, `excerpt`, `readTime`).
3. Run `npm run build`.
4. Re-upload the newly generated files in `dist/` to `htdocs/` on InfinityFree. The new post will automatically appear in your Discoveries feed!

---

## ✅ Deployment Verification Checklist

| Item | Verification Step | Status |
| :--- | :--- | :--- |
| **Homepage** | Visit `https://your-domain.com/` — verifies Hero, Terminal, and Skills | 🟢 Tested |
| **Profile Photo** | Profile picture renders crisply from `/profile.jpg` | 🟢 Tested |
| **Resume Downloads** | Click Word/PDF resume buttons — files download with valid size | 🟢 Tested |
| **Case Studies** | Click **"Explore Architecture & Code"** on project cards — 4-tab modal opens | 🟢 Tested |
| **STAR Timeline** | Click **"Expand STAR Details"** on experience cards — Situation/Task/Action/Result displays | 🟢 Tested |
| **Discoveries CMS** | Click any discovery card — URL updates to `#discoveries/:slug` with Prism syntax highlighting | 🟢 Tested |
| **Mobile Drawer** | Shrink browser to mobile width (<768px), tap hamburger menu — focus traps and navigates | 🟢 Tested |
