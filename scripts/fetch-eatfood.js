/**
 * fetch-eatfood.js
 * Baixa o JSON bruto do EatFood da Don Ferrari para eatfood_raw.json.
 *
 * Uso:
 *   node scripts/fetch-eatfood.js
 */

var https = require('https');
var fs = require('fs');
var path = require('path');

var URL = 'https://apionline.com.br:8443/v1/carganome/donferraripizzariataquaritinga';
var OUTPUT = path.join(__dirname, '..', 'eatfood_raw.json');

https.get(URL, function(res) {
  var body = '';
  res.on('data', function(chunk) { body += chunk; });
  res.on('end', function() {
    if (res.statusCode !== 200) {
      console.error('ERRO: HTTP ' + res.statusCode + ' ao buscar EatFood');
      process.exit(1);
    }
    try {
      JSON.parse(body);
    } catch (e) {
      console.error('ERRO: resposta invalida do EatFood: ' + e.message);
      process.exit(1);
    }

    fs.writeFileSync(OUTPUT, body, 'utf8');
    console.log('OK: eatfood_raw.json atualizado em ' + OUTPUT);
    process.exit(0);
  });
}).on('error', function(err) {
  console.error('ERRO de rede:', err.message);
  process.exit(1);
});
