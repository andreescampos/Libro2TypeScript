var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function infiniteSequence() {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 0;
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, i++];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var iterator = infiniteSequence();
while (true) {
    console.log(iterator.next()); // { value: xxxx, done: false } para siempre
}
function idMaker() {
    var index;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                index = 0;
                _a.label = 1;
            case 1:
                if (!(index < 3)) return [3 /*break*/, 3];
                return [4 /*yield*/, index++];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var gen = idMaker();
console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: undefined, done: true }
// Accede a la variable por que se le ha dicho apesar de que el 'yield' no ha sido efectuado.
//------ main.ts -------function* generator(){
console.log('Execution started');
yield 0;
console.log('Execution resumed');
yield 1;
console.log('Execution resumed');
var iterator = generator();
console.log('Starting iteration'); // Esto se ejecutará antes que nada de dentro del método generator()
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
function generator() {
    var bar;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 'Console log'];
            case 1:
                bar = _a.sent();
                console.log(bar); // 'Un testo inyectado' -> asignado por nextThing = iterator.nex
                t('bar');
                return [4 /*yield*/, 1];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var iterator = generator();
// Inicia la ejecucion
var foo = iterator.next();
console.log(foo.value); // Console log
// Reanuda la ejecucion
var nextThing = iterator.next('Un texto inyectado'); // Aqui se le asigna el value a
l;
foo.value;
console.log(nextThing);
function logGenerator() {
    var _a, _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _b = (_a = console).log;
                return [4 /*yield*/];
            case 1:
                _b.apply(_a, [_g.sent()]);
                _d = (_c = console).log;
                return [4 /*yield*/];
            case 2:
                _d.apply(_c, [_g.sent()]);
                _f = (_e = console).log;
                return [4 /*yield*/];
            case 3:
                _f.apply(_e, [_g.sent()]);
                return [2 /*return*/];
        }
    });
}
var gen = logGenerator();
// the first call of next executes from the start of the function
// until the first yield statement
gen.next();
gen.next('pretzel'); // pretzel
gen.next('california'); // california
gen.next('mayonnaise'); // mayonnaise
// --------- test.ts -----function* generator() {
try {
    yield 'foo';
    throw Error("Test");
}
catch (err) {
    console.log(err.message); // bar!
}
var iterator = generator();
// Start execution till we get first yield value
var foo = iterator.next();
console.log(foo.value);
// como está comentado la excepción no se ejuta ya que no hay un 'next()'
//var foo = iterator.next();
