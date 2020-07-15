//alert("todo va a funcionar bien");
function Iniciar(){
var value = Document.getElementaryById('singresa correctamente tu usuario');
if(value.chek()){
document.getElementById('resultado').innerHTML = "Error Ingresastes Mal Tu Nombre Vuele A Intentarlo.";
} else{
    document.getElementById('resultado').innerHTML = "Perfecto Ingresastes Correctamente Tu Nombre";
}
}