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
  return jsonResponse({ ok: true, rows });
}

function handleWrite(params) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const headers = data[0].map(h => String(h).trim());

  const stoIdCol     = headers.indexOf('Sto ID');
  const stoCol       = headers.indexOf('Sto');
  const podnaslovCol = headers.indexOf('Podnaslov');
  const sedisteCol   = headers.indexOf('Sediste');
  const imeCol       = headers.indexOf('Ime');
  const grupaCol     = headers.indexOf('Grupa');

  const stoId   = parseInt(params.stoId);
  const sediste = parseInt(params.sediste);
  const ime     = String(params.ime   || '');
  const grupa   = String(params.grupa || '');

  // Pokušaj da pronađeš postojeći red
  for (let i = 1; i < data.length; i++) {
    if (parseInt(data[i][stoIdCol]) === stoId && parseInt(data[i][sedisteCol]) === sediste) {
      sheet.getRange(i + 1, imeCol + 1).setValue(ime);
      return jsonResponse({ ok: true });
    }
  }

  // Red ne postoji — nađi label stola iz postojećih redova
  let stoLabel = 'Sto ' + stoId, podnaslov = '';
  for (let i = 1; i < data.length; i++) {
    if (parseInt(data[i][stoIdCol]) === stoId) {
      stoLabel  = String(data[i][stoCol]       || stoLabel);
      podnaslov = String(data[i][podnaslovCol] || '');
      break;
    }
  }

  // Dodaj novi red
  const newRow = new Array(headers.length).fill('');
  newRow[stoIdCol]     = stoId;
  newRow[stoCol]       = stoLabel;
  newRow[podnaslovCol] = podnaslov;
  newRow[sedisteCol]   = sediste;
  newRow[imeCol]       = ime;
  newRow[grupaCol]     = grupa;
  sheet.appendRow(newRow);

  return jsonResponse({ ok: true, created: true });
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
