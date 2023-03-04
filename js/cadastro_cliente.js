function funcCadastraCLI(){

let nomecli = document.querySelector("#nome-cli").value;

if(nomecli ==""){

    alert("Preencher nome completo");
    return false   
}

let cpfcli = document.querySelector("#cpf-cli").value;

if(cpfcli ==""){

    alert("Preencher CPF");
    return false   
}

let birthcli = document.querySelector("#birth-cli").value;
// alert(birthcli);
if(!birthcli){

    alert("Preencher Nascimento");
    return false   
}

let cepcli = document.querySelector("#cep-cli").value;
// alert(birthcli);
if(!cepcli){

    alert("Preencher CEP");
    return false   
}

let telefonecli = document.querySelector("#telefone-cli").value;

if(!telefonecli){

    alert("Preencher Fone");
    return false   
}

let emailcli = document.querySelector("#email-cli").value;

if(!emailcli){

    alert("Preencher Email");
    return false   
}

let sobrecli = document.querySelector("#sobre-cli").value;

if(!sobrecli){

    alert("Preencher sobre você");
    return false   
}

alert("Cadastro efetuado com sucesso!");

document.getElementById("nome-cli").value ="";
document.getElementById("cpf-cli").value ="";
document.getElementById("birth-cli").value ="";
document.getElementById("cep-cli").value ="";
document.getElementById("endereco-cli").value ="";
document.getElementById("telefone-cli").value ="";
document.getElementById("email-cli").value ="";
document.getElementById("sobre-cli").value ="";

}

function consultarEndereco(){

    let cep = document.querySelector("#cep-cli").value;
    if(cep.length != 8){
        alert("CEP INVÁLIDO, o CEP precisa ter obrigatoriamente 8 números");
        document.getElementById("cep-cli").value ="";
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
   
    // document.getElementById("cep-cli").innerHTML   = "CEP NÃO ENCONTRADO";

    alert("CEP NÃO ENCONTRADO");
    document.getElementById("cep-cli").value ="";

    }else{
    
    document.getElementById("endereco-cli").value = dados.logradouro+", "+dados.bairro+", "+dados.localidade+"/"+dados.uf;    
    // cep.style.display = "none";
    // cep.style.fontSize = "2rem";
    
}
}

