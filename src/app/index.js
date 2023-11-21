import { HTML, nLink } from '@brtmvdl/frontend'

export class App extends HTML {
  children = {
    exchanges_list: new HTML(),
  }

  onCreate() {
    this.append(this.getExchangesList())
  }


  getExchangesList() {
    const list = new HTML()

    Array.from([
      { text: 'Binance', href: '/binance/', },
      { text: 'FoxBit', href: '/foxbit/', },
    ]).map(({ text, href }) => {
      const link = new nLink()

      link.setText(text)

      link.href(href)

      list.append(link)
    })

    this.children.exchanges_list.append(list)

    return this.children.exchanges_list
  }
}
