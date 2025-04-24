import { describe, test } from "@jest/globals";
import { esPrimo } from "../../src/app/numeros"

describe("Suite de test de Numeros",()=>{
    test("Si el numero es menor a 2",()=>{
        expect(esPrimo(1)).toBe(false);
    })

    test("Si el numero no es primo",()=>{
        expect(esPrimo(6)).toBe(false)
    })

    test("Es numero primo", ()=>{
        expect(esPrimo(3)).toBe(true)
    })
})