const fs = require('fs');
const vm = require('vm');
vm.runInThisContext(fs.readFileSync('./data.js', 'utf8').replace('const TABLES', 'var TABLES'));

const rows = [['Sto ID', 'Sto', 'Podnaslov', 'Sediste', 'Ime', 'Grupa'].join(',')];

TABLES.forEach(table => {
  for (let i = 0; i < 12; i++) {
    const g = table.guests[i] !== undefined ? table.guests[i] : '';
    const name  = typeof g === 'string' ? g : (g ? g.name  || '' : '');
    const group = typeof g === 'string' ? '' : (g ? g.group || '' : '');
    const subtitle = table.subtitle || '';
    rows.push([table.id, `"${table.label}"`, `"${subtitle}"`, i + 1, `"${name}"`, `"${group}"`].join(','));
  }
});

fs.writeFileSync('./raspored.csv', rows.join('\n'), 'utf8');
console.log(`Exportovano ${rows.length - 1} gostiju.`);
