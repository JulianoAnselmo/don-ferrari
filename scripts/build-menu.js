/**
 * build-menu.js
 * Lê output/cardapio.json (produzido por migrate-eatfood.js) e escreve
 * data/menu.js no formato esperado pelo site: `window.menuData = [...]`.
 *
 * Uso: node scripts/build-menu.js
 * Faz parte do pipeline: sync-menu = fetch + migrate + build.
 */

var fs = require('fs');
var path = require('path');

var INPUT = path.join(__dirname, '..', 'output', 'cardapio.json');
var OUTPUT = path.join(__dirname, '..', 'data', 'menu.js');
var MIN_CATEGORIES = 3;

if (!fs.existsSync(INPUT)) {
  console.error('ERRO: ' + INPUT + ' nao encontrado. Rode npm run migrate-menu antes.');
  process.exit(1);
}

var raw = fs.readFileSync(INPUT, 'utf8');
var data;
try {
  data = JSON.parse(raw);
} catch (e) {
  console.error('ERRO: cardapio.json invalido: ' + e.message);
  process.exit(1);
}

if (!Array.isArray(data) || data.length < MIN_CATEGORIES) {
  console.error('ERRO: cardapio.json tem menos de ' + MIN_CATEGORIES + ' categorias. Abortando para evitar sobrescrever o menu com payload vazio.');
  process.exit(1);
}

var timestamp = new Date().toISOString();
var banner = '// Gerado automaticamente por scripts/build-menu.js em ' + timestamp + '\n' +
             '// Origem: output/cardapio.json (via EatFood). NAO editar manualmente.\n\n';
var body = 'window.menuData = ' + JSON.stringify(data, null, 2) + ';\n';

fs.writeFileSync(OUTPUT, banner + body, 'utf8');

var itemCount = data.reduce(function(acc, tab) {
  return acc + (tab.categorias || []).reduce(function(a, c) { return a + (c.itens || []).length; }, 0);
}, 0);

console.log('OK: data/menu.js atualizado com ' + data.length + ' abas e ' + itemCount + ' itens.');
