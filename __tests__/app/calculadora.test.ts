import { describe, test } from "@jest/globals";
import { restar, suma , multiplicacion , division , potencia , factorial} from "../../src/app/calculadora";

describe("Suite de test de calculadora", () => {

    test("probar suma de enteros", () => {

        expect(suma(1, 1)).toBe(2);
        expect(suma(10, 15)).toBe(25);
        expect(suma(10, 15)).not.toBe(30);

        let a: any = "10";
        let b: any = "15";
        expect(suma(a, 15)).toBeNaN();
        expect(suma(a, b)).toBeNaN();

        a = 1.5
        expect(suma(a, 15)).toBe(16.5)

        a = null
        expect(suma(a, 15)).toBeNaN();

        a = Math.PI
        expect(suma(a, 15)).toBeCloseTo(18.14, 2);

        a = -10
        expect(suma(a, 15)).toBe(5);

        a = undefined
        expect(() => { suma(a, 15) }).toThrow("No se puede sumar indefinidos");
    });

    test("probar resta de enteros", () => {

        expect(restar(10, 1)).toBe(9);

        let a: any = "10";
        expect(restar(a, 1)).toBeNaN();

        a = undefined
        expect(() => { restar(a, 1) }).toThrow("No se puede restar indefinidos");
    })

    test("Se prueba la validacion undefined", ()=>{
        expect(suma( undefined , 3 )).toThrow("No se puede sumar indefinidos");
    });

    test("Se prueba el tipo de dato numerico", () => {
        expect(suma( "Hola" , 3)).toBeNaN();
    });

    test('Pruebas unitarias para la funcion multiplicacion', () => {
        expect(multiplicacion(2, 3)).toBe(6);
        expect(multiplicacion(2, -3)).toBe(-6);
        expect(multiplicacion(-2, -3)).toBe(6);
        expect(multiplicacion(5, 0)).toBe(0);
        expect(multiplicacion(0, 0)).toBe(0);
        expect(multiplicacion('a' as any, 5)).toBeNaN();
        
    });

   test('División de dos números', () => {
    expect(division(6, 3)).toBe(2);
    expect(division(6, -3)).toBe(-2);
    expect(division(-6, -3)).toBe(2);
    expect(division(5, 0)).toBe("No se puede dividir por cero");
    expect(division(0, 5)).toBe(0);
    expect(division('a' as any, 5)).toBeNaN();
    expect(division(5, 'b' as any)).toBeNaN();
    expect(division('a' as any, 'b' as any)).toBeNaN();
    });   
});

describe('Pruebas para la función potencia', () => {
    test('Potencia de un número positivo elevado a un número positivo', () => {
        expect(potencia(2, 3)).toBe(8);
    });

    test('Potencia de un número positivo elevado a cero', () => {
        expect(potencia(5, 0)).toBe(1); 
    });

    test('Potencia de cero elevado a un número positivo', () => {
        expect(potencia(0, 5)).toBe(0); 
    });

    test('Potencia de un número negativo elevado a un número positivo', () => {
        expect(potencia(-2, 3)).toBe(-8); 
    });

    test('Potencia de un número positivo elevado a un número negativo', () => {
        expect(potencia(2, -2)).toBe(0.25); 
    });

    test('Potencia de un número negativo elevado a un número negativo', () => {
        expect(potencia(-2, -2)).toBe(0.25); 
    });


    test('Devolver NaN si el primer argumento no es un número', () => {
        expect(potencia('a' as any, 2)).toBeNaN();
    });

    test('Devolver NaN si el segundo argumento no es un número', () => {
        expect(potencia(2, 'b' as any)).toBeNaN();
    });

    test('Devolver NaN si ambos argumentos no son números', () => {
        expect(potencia('a' as any, 'b' as any)).toBeNaN();
    });
});

describe('Pruebas para la función factorial', () => {
    test('Factorial de 0', () => {
        expect(factorial(0)).toBe(1); 
    });

    test('Factorial de 1', () => {
        expect(factorial(1)).toBe(1); 
    });

    test('Factorial de un número positivo', () => {
        expect(factorial(5)).toBe(120); 
    });

    test('Factorial de un número positivo mayor', () => {
        expect(factorial(6)).toBe(720); 
    });

    test('Factorial de un número negativo', () => {
        expect(factorial(-1)).toBeNaN(); 
    });

    test('Factorial de un número decimal', () => {
        expect(factorial(2.5)).toBeNaN(); 
    });
    test('Lanzar error si el argumento es undefined', () => {
        expect(() => factorial(undefined)).toThrow("No se puede calcular factorial de un valor indefinido");
    });

    test('Devolver NaN si el argumento no es un número', () => {
        expect(factorial('a' as any)).toBeNaN(); 
    });

    test('Devolver NaN si el argumento es un objeto', () => {
        expect(factorial({} as any)).toBeNaN();
    });

    test('Devolver NaN si el argumento es un array', () => {
        expect(factorial([] as any)).toBeNaN(); 
    });

});