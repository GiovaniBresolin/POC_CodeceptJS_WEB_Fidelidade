const { I } = inject()

module.exports = {
  // This is the list of the fields on the page.
  fileds: {
    //campo para adicionar o pin
    fld_pincode: { xpath: '//input[@type="number"]' },
    fld_pincodeRegister: { xpath: '//input[@type="text"]' }
  },

  // This is the list of the buttons on the page.
  button: {
    //botao para confirmar o pin
    btn_send: { xpath: '//button[@type="submit"][contains(text(), "Enviar")]' },
    btn_advancedRegister: { xpath: '//button[@type="submit"]' }
  },

  // This is the list of the Links on the page.
  Links: {
    //link para reenviar pin
    lnk_resendpin: { xpath: '//a[contains(text(),"Reenviar pin")]' },

    //link para abrir chamado
    lnk_opencall: { xpath: '//a[contains(@href, "/open-task")]' }
  },

  // This is the list of the labels on the page.
  labels: {},

  // This is the list of the messages on the page.
  messages: {
    msg_error_pin_register: {
      xpath: '//span[contains(.,"Digite seu código PIN")]'
    }
  },

  // This is the list of constructors on the page

  // faz o acesso a pagina com confirmação do pin
  submitPin(codePin) {
    I.waitForElement(this.fileds.fld_pincode, 5)
    I.fillField(this.fileds.fld_pincode, codePin)
    I.seeElement(this.button.btn_send)
    I.click(this.button.btn_send)
  },

  submitPinRegister(codePin) {
    I.waitForElement(this.fileds.fld_pincodeRegister, 5)
    I.fillField(this.fileds.fld_pincodeRegister, codePin)
    I.seeElement(this.button.btn_advancedRegister)
    I.click(this.button.btn_advancedRegister)
  }
}
