const {
  I,
  home_page,
  user_login_page,
  password_login_page,
  pin_page,
  myaccout_page
} = inject()

Feature('login')

Before(() => {
  I.amOnPage('/')
  I.waitForElement(home_page.labels.lbs_howworks, 5)
  I.seeElement(home_page.labels.lbs_howworks)
})

Scenario('Home page navigation', ({ I }) => {
  //faz o acesso a pagina de Ganho
  home_page.changeMenuEarn()
  I.waitForElement(home_page.labels.lbs_earn, 5)
  I.seeElement(home_page.labels.lbs_earn)

  //faz o acesso a pagina de Troque
  home_page.changeMenuExchange()
  I.waitForElement(home_page.labels.lbs_exchange, 5)
  I.seeElement(home_page.labels.lbs_exchange)

  //faz o acesso a pagina de Indique e Ganhe
  home_page.changeMenuIndications()
  I.waitForElement(home_page.labels.lbs_indications, 5)
  I.seeElement(home_page.labels.lbs_indications)

  //faz o acesso a pagina de Como funciona
  home_page.changeMenuHowWorks()
  I.waitForElement(home_page.labels.lbs_howworks, 5)
  I.seeElement(home_page.labels.lbs_howworks)
})

Scenario('Login', ({ I }) => {
  var document = ''
  var password = ''
  var codePin = '2512'

  //faz o acesso a pagina de Login
  home_page.submitLogin()

  //faz o login com documento
  I.waitForElement(user_login_page.fileds.fld_document, 5)
  user_login_page.inputDocument(document)
  user_login_page.submitDocument()

  //adiciona a senha
  I.waitForElement(password_login_page.fileds.fld_password, 5)
  password_login_page.verifyDocument(document)
  password_login_page.inputPassword(password)
  password_login_page.submitPassword()

  //adiciona a pin
  I.waitForElement(pin_page.fileds.fld_pincode, 5)
  pin_page.submitPin(codePin)

  //faz o acesso a pagina de minha conta
  I.waitForElement(myaccout_page.labels.lbs_myaccount, 5)
  I.seeElement(myaccout_page.labels.lbs_myaccount)
})
