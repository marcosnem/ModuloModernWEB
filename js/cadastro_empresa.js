function funcCadastraEM(){

let nomeem = document.querySelector("#nome-em").value;    

if(nomeem ==""){

    alert("Preencher Razao Social");
    return false   
}

let cnpjem = document.querySelector("#cnpj-em").value;

if(cnpjem ==""){

    alert("Preencher CNPJ");
    return false   
}

let birthem = document.querySelector("#birth-em").value;
// alert(birthem);
if(!birthem){

    alert("Preencher data de criação");
    return false   
}

let cepem = document.querySelector("#cep-em").value;
// alert(birthem);
if(!cepem){

    alert("Preencher CEP");
    return false   
}

let telefoneem = document.querySelector("#telefone-em").value;

if(!telefoneem){

    alert("Preencher Fone");
    return false   
}

let emailem = document.querySelector("#email-em").value;

if(!emailem){

    alert("Preencher Email");
    return false   
}

let siteem = document.querySelector("#site-em").value;

if(!siteem){

    alert("Preencher Site ou Rede social");
    return false   
}

let sobreem = document.querySelector("#sobre-em").value;

if(!sobreem){

    alert("Preencher sobre você");
    return false   
}

alert("Cadastro efetuado com sucesso!");

document.getElementById("nome-em").value ="";
document.getElementById("cnpj-em").value ="";
document.getElementById("birth-em").value ="";
document.getElementById("cep-em").value ="";
document.getElementById("endereco-em").value ="";
document.getElementById("telefone-em").value ="";
document.getElementById("email-em").value ="";
document.getElementById("site-em").value ="";
document.getElementById("sobre-em").value ="";

}

function consultarEndereco(){

    let cep = document.querySelector("#cep-em").value;
    if(cep.length != 8){
        alert("CEP INVÁLIDO, o CEP precisa ter obrigatoriamente 8 números");
        document.getElementById("cep-em").value ="";
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
   
    // document.getElementById("cep-em").innerHTML   = "CEP NÃO ENCONTRADO";

    alert("CEP NÃO ENCONTRADO");
    document.getElementById("cep-em").value ="";

    }else{
    
    document.getElementById("endereco-em").value = dados.logradouro+", "+dados.bairro+", "+dados.localidade+"/"+dados.uf;    
    // cep.style.display = "none";
    // cep.style.fontSize = "2rem";
    
}
}



