import { HTML } from '@brtmvdl/frontend'

export class App extends HTML {
  onCreate() {
    this.setStyles()
  }

  setStyles() {
    this.setStyle('background', COLORS.BLACK_1)
  }
}
