const { I } = inject()

module.exports = {
  // This is the list of the fields on the page.
  fileds: {
    //campo para adicionar o documento
    fld_document: { xpath: '//input[@type="tel"]' },

    //campo para adicionar a senha
    fld_password: { xpath: '//input[@type="password"]' }
  },

  // This is the list of the checkbox on the page.
  checkbox: {
    //checkbox para manter conectado lembrar me
    chk_rememberme: { xpath: '//input[@name="type"]' }
  },

  // This is the list of the buttons on the page.
  button: {
    //botao para se logar
    btn_advance: { xpath: '//button[contains(text(), "Entrar")]' }
  },

  // This is the list of the Links on the page.
  Links: {
    //link para esqueceu a senha
    lnk_lostpasswrd: { xpath: '//a[contains(@href, "/forgot-password")]' },

    //link para se cadastrar
    lnk_register: { xpath: '//a[contains(@href, "/register")]' }
  },

  // This is the list of the labels on the page.
  labels: {},

  // This is the list of the messages on the page.
  messages: {},

  // This is the list of constructors on the page

  //verifica se o docuemnto está preenchido corretamente
  verifyDocument(document) {
    I.seeElement(this.fileds.fld_document)
    I.seeInField(this.fileds.fld_document, document)
  },

  //adiciona o documento
  inputPassword(password) {
    I.seeElement(this.fileds.fld_password)
    I.fillField(this.fileds.fld_password, secret(password))
  },

  //seguir com botão avançar
  submitPassword() {
    I.seeElement(this.button.btn_advance)
    I.forceClick(this.button.btn_advance)
  }
}
