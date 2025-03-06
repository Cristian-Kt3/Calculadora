function adicionaValor(value){
document.getElementById('display').value += value;
}
function limpaValor(){
    document.getElementById('display').value = "";
}
function calcula(){
    try{document.getElementById('display').value = eval(document.getElementById('display').value);}
    catch{
        alert('Expressão Incorreta!!!');
        document.getElementById('display').value = "";
    }
}