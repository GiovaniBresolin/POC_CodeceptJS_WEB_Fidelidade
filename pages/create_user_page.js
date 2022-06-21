const { I } = inject()

module.exports = {
  // This is the list of the fields on the page.
  fileds: {
    fld_name: { xpath: '//input[@type="text"][contains(@placeholder,"nome")]' },
    fld_document: {
      xpath: '//input[@type="tel"][contains(@placeholder,"CPF")]'
    },
    fld_phone: { xpath: '//input[@type="tel"][contains(@placeholder,"(__)")]' },

    //campo indicado
    fld_indicate: {
      xpath: '//input[@type="text"][contains(@placeholder,"código")]'
    }
  },

  // This is the list of the checkbox on the page.
  checkbox: {
    //checkbox para o aceite do termo de uso
    chk_acceptterms: { xpath: '//input[@type="checkbox"]' }
  },

  // This is the list of the buttons on the page.
  button: {
    btn_register: {
      xpath: '//button[@type="submit"][contains(text(), "Cadastrar")]'
    }
  },

  // This is the list of the Links on the page.
  Links: {
    lnk_terms: {
      xpath: '//a[contains(@href, "/terms")][contains(text(), "termos")]'
    },
    lnk_login: { xpath: '//a[contains(@href, "/login")]' }
  },

  // This is the list of the labels on the page.
  labels: {
    lbs_typeuser: { xpath: '//label[contains(.,"Pessoa Física")]' }
  },

  // This is the list of the messages on the page.
  messages: {
    msg_error_name: { xpath: '//span[contains(text(),"Digite seu nome")]' },
    msg_error_document: { xpath: '//span[contains(text(),"Digite seu CPF")]' },
    msg_error_phone: { xpath: '//span[contains(text(),"Digite seu celular")]' }
  },
  // This is the list of constructors on the page
  // preenche os campos do formulario de cadastro
  fillFieldsCreateUser(name, document, phone) {
    I.waitForElement(this.labels.lbs_typeuser, 5)
    I.click(this.labels.lbs_typeuser)
    I.fillField(this.fileds.fld_name, name)
    I.fillField(this.fileds.fld_document, document)
    I.fillField(this.fileds.fld_phone, phone)
  },

  // seleciona os campos do formulario de cadastro
  selectFieldsCreateUser() {
    I.waitForElement(this.labels.lbs_typeuser, 5)
    I.click(this.labels.lbs_typeuser)
    I.click(this.fileds.fld_name)
    I.click(this.fileds.fld_document)
    I.click(this.fileds.fld_phone)
    I.click(this.fileds.fld_indicate)
  },

  // verificar mensagem de erro ao não preencher o campo nome
  checkMsgErrorName() {
    I.waitForElement(this.labels.lbs_typeuser, 5)
    I.click(this.labels.lbs_typeuser)
    I.click(this.fileds.fld_name)
    I.click(this.fileds.fld_indicate)
    I.waitForElement(this.messages.msg_error_name, 5)
    I.seeElement(this.messages.msg_error_name)
  },

  // verificar mensagem de erro ao não preencher o campo documento
  checkMsgErrorDocment() {
    I.click(this.fileds.fld_document)
    I.click(this.fileds.fld_indicate)
    I.waitForElement(this.messages.msg_error_document, 5)
    I.seeElement(this.messages.msg_error_document)
  },

  // verificar mensagem de erro ao não preencher o campo telefone
  checkMsgErrorPhone() {
    I.waitForElement(this.labels.lbs_typeuser, 5)
    I.click(this.fileds.fld_phone)
    I.click(this.fileds.fld_indicate)
    I.waitForElement(this.messages.msg_error_phone, 5)
    I.seeElement(this.messages.msg_error_phone)
  },

  acceptTermsUser() {
    I.waitForElement(this.checkbox.chk_acceptterms, 5)
    I.forceClick(this.checkbox.chk_acceptterms)
  },

  createUser() {
    I.click(this.button.btn_register)
  }
}
