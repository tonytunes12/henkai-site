# Google Sheets Integration Setup

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Henkai Submissions"
3. In the first row, add these headers:
   - A1: `Timestamp`
   - B1: `X Username`
   - C1: `Wallet Address`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete the default code and paste this:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Extract fields
    const timestamp = data.timestamp || new Date().toISOString();
    const xUsername = data.xUsername || "";
    const walletAddress = data.walletAddress || "";
    
    // Validate required fields
    if (!xUsername || !walletAddress) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: "Missing required fields" })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Append row to sheet
    sheet.appendRow([timestamp, xUsername, walletAddress]);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Deploy the Script

1. In Apps Script editor, click **Deploy → New deployment**
2. Select type: **Web app**
3. Execute as: **Me** (your account)
4. Who has access: **Anyone**
5. Click **Deploy**
6. Copy the deployment URL (looks like: `https://script.google.com/macros/d/...../usercontent`)

## Step 4: Add URL to Environment

1. Open `.env.local` in your project root
2. Add/update this line:
```
GOOGLE_SHEET_URL=https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/usercontent
```

Replace `YOUR_DEPLOYMENT_ID` with the actual ID from your deployment URL.

## Step 5: Test

1. Fill out the form on your site
2. Check your Google Sheet - new rows should appear automatically!

## If the script needs updating:

1. In Apps Script, make changes
2. Click **Deploy → Manage deployments**
3. Click the pencil icon on your deployment
4. Click **Deploy** to update
5. The new URL will be shown (or same if just updating)

---

**Note:** Make sure your `.env.local` file is in the project root and restart your dev server after adding the URL.
