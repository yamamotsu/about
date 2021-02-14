## Gridsomeを使った静的サイト生成

GridsomeはVue.jsで静的サイトが作れるツール
Github Pages や Netlifyなどにアップすればサーバーレスにサイトを作れる

MDやWordpressのデータをいい感じに紐付けてVueの変数に渡せる仕組みがある

### 参考サイト

[Vue.jsのサイトジェネレータGridsomeが最高かもしれない](https://www.keisuke69.net/entry/2020/06/09/112907)

### プロジェクト構成

#### `gridsome.config.js`

データソースや諸々の設定ファイル

## Vuetifyの利用
Vue.js用のMaterial Designライブラリ Vuetifyを使えるようにする

[公式ドキュメント](https://gridsome.org/docs/assets-css/#vuetify)

```bash
yarn add vuetify
yarn add webpack-node-externals --dev # 開発用ローカルサーバで動かす為のパッケージ
```

### `gridsome.server.js` 追記

```gridsome.server.js
const nodeExternals = require('webpack-node-externals')

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
  })
}
```