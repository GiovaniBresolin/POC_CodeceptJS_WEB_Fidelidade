module.exports = {
  bootstrap: function() {
      console.log('Isso executou ANTES do projeto todo.')
  },

  teardown: function() {
      console.log('Isso executou DEPOIS do projeto todo.')
  }
}