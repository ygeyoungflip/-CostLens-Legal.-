// CostLens Legal — Google Apps Script for Lead Capture
// Paste this into: Extensions → Apps Script → Save → Deploy → New Deployment → Web App

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.firm || '',
      data.size || '',
      data.source || 'CostLens Landing Page'
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('CostLens Legal — Lead Capture Webhook is live.')
    .setMimeType(ContentService.MimeType.TEXT);
}