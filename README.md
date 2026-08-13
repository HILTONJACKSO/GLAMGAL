# GLAMGAL — High-Impact Beauty & Skin-First Care Storefront

![GLAMGAL Brand Banner](/public/glamgal_official_logo.png)

> **GLAMGAL** is a luxury, ultra-fast storefront engineered for high-performance cosmetics, skin-first formulations, and botanical body care. Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and direct integration to the official GLAMGAL Shopify store (`https://glamgalbeauty.com/`).

---

## ✨ Key Features & Architecture

- **🛍️ Direct Store Link Architecture**:
  - Seamless redirection from all product cards, hero sections, and collection galleries directly to `https://glamgalbeauty.com/`.

- **🎛️ Integrated Admin Dashboard & CMS Studio (`/admin`)**:
  - **Products Manager**: Manage local product specifications, shades, ingredients, and store destination URLs.
  - **Direct Image File Uploader**: Drag-and-drop or select photo files directly from your computer with live thumbnail preview cards.
  - **Hero & Campaign Manager**: Customize hero headlines, CTA buttons, and portrait banners live.
  - **Homepage Section Toggles**: Enable/disable storefront sections on the fly.

- **🎨 Modern Luxury Aesthetics & Design System**:
  - Curated color palette: *Warm White*, *Obsidian Black (#090909)*, *Soft Stone*, *Warm Taupe (#B89275)*.
  - Custom brand logo integration featuring the official interlocking **GG Monogram Emblem**.
  - Dynamic micro-animations, glassmorphism overlays, and Framer Motion scroll reveals.

- **⚡ High Performance & Zero-Lag UX**:
  - Built with Vite for lightning-fast HMR and optimized production bundling.
  - 100% Mobile-first responsive navigation drawer and magazine-style product specification layouts.

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
Create a `.env` file in the root directory:
```env
VITE_PUBLIC_STORE_DOMAIN=glamgalbeauty.com
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📄 License

Distributed under the MIT License. Created for GLAMGAL Beauty Storefront.
