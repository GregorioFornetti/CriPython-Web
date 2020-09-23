
describe("Cifra de César", () => {
    
    describe("Apenas letras", () => {

        it("chave 1", () => {
            expect(encriptar_cesar_apenas_letras('1', 'abc')).toEqual('bcd');
            expect(traduzir_cesar_apenas_letras('1', 'bcd')).toEqual('abc');
        });

        it("chave invalida vazia", () => {
            expect(encriptar_cesar_apenas_letras('', 'a')).toEqual(ERRO_CHAVE);
            expect(traduzir_cesar_apenas_letras('', 'a')).toEqual(ERRO_CHAVE);
        });

        it("chave invalida negativa", () => {
            expect(encriptar_cesar_apenas_letras('-1', 'a')).toEqual(ERRO_CHAVE);
            expect(traduzir_cesar_apenas_letras('-1', 'a')).toEqual(ERRO_CHAVE);
        });

        it("chave invalida texto", () => {
            expect(encriptar_cesar_apenas_letras('texto', 'a')).toEqual(ERRO_CHAVE);
            expect(traduzir_cesar_apenas_letras('texto', 'a')).toEqual(ERRO_CHAVE);
        });

        it("chave invalida float", () => {
            expect(encriptar_cesar_apenas_letras('1.1', 'a')).toEqual(ERRO_CHAVE);
            expect(traduzir_cesar_apenas_letras('2.1', 'a')).toEqual(ERRO_CHAVE);
        });

        it("mensagem invalida", () => {
            expect(encriptar_cesar_apenas_letras('12', '')).toEqual(ERRO_MENSAGEM);
            expect(traduzir_cesar_apenas_letras('12', '')).toEqual(ERRO_MENSAGEM);
        });

        it("volta no alfabeto", () => {
            expect(encriptar_cesar_apenas_letras('1', 'z')).toEqual('a');
            expect(traduzir_cesar_apenas_letras('1', 'a')).toEqual('z');
        });

        it("diferenciação entre maiusculo e minusculo (case sensitive)", () => {
            expect(encriptar_cesar_apenas_letras('1', 'aAbBcCdD')).toEqual('bBcCdDeE');
            expect(traduzir_cesar_apenas_letras('1', 'bBcCdDeE')).toEqual('aAbBcCdD');
        });

        it("caracteres especias nao influenciados", () => {
            expect(encriptar_cesar_apenas_letras('1', 'áéíóú!? aeiou')).toEqual('áéíóú!? bfjpv');
            expect(traduzir_cesar_apenas_letras('1', 'áéíóú!? bfjpv')).toEqual('áéíóú!? aeiou');
        });

        it("chave maior", () => {
            expect(encriptar_cesar_apenas_letras('10', 'az')).toEqual('kj');
            expect(traduzir_cesar_apenas_letras('10', 'kj')).toEqual('az');
        });

        it("texto grande 1", () => {
            expect(encriptar_cesar_apenas_letras('1', 'abcdefghijklmnopqrstuvwxyz')).toEqual('bcdefghijklmnopqrstuvwxyza');
            expect(traduzir_cesar_apenas_letras('1', 'bcdefghijklmnopqrstuvwxyza')).toEqual('abcdefghijklmnopqrstuvwxyz');
        });

        it("texto grande 2", () => {
            expect(encriptar_cesar_apenas_letras('7', 'Bom dia, Boa tarde, Boa noite!')).toEqual('Ivt kph, Ivh ahykl, Ivh uvpal!');
            expect(traduzir_cesar_apenas_letras('7', 'Ivt kph, Ivh ahykl, Ivh uvpal!')).toEqual('Bom dia, Boa tarde, Boa noite!');
        });
    });

    describe("vários caracteres", () => {

        it("chave 1", () => {
            expect(encriptar_cesar_varios_caracteres('1', 'a')).toEqual('b');
            expect(traduzir_cesar_varios_caracteres('1', 'b')).toEqual('a');
        });
    });
});