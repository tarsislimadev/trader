import { HTML, nButton, nInputTextGroup } from '@brtmvdl/frontend'

import * as FOXBIT from '../apis/foxbit.js'

export class App extends HTML {
  children = {
    secret_input: new nInputTextGroup(),
    buttons: {
      me: new nButton()
    }
  }

  onCreate() {
    this.append(this.getSecretInput())
    this.append(this.getMeButton())
  }

  getSecretInput() {
    this.children.secret_input.children.label.setText('API key')

    const input = new HTML()
    input.append(this.children.secret_input)
    return input
  }

  getMeButton() {
    const button = new HTML()

    this.children.buttons.me.setText('Me')
    this.children.buttons.me.on('click', () => FOXBIT.me({ key: this.children.secret_input.children.input.getValue() }))
    return button.append(this.children.buttons.me)
  }
}
