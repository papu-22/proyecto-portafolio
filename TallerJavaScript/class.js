console.log("hola todo esta bien")

//area = (b * a)/2;

class triangulo {
    constructor(b,a){
        this.b = b;
        this.a = a;
    }
    Area(b,a){
        return (b*a)/2;
    }
};



console.warn(triangulo.name);

var triang = new triangulo(20,7);
var triang2 = new triangulo(6,7);



console.log(triang,triang2);
console.log("la altura es: "+ triang.a);
console.log("la base es: "+ triang.a);


class Area {
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    }
    //metodo = funcion
    get area(){
        return this.calcularArea();
    }
    calcularArea(){
        return (this.base * this.altura) / 2;
    }

}

var figura = new Area(10,8);
console.log(figura.area);