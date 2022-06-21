const { I } = inject()

module.exports = {
  // This is the list of the fields on the page.
  fileds: {
    //campo para adicionar o documento
    fld_document: { xpath: '//input[@type="tel"]' }
  },

  // This is the list of the buttons on the page.
  button: {
    //botao para se logar
    btn_advance_login: { xpath: '//button[@type="submit"]' }
  },

  // This is the list of the Links on the page.
  Links: {
    //link para se cadastrar
    lnk_register: { xpath: '//a[contains(@href, "/register")]' }
  },

  // This is the list of the labels on the page.
  labels: {},

  // This is the list of the messages on the page.
  messages: {},

  // This is the list of constructors on the page

  //adiciona o documento
  inputDocument(document) {
    I.seeElement(this.fileds.fld_document)
    I.fillField(this.fileds.fld_document, document)
  },

  //seguir com botão avançar
  submitDocument() {
    I.waitForEnabled(this.button.btn_advance_login)
    I.forceClick(this.button.btn_advance_login)
  }
}
