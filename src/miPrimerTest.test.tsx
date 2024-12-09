import { describe, it, expect } from 'vitest'; 

describe('Mi primer test', () => {
    it('La suma de dos números', () => {
        const suma = (a: number, b: number) => a + b; 

        const resultado = suma(2, 3);

        expect(resultado).toBe(5);
    });

    it('El mismo texto', () => {
        const text1: string = 'Platzi Conf'; 
        const text2: string = 'Platzi Conf';
        expect(text1).toEqual(text2); 
    });
});