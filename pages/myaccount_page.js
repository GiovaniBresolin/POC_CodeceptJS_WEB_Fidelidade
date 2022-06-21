const { I } = inject()

module.exports = {
  // This is the list of the fields on the page.
  fileds: {},

  // This is the list of the buttons on the page.
  button: {},

  // This is the list of the Links on the page.
  Links: {},

  // This is the list of the labels on the page.
  labels: {
    lbs_myaccount: { xpath: '//h2[contains(text(), "Minha Conta")]' }
  },

  // This is the list of the messages on the page.
  messages: {},
  // This is the list of constructors on the page

  //Confirma que estou na ágina  minha conta
  confirmMyAccount() {
    I.seeElement(this.labels.lbs_myaccount)
  }
}
