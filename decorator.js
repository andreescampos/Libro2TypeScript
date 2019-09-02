var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function log(constructor) {
    console.log('Registered Class: ' + constructor['name'] + ' at ' + Date.now());
}
 > ;
void {
    console: console, : .log('Registered Method: ' + propertyKey.toString() + ' at ' + Date.now())
};
function logparam(target, propertyKey, parameterIndex) {
    console.log('Registered Parameter: ' + propertyKey.toString() + ' - ' + parameterI, ndex + ' at ' + Date.now());
}
// Así se utiliza un decorador
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.name = 'name';
        console.log('constructor');
    }
    MyClass.prototype.myMethod = function () {
        console.log('method');
    };
    MyClass.prototype.myMethod2 = function (param1, param2) {
        console.log('method2');
    };
    __decorate([
        logm
    ], MyClass.prototype, "myMethod");
    __decorate([
        logm,
        __param(1, logparam)
    ], MyClass.prototype, "myMethod2");
    MyClass = __decorate([
        log
    ], MyClass);
    return MyClass;
}());
var myClass = new MyClass();
myClass.myMethod();
myClass.myMethod2(1, false);
// ---------- COMO SE USAN LOS DECORADORES
// type ClassDecorator = <TFunction extends Function>(target: TFunction): TFunction |void;
// type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
// type PropertyDecorator = (target: Object, propertyKey: string | symbol): void;
// type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number): void;
//Class decorator
function ClassDecoratorParams(param1, param2) {
    return function (target // The class the decorator is declared on
    ) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on:", target);
    };
}
var ClassDecoratorParamsExample = /** @class */ (function () {
    function ClassDecoratorParamsExample() {
    }
    ClassDecoratorParamsExample = __decorate([
        ClassDecoratorParams(1, "a"),
        ClassDecoratorParams(2, "b")
    ], ClassDecoratorParamsExample);
    return ClassDecoratorParamsExample;
}());
ClassDecoratorParams(2, 'b');
called;
on: function ClassDecoratorParamsExample() {
}
ClassDecoratorParams(1, 'a');
called;
on: function ClassDecoratorParamsExample() {
}
//Property Decorator
function PropertyDecorator(target, // The prototype of the class
propertyKey // The name of the property
) {
    console.log("PropertyDecorator called on: ", target, propertyKey);
}
var PropertyDecoratorExample = /** @class */ (function () {
    function PropertyDecoratorExample() {
    }
    __decorate([
        PropertyDecorator
    ], PropertyDecoratorExample.prototype, "name");
    return PropertyDecoratorExample;
}());
PropertyDecorator;
called;
on: { }
name;
//Method Decorator
function MethodDecorator(target, // The prototype of the class
propertyKey, // The name of the method
descriptor) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}
var MethodDecoratorExample = /** @class */ (function () {
    function MethodDecoratorExample() {
    }
    MethodDecoratorExample.prototype.method = function () {
    };
    __decorate([
        MethodDecorator
    ], MethodDecoratorExample.prototype, "method");
    return MethodDecoratorExample;
}());
MethodDecorator;
called;
on: {
    method: [Function];
}
method;
{
    value: [Function],
        writable;
    true,
        enumerable;
    true,
        configurable;
    true;
}
//Static Method Decorator
function StaticMethodDecorator(target, // the function itself and not the prototype
propertyKey, // The name of the static method
descriptor) {
    console.log("StaticMethodDecorator called on: ", target, propertyKey, descriptor);
}
var StaticMethodDecoratorExample = /** @class */ (function () {
    function StaticMethodDecoratorExample() {
    }
    StaticMethodDecoratorExample.staticMethod = function () {
    };
    __decorate([
        StaticMethodDecorator
    ], StaticMethodDecoratorExample, "staticMethod");
    return StaticMethodDecoratorExample;
}());
StaticMethodDecorator;
called;
on: function StaticMethodDecoratorExample() {
}
