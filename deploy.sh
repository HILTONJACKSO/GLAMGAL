#!/bin/bash

# ==========================================
# GLAMGAL WEBSITE — HOSTINGER VPS DEPLOY SCRIPT
# ==========================================

set -e

echo "🚀 Starting GLAMGAL Hostinger VPS Deployment..."

# 1. Pull latest changes from GitHub main branch
echo "📥 Pulling latest code from GitHub..."
git pull origin main

# 2. Check if Docker is installed
if command -v docker &> /dev/null && command -v docker-compose &> /dev/null; then
    echo "🐳 Deploying via Docker Compose..."
    docker-compose down || true
    docker-compose up -d --build
    echo "✅ Docker deployment completed successfully!"
else
    echo "⚡ Deploying via Direct Node & Nginx..."
    npm install
    npm run build

    # Copy dist files to Nginx web root
    NGINX_WEB_ROOT="/var/www/glamgal"
    sudo mkdir -p $NGINX_WEB_ROOT
    sudo cp -r dist/* $NGINX_WEB_ROOT/
    sudo systemctl reload nginx
    echo "✅ Direct Nginx deployment completed successfully!"
fi

echo "🎉 GLAMGAL is now LIVE on your Hostinger VPS!"
