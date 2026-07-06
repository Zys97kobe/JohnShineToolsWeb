# JohnShine Tools
https://johnshinetools.com/


English static site for `johnshinetools.com`, focused on high-frequency utility tools:

- Image Compressor
- Image Converter
- PDF Merge
- PDF Split
- PDF Compressor
- Word Counter
- Case Converter
- Character Counter
- QR Code Generator
- Password Generator

## Local Preview

Open `index.html` directly in a browser, or run a tiny static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Build Tool Pages

Each tool has its own SEO-friendly URL, such as `/image-compressor/` and `/pdf-merge/`.
Regenerate the static tool pages after changing `index.html` metadata or shared layout:

```bash
node scripts/build-tool-pages.mjs
```

## VPS Deployment

Deploy the current local files to the VPS:

```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

Defaults:

```bash
VPS_USER=root
VPS_HOST=38.180.204.105
VPS_PORT=22
REMOTE_ROOT=/var/www/johnshinetools.com
```

To enter the password only once, pass it as an environment variable for this command:

```bash
VPS_PASSWORD='your-password' ./scripts/deploy.sh
```

If `expect` is installed, the script can also prompt for the password once without storing it in shell history.

The script packs these local files and folders:

```text
index.html
styles.css
app.js
robots.txt
sitemap.xml
README.md
assets/
```

Example Nginx server block:

```nginx
server {
    listen 80;
    server_name johnshinetools.com www.johnshinetools.com;
    root /var/www/johnshinetools.com;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

After DNS points to the VPS, install HTTPS with Certbot:

```bash
sudo certbot --nginx -d johnshinetools.com -d www.johnshinetools.com
```

## Notes

Most tools run fully in the browser. PDF and QR tools load browser-side libraries from jsDelivr when used.
