let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    
    if(nome.value.length <=2){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }
    else
    {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOK = true
    }    
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){          //indexOf procura coisa específica
        txtEmail.innerHTML = 'E-mail Inválido'                                  // -1 = não existe
        txtEmail.style.color = 'red'
    }
    else
    {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOK = true
    }    
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 500){
        txtAssunto.innerHTML = 'Digite no máximo até 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else
    {
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
}

function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true ){
        alert ('Formulário enviado com sucesso!')
    }
    else
    {
        alert ('Preencha todos os campos do formulário corretamente!')
    }
}