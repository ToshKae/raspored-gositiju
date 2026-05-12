const SHEET_ID = '16vYKf2F7LvgMJPO7NMjzOoobrC_UO67_fdLuVkN_APU';

function doGet(e) {
  const action = (e.parameter && e.parameter.action) || 'read';
  if (action === 'write') return handleWrite(e.parameter);
  return handleRead();
}

function handleRead() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const headers = data[0].map(h => String(h).trim());
  const rows = data.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, rows }))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleWrite(params) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const headers = data[0].map(h => String(h).trim());
  const stoIdCol  = headers.indexOf('Sto ID');
  const sedisteCol = headers.indexOf('Sediste');
  const imeCol    = headers.indexOf('Ime');

  const stoId   = parseInt(params.stoId);
  const sediste = parseInt(params.sediste);
  const ime     = params.ime || '';

  for (let i = 1; i < data.length; i++) {
    if (parseInt(data[i][stoIdCol]) === stoId && parseInt(data[i][sedisteCol]) === sediste) {
      sheet.getRange(i + 1, imeCol + 1).setValue(ime);
      return ContentService
        .createTextOutput(JSON.stringify({ ok: true }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  return ContentService
    .createTextOutput(JSON.stringify({ ok: false, error: 'Sediste nije pronadjeno' }))
    .setMimeType(ContentService.MimeType.JSON);
}
