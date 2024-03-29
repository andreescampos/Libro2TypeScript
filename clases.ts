class Startup {
    private text: String;
    constructor(texto: String) {
        this.text = texto;
    }
    public main(): number {
        console.log(this.text);
        return 0;
    }
}
let s = new Startup("Hola mundo");
s.main();


//------ calculos.ts -----
class Calculo {
    // variables de clase declaradas y asignadas
    private x: number = 0;
    private y: number = 0;
    // constructor
    constructor(x: number, y: number) {
        // métodos del constructor
        this.setX(x);
        this.setY(y);
    }
    // Setters
    public setX(x: number): void {
        this.x = x;
    }
    public setY(y: number): void {
        this.y = y;
    }
    // Getters
    public getX(): number {
        return this.x;
    }
    public getY(): number {
        return this.y;
    }
    public sumar(): number {
        return (this.getX() + this.getY());
    }
    public restar(): number {
        return (this.mayor() - this.menor());
    }
    public menor(): number {
        if (this.getX() >= this.getY()) {
            return this.getY();
        }
        return this.getX();
    }
    public mayor(): number {
        if (this.getX() >= this.getY()) {
            return this.getX();
        }
        return this.getY();
    }
}
let calculo = new Calculo(30, 10);
console.log(calculo.restar());

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
}
document.body.appendChild(button);


class Something {
    static instances = 0;
    constructor() {
        // Acedemos directamente mediante el nombre de la clase
        Something.instances++;
    }
}
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); // 2


class FooBase {
    public l: number;
    private m: number;
    protected n: number;
}
// EFECTOS EN UNA INSTANCIA
var foo = new FooBase();
foo.l; // OK
foo.m; // ERROR : private
foo.n; // ERROR : protected
// EFECTOS EN UNA CLASE HIJA
class FooChild extends FooBase {
    constructor() {
        super();
        this.l; // OK
        this.m; // ERROR: private
        this.n; // okay
    }
}