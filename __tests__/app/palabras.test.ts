import { describe , test } from "@jest/globals";
import { esPalindromo } from "../../src/app/palabras"

describe('Suite de pruebas función esPalindromo', () => {
    test('tiene que retornar true para un palíndromo', () => {
        expect(esPalindromo('anilina')).toBe(true);
    });

    test('tiene que retornar true para un palíndromo con espacios y mayúsculas', () => {
        expect(esPalindromo('A man a plan a canal Panama')).toBe(true);
    });

    test('tiene que retornar false para una frase que no es un palíndromo', () => {
        expect(esPalindromo('Hola mundo')).toBe(false);
    });

    test('debería retornar false para una cadena vacía', () => {
        expect(esPalindromo('')).toBe(false);
    });
});