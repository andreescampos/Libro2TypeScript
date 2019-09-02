Promise.reject(new Error('Algo malo paso'))
    .then((res) => {
        console.log(res);	//	no llamado
        return 456;
    })
    .then((res) => {
        console.log(res);	//	no llamado
        return Promise.resolve(123);
    })
    .then((res) => {
        console.log(res);	//	no llamado
        return Promise.resolve(123);
    })
    .catch((err) => {
        console.log(err.message);	//algo malo pasó							
    });


Promise.reject(new Error('Algo malo paso'))
    .then((res) => {
        console.log(res);	//	no llamado
        return 456;
    })
    .catch((err) => {
        console.log(err.message);	//	Algo malo paso
        return Promise.resolve(123);
    })
    .then((res) => {
        console.log(res);	//	123
    })



//Cualquier	error ocurrido en un then llamará al método catch. Ej.:
Promise.resolve(123)
    .then((res) => {
        throw new Error('something	bad	happened')
        return 456;
    })
    .then((res) => {
        console.log(res);	//	never	called
        return Promise.resolve(789);
    })
    .catch((err) => {
        console.log(err.message);	//	something	bad	happened
    })

//Funcion que devuelve promesas

function iReturnPromiseAfter1Second(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello	world!"), 1000);
    });
}
Promise.resolve(123)
    .then((res) => {
        //	res	is	inferred	to	be	of	type	`number`
        return iReturnPromiseAfter1Second();
    })
    .then((res) => {
        //	res	is	inferred	to	be	of	type	`string`
        console.log(res);	//	Hello	world!
    });


//Carga de Json de manera asincrona

//	buen archivo json
loadJSONAsync('good.json')
    .then(function (val) { console.log(val); })
    .catch(function (err) {
        console.log('good.json	error', err.message);	//	never	called
    })
    //	archivo json no existente
    .then(function () {
        return loadJSONAsync('absent.json');
    })
    .then(function (val) { console.log(val); })	//	never	called
    .catch(function (err) {
        console.log('absent.json	error', err.message);
    })
    //	archivo json invalido
    .then(function () {
        return loadJSONAsync('bad.json');
    })
    .then(function (val) { console.log(val); })	//	never	called
    .catch(function (err) {
        console.log('bad.json	error', err.message);
    });