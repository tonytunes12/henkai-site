# HENKAI — Site

## Local Development
```bash
npm run dev
```
Visit http://localhost:3000

## Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## Updating X Links (when ready)
Open `components/PageTasks.tsx` and replace the three constants at the top:
```ts
const HENKAI_X_URL  = "https://x.com/YourHenkaiHandle";
const FOUNDER_X_URL = "https://x.com/YourFounderHandle";
const POST_URL      = "https://x.com/YourHandle/status/YOUR_POST_ID";
```

## Connecting Google Sheets
1. Open Google Sheets → Extensions → Apps Script
2. Paste this code:
```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data  = JSON.parse(e.postData.contents);
  sheet.appendRow([data.timestamp, data.xUsername, data.walletAddress]);
  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```
3. Deploy → New deployment → Web App → Anyone can access → Deploy
4. Copy the Web App URL
5. Create `.env.local` in the project root:
```
GOOGLE_SHEET_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```
6. Redeploy to Vercel with the env var set in Vercel dashboard

## Quiz Questions
Edit the `QUESTIONS` array in `components/PageQuiz.tsx`
