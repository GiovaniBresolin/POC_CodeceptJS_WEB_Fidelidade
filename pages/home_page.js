const { I } = inject()

module.exports = {
  // This is the list of the fields on the page.
  fileds: {},

  // This is the list of the buttons on the page.
  button: {
    //fazer login
    btn_login: { xpath: '//div[@class="btn-group"]/a[@href="/login"]' },

    //fazer cadatsro superior da pagina
    btn_register: { xpath: '//div[@class="btn-group"]/a[@href="/register"]' },

    //fazer cadastro
    btn_signup: {
      btn_xpath:
        '//section[contains(@class, "register")]/*//a[@href="/register"]'
    },

    //já cadastrado
    btn_readyregister: {
      xpath: '//section[contains(@class, "register")]/*//a[@href="/login"]'
    }
  },

  // This is the list of the Links on the page.
  Links: {
    //Como funciona
    lnk_howworks: { xpath: '//a[contains(@href, "/how-works")]' },
    //Ganhe
    lnk_earn: { xpath: '//a[contains(@href, "/earn")]' },
    //Troque
    lnk_exchange: { xpath: '//a[contains(@href, "/exchange")]' },
    //Indique e Ganhe
    lnk_indications: {
      xpath: '//a[contains(@href, "/indications")]'
    }
  },

  // This is the list of the labels on the page.
  labels: {
    //Como funciona
    lbs_howworks: {
      xpath: '//main[@id="shared"]/*//p[@class="how-works-title"]'
    },
    //Ganhe
    lbs_earn: { xpath: '//main[@id="shared"]//div[@class="earn"]' },
    //Troque
    lbs_exchange: { xpath: '//main[@id="shared"]//div[@class="megamenu"]' },
    //Indique e Ganhe
    lbs_indications: {
      xpath: '//main[@id="shared"]//div[@class="indications"]'
    }
  },

  // This is the list of the messages on the page.
  messages: {},

  // This is the list of constructors on the page

  //fazer login
  submitLogin() {
    I.click(this.button.btn_login)
  },

  //fazer cadastro
  submitRegister() {
    I.click(this.button.btn_register)
  },

  //fazer cadastro
  submitSignup() {
    I.click(this.button.btn_signup)
  },

  //já sou cadastrado
  submitReadyRegister() {
    I.click(this.button.btn_readyregister)
  },

  //acessa o link de Como funciona
  changeMenuHowWorks() {
    I.forceClick(this.Links.lnk_howworks)
  },

  //acessa o link de Ganhe
  changeMenuEarn() {
    I.forceClick(this.Links.lnk_earn)
  },

  //acessa o link de Troque
  changeMenuExchange() {
    I.forceClick(this.Links.lnk_exchange)
  },

  //acessa o link de Indique e Ganhe
  changeMenuIndications() {
    I.forceClick(this.Links.lnk_indications)
  }
}
