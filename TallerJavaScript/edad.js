var edad = prompt("ingresa tu edad por favor ");

console.log(edad);


function mayor(){
    console.log("bienvenido ya que tienes" + edad + "años de edad");
}
function menor(){
    console.log("no puede ingresar por que tienes" + edad + "años de edad");

}


function validar(){
    if(edad < 18){
        menor();

    } else {

        mayor();

    }

}

validar();
