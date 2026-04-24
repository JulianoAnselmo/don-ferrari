# Don Ferrari — site institucional

Site estático da **Don Ferrari Pizzaria** (Taquaritinga-SP) com cardápio sincronizado do EatFood e pedidos pelo WhatsApp.

Domínio: [donferrari.com.br](https://www.donferrari.com.br)

## Stack

- HTML/CSS/JS vanilla, sem build step.
- Fontes Google: Playfair Display + Manrope.
- Cardápio sincronizado do EatFood via scripts Node.
- (Opcional) sync com Firestore via `firebase-admin`.

## Rodar local

```bash
npx serve .
```

Ou abra `index.html` direto no navegador (file://).

## Atualizar cardápio (do EatFood)

Pipeline completo em um comando:

```bash
npm run sync-menu
```

Isso executa, em ordem:

1. `fetch-menu` — baixa JSON cru do EatFood (`apionline.com.br`) para `eatfood_raw.json`.
2. `migrate-menu` — transforma em `output/cardapio.json`, `output/businessInfo.json`, `output/promocoes.json`.
3. `build-menu` — gera `data/menu.js` (usado pelo site).

Após rodar, commitar `eatfood_raw.json`, `output/*.json` e `data/menu.js` e fazer deploy.

## Onde editar o quê

| O que | Arquivo |
|---|---|
| Copy do hero, features, galeria, contato | `data/site.js` |
| Promoções e combos (cards) | `index.html` (seção `#promocoes`) |
| Informações de delivery (taxa, tempos) | `data/site.js` (`businessInfoData`) + `scripts/main.js` (`DELIVERY_FEE`) |
| Cardápio | **Não editar `data/menu.js` manualmente** — rodar `npm run sync-menu` |
| Cores, tipografia, layout | `styles/main.css` (variáveis CSS no topo) |
| JSON-LD / SEO | `index.html` `<head>` |

## Sync com Firestore (opcional)

Para o `cardapio-admin` separado:

```bash
npm run sync-firestore
```

Requer `serviceAccountProd.json` copiado de `cardapio-admin` na raiz. Estratégia de merge inteligente em `scripts/sync-eatfood.js`.

## Deploy

O repo é publicado como site estático (Pages). `CNAME` aponta para `donferrari.com.br`. `.deployignore` e `.gitignore` evitam subir `node_modules`, `serviceAccountProd.json` e JSONs intermediários que não são úteis em produção.
