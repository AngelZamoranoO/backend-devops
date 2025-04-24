function operar(operacion: string = "", a: number, b?: number) {
    if (operacion === 'suma') {
        return suma(a, b!);
    } else if (operacion === 'resta') {
        return restar(a, b!);
    } else if (operacion === 'multiplicacion') {
        return multiplicacion(a, b!);
    } else if (operacion === 'division') {
        return division(a, b!);
    } else if (operacion === 'potencia') {
        return potencia(a, b!);
    } else if (operacion === 'factorial') {
        return factorial(a);
    } else {
        return "operacion ingresa no corresponde"
    }
}

function suma(a: any, b: any) { //a = 1 , b=2

    if (a === undefined || b === undefined) {
        throw new Error("No se puede sumar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a + b;
}

function restar(a: any, b: any) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a - b;
}

function multiplicacion(a: any, b: any) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede multiplicar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;
}

function division(a: any, b: any) {
    try {
        if (a === undefined || b === undefined) {
            throw new Error("No se puede dividir indefinidos");
        }
        if (typeof a !== 'number' || typeof b !== 'number') {
            return NaN;
        }
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    } catch (error) {
        return (error as Error).message;
    }
}

function potencia(a: any, b: any) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede calcular potencia con valores indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return Math.pow(a, b);
}

function factorial(n: any): number {
    if (n === undefined) {
        throw new Error("No se puede calcular factorial de un valor indefinido");
    }
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        return NaN;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}



export { suma, operar, restar , multiplicacion , division, potencia, factorial };
