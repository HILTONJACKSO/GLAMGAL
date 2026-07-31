<<<<<<< HEAD
# GLAMGAL
=======
# GLAMGAL — High-Impact Beauty & Skin-First Care Headless Storefront

![GLAMGAL Brand Banner](/public/glamgal_official_logo.png)

> **GLAMGAL** is a luxury, ultra-fast headless e-commerce storefront engineered for high-performance cosmetics, skin-first formulations, and botanical body care. Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and seamless **Shopify Storefront API** integration.

---

## ✨ Key Features & Architecture

- **🛍️ Headless Shopify E-Commerce Architecture**:
  - Full decoupling of frontend luxury design from backend checkout and inventory processing.
  - Built-in live integration with Shopify GraphQL Storefront API.

- **🎛️ Integrated Admin Dashboard & CMS Studio (`/admin`)**:
  - **Products Manager**: Create, Edit, and Delete products with real-time storefront synchronization.
  - **Direct Image File Uploader**: Drag-and-drop or select photo files directly from your computer with live thumbnail preview cards.
  - **Hero & Campaign Manager**: Customize hero headlines, CTA buttons, and portrait banners live.
  - **Homepage Section Toggles**: Enable/disable storefront sections on the fly.
  - **Shopify Connectivity Panel**: Manage live `myshopify.com` store credentials and unlock checkout.

- **🎨 Modern Luxury Aesthetics & Design System**:
  - Curated color palette: *Warm White*, *Obsidian Black (#090909)*, *Soft Stone*, *Warm Taupe (#B89275)*.
  - Custom brand logo integration featuring the official interlocking **GG Monogram Emblem**.
  - Dynamic micro-animations, glassmorphism overlays, and Framer Motion scroll reveals.

- **⚡ High Performance & Zero-Lag UX**:
  - Built with Vite for lightning-fast HMR and optimized production bundling.
  - 100% Mobile-first responsive navigation drawer and instant cart drawer.

- **🧬 Interactive Shopping Rituals & Guides**:
  - Custom 4-Step **Routine Builder** ritual.
  - Targeted **Skin Concern Matrix** (Barrier Damage, Dryness, Dullness, Sculpting).
  - Dynamic collection filters, sorting, and live storefront search.

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **pnpm** / **yarn**

### 1. Clone the Repository
```bash
git clone https://github.com/HILTONJACKSO/GLAMGAL.git
cd GLAMGAL
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory (or copy `.env.example`):
```bash
cp .env.example .env
```

Define your environment configuration:
```env
VITE_PUBLIC_STORE_DOMAIN=glamgal-beauty.myshopify.com
VITE_PUBLIC_STOREFRONT_API_TOKEN=your_storefront_access_token
VITE_PUBLIC_STORE_VERSION=2024-01
VITE_USE_MOCK_SHOPIFY=true
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛡️ Admin Dashboard & Control Center

Access the secure CMS Control Center at `/admin/login` or by clicking the **Shield Icon 🛡️** in the top navigation bar.

- **Admin URL**: `http://localhost:5173/admin`
- **Demo Email**: `admin@glamgal.com`
- **Demo Password**: `glamgal2026`

---

## 🛍️ Connecting Your Live Shopify Store

1. **Remove Shopify Password Protection**:
   - Log into your [Shopify Admin](https://admin.shopify.com).
   - Go to **Online Store → Preferences → Password Protection**.
   - Uncheck *"Restrict access to visitors with the password"* and click **Save**.

2. **Generate Storefront API Token**:
   - Go to **Settings ⚙️ → Apps and sales channels → Develop apps**.
   - Click **Create an app** (`GLAMGAL Storefront`).
   - Enable Storefront API Scopes: `unauthenticated_read_product_listings`, `unauthenticated_read_product_inventory`, `unauthenticated_read_checkouts`, `unauthenticated_write_checkouts`.
   - Click **Install App** and copy your **Storefront API Access Token**.

3. **Save in Dashboard**:
   - In `/admin`, open **SHOPIFY CONNECTIVITY**, paste your token and store domain, and click **SAVE CREDENTIALS**.

---

## 🌐 One-Click Hosting & Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your code to GitHub repository `https://github.com/HILTONJACKSO/GLAMGAL.git`.
2. Go to [Vercel Dashboard](https://vercel.com/new) and click **Import Repository**.
3. Select `GLAMGAL` repo.
4. Set Build Command: `npm run build` and Output Directory: `dist`.
5. Add Environment Variables (`VITE_PUBLIC_STORE_DOMAIN`, `VITE_PUBLIC_STOREFRONT_API_TOKEN`).
6. Click **Deploy**!

### Deploying to Netlify
1. Log into [Netlify](https://app.netlify.com).
2. Click **Add new site → Import an existing project**.
3. Connect your GitHub repository `GLAMGAL`.
4. Build settings: Build command `npm run build`, Publish directory `dist`.
5. Click **Deploy site**.

---

## 🧪 Testing & Verification

- **Production Build**:
  ```bash
  npm run build
  ```
- **Unit Testing (Vitest)**:
  ```bash
  npm run test:unit
  ```
- **E2E Testing (Playwright)**:
  ```bash
  npm run test:e2e
  ```

---

## 📄 License

Distributed under the MIT License. Created for GLAMGAL Beauty Storefront.
>>>>>>> 6cddaf5 (feat: initial release of GLAMGAL luxury headless e-commerce storefront with product CMS studio, hero editor, and shopify integration)
