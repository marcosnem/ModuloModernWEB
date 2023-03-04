function funcCadastraPROFI(){

let nomeprofi = document.querySelector("#nome-profi").value;

if(nomeprofi ==""){

    alert("Preencher nome completo");
    return false   
}

let cpfprofi = document.querySelector("#cpf-profi").value;

if(cpfprofi ==""){

    alert("Preencher CPF");
    return false   
}

let birthprofi = document.querySelector("#birth-profi").value;
// alert(birthprofi);
if(!birthprofi){

    alert("Preencher Nascimento");
    return false   
}

let cepprofi = document.querySelector("#cep-profi").value;
// alert(birthprofi);
if(!cepprofi){

    alert("Preencher CEP");
    return false   
}

let telefoneprofi = document.querySelector("#telefone-profi").value;

if(!telefoneprofi){

    alert("Preencher Fone");
    return false   
}

let emailprofi = document.querySelector("#email-profi").value;

if(!emailprofi){

    alert("Preencher Email");
    return false   
}

let sobreprofi = document.querySelector("#sobre-profi").value;

if(!sobreprofi){

    alert("Preencher sobre você");
    return false   
}

alert("Cadastro efetuado com sucesso!");

document.getElementById("nome-profi").value ="";
document.getElementById("cpf-profi").value ="";
document.getElementById("birth-profi").value ="";
document.getElementById("cep-profi").value ="";
document.getElementById("endereco-profi").value ="";
document.getElementById("telefone-profi").value ="";
document.getElementById("email-profi").value ="";
document.getElementById("sobre-profi").value ="";

}

function consultarEndereco(){

    let cep = document.querySelector("#cep-profi").value;
    if(cep.length != 8){
        alert("CEP INVÁLIDO, o CEP precisa ter obrigatoriamente 8 números");
        document.getElementById("cep-profi").value ="";
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(response){
        // console.log(response);
        response.json().then(function(data){
            // console.log(data);
            mostrarEndereco(data);
        });
    });

}

function mostrarEndereco(dados){
   
    if(dados.erro){
   
    // document.getElementById("cep-profi").innerHTML   = "CEP NÃO ENCONTRADO";

    alert("CEP NÃO ENCONTRADO");
    document.getElementById("cep-profi").value ="";

    }else{
    
    document.getElementById("endereco-profi").value = dados.logradouro+", "+dados.bairro+", "+dados.localidade+"/"+dados.uf;    
    // cep.style.display = "none";
    // cep.style.fontSize = "2rprofi";
    
}
}

