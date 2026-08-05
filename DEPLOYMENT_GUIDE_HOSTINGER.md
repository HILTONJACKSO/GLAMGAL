# 🚀 GLAMGAL — Hostinger VPS Deployment Guide

This guide walks you through deploying your **GLAMGAL** storefront onto a **Hostinger VPS** running Ubuntu 22.04 or 24.04 LTS.

---

## 📋 Option 1: Automated 1-Command Deployment (Recommended)

### Step 1: Connect to your Hostinger VPS via SSH
Open your terminal or PuTTY and connect to your Hostinger VPS:
```bash
ssh root@YOUR_HOSTINGER_VPS_IP
```

### Step 2: Clone your GitHub repository
```bash
cd /var/www
git clone https://github.com/HILTONJACKSO/GLAMGAL.git glamgal
cd glamgal
```

### Step 3: Run the automated deployment script
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 🛠️ Option 2: Docker Container Deployment

If your Hostinger VPS has Docker installed (or Hostinger Docker Template):

```bash
cd /var/www/glamgal
docker-compose up -d --build
```
Your website will immediately be live at `http://YOUR_HOSTINGER_VPS_IP`!

---

## 🌐 Option 3: Manual Nginx Setup

If you prefer running Nginx directly on Ubuntu:

### Step 1: Install Nginx & Node.js
```bash
sudo apt update
sudo apt install -y nginx git curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

### Step 2: Build the project
```bash
cd /var/www/glamgal
npm install
npm run build
```

### Step 3: Configure Nginx Site
Copy the provided `nginx.conf` into `/etc/nginx/sites-available/glamgal`:

```bash
sudo cp nginx.conf /etc/nginx/sites-available/glamgal
```
Edit `/etc/nginx/sites-available/glamgal` and set your domain name:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/glamgal/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Enable the site and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/glamgal /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🔒 Free SSL Certificate (HTTPS) via Certbot

To enable free HTTPS SSL for your domain on Hostinger VPS:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Certbot will automatically configure HTTPS, redirect HTTP to HTTPS, and auto-renew your SSL certificate!

---

## 🔄 Updating your website in the future

Whenever you push new changes to GitHub, run this inside your VPS:

```bash
cd /var/www/glamgal
./deploy.sh
```
