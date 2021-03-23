// /*
//     var nome = "Viviane"
//     var idade = 21
//     alert(nome + " " + idade)
// */
// var precoDolar = parseFloat(prompt("Digite um valor em dólar para conversão: "))

// var precoReal = (precoDolar * 5.5).toFixed(2)

// alert("R$"+precoReal)

var catchPreco="";
function getPrecoDolar () {
    catchPreco = parseFloat((document.getElementById('precoDolar').value)*5.5).toFixed(2);
    document.getElementById('precoReal').innerHTML = 'R&dollar;' + parseFloat(catchPreco);
}