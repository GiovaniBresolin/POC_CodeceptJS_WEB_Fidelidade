const pin_page = require('../pages/pin_page')

const { I, home_page, create_user_page } = inject()

Feature('Create User')

Before(() => {
  I.amOnPage('/')
  I.waitForElement(home_page.labels.lbs_howworks, 5)
  I.seeElement(home_page.labels.lbs_howworks)
})

Scenario('Verify required fields', () => {
  // home
  home_page.submitRegister()

  // check required fields name
  create_user_page.checkMsgErrorName()

  // check required fields document
  create_user_page.checkMsgErrorDocment()

  // check required fields phone
  create_user_page.checkMsgErrorPhone()
})

Scenario('Create a New User', () => {
  var name = 'teste 1'
  var document = '54150239096'
  var phone = '98997426714'
  var codePin = '1234'

  // home
  home_page.submitRegister()

  // create user
  create_user_page.fillFieldsCreateUser(name, document, phone)
  create_user_page.acceptTermsUser()
  create_user_page.createUser()

  //input code pin
  pin_page.submitPinRegister(codePin)
})
