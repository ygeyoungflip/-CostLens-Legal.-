# CostLens Legal Landing Page

Lead capture landing page for CostLens Legal's AI cost reduction tool.

**Proprietary Notice:** © 2026 CostLens Legal. All rights reserved. This code is proprietary and confidential. No license is granted.

## Deploy via GitHub Pages

1. Create a GitHub repo
2. Push these files to the `main` branch
3. Go to Settings → Pages → deploy from `main` branch, root folder

## Google Sheets Integration (CRM)

### Option 1: Google Apps Script (Recommended)

1. Go to sheets.new and create a sheet with headers:
   `Timestamp | Name | Email | Firm Name | Firm Size | Source`

2. Go to Extensions → Apps Script

3. Paste the code from `google-apps-script.gs`

4. Deploy → New deployment → Web app
   - Execute as: Me
   - Who has access: Anyone

5. Copy the Web App URL and paste it into `script.js` as `GOOGLE_SHEET_URL`

### Option 2: Zapier / Make.com

Connect the form to a webhook URL from Zapier or Make to sync to:
- Google Sheets
- HubSpot
- Salesforce
- Pipedrive
- Any other CRM

## Local Backup

All submissions are also saved to `localStorage` automatically.