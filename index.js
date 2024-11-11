// para utilizar caixa de seleção interativa no prompt de comando, utilizamos a biblioteca javascript
const { select } = require('@inquirer/prompts')

const start = async () => {
    while(true) {
        
        const opcao = await select({
            // message e choices são obrigatórios para o select
            message: "Menu >", 
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })


        switch(opcao) {
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                console.log("Até a próxima!")
                return
        }
    }
}

start()