// ----------- test.ts ----------
// No es código de verdad solamente es la prueba de concepto
async function foo() {
    try {
        var val = await getMeAPromise();
        console.log(val);
    }
    catch (err) {
        console.log('Error: ', err.message);
    }
}