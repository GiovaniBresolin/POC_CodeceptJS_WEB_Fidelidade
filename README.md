# POC_CodeceptJS_WEB_Fidelidade
Projeto de POC com codeceptjs

Clonar repositório:
git clone https://github.com/GiovaniBresolin/POC_CodeceptJS_WEB_Fidelidade.git

Criar pastas:
node_modules
output

rodar o comando :
npx create-codeceptjs .

rodar o comando :
npm install -g allure-commandline --save-dev

Instalar dependencias:
npm install

Rodar testes : 
npx codeceptjs run --steps

Rodar testes com relatório :
npx codeceptjs run --plugins allure

comando para abrir o liberar excução de script:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

comando para abrir o relatório :
allure serve output


