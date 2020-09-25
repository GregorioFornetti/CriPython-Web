
describe("Cifra de César", () => {
    
    describe("Apenas letras", () => {

        it("Chave 1", () => {
            expect(encriptar_cesar_apenas_letras('1', 'abc')).toEqual('bcd');
            expect(traduzir_cesar_apenas_letras('1', 'bcd')).toEqual('abc');
        });

        it("Chave invalida vazia", () => {
            expect(encriptar_cesar_apenas_letras('', 'a')).toEqual(ERRO_CHAVE);
            expect(traduzir_cesar_apenas_letras('', 'a')).toEqual(ERRO_CHAVE);
        });

        it("Chave invalida negativa", () => {
            expect(encriptar_cesar_apenas_letras('-1', 'a')).toEqual(ERRO_CHAVE);
            expect(traduzir_cesar_apenas_letras('-1', 'a')).toEqual(ERRO_CHAVE);
        });

        it("Chave invalida texto", () => {
            expect(encriptar_cesar_apenas_letras('texto', 'a')).toEqual(ERRO_CHAVE);
            expect(traduzir_cesar_apenas_letras('texto', 'a')).toEqual(ERRO_CHAVE);
        });

        it("Chave invalida float", () => {
            expect(encriptar_cesar_apenas_letras('1.1', 'a')).toEqual(ERRO_CHAVE);
            expect(traduzir_cesar_apenas_letras('2.1', 'a')).toEqual(ERRO_CHAVE);
        });

        it("Mensagem invalida", () => {
            expect(encriptar_cesar_apenas_letras('12', '')).toEqual(ERRO_MENSAGEM);
            expect(traduzir_cesar_apenas_letras('12', '')).toEqual(ERRO_MENSAGEM);
        });

        it("Volta no alfabeto", () => {
            expect(encriptar_cesar_apenas_letras('1', 'z')).toEqual('a');
            expect(traduzir_cesar_apenas_letras('1', 'a')).toEqual('z');
        });

        it("Diferenciação entre maiusculo e minusculo (case sensitive)", () => {
            expect(encriptar_cesar_apenas_letras('1', 'aAbBcCdD')).toEqual('bBcCdDeE');
            expect(traduzir_cesar_apenas_letras('1', 'bBcCdDeE')).toEqual('aAbBcCdD');
        });

        it("Caracteres especias nao influenciados", () => {
            expect(encriptar_cesar_apenas_letras('1', 'áéíóú!? aeiou')).toEqual('áéíóú!? bfjpv');
            expect(traduzir_cesar_apenas_letras('1', 'áéíóú!? bfjpv')).toEqual('áéíóú!? aeiou');
        });

        it("Chave maior", () => {
            expect(encriptar_cesar_apenas_letras('10', 'az')).toEqual('kj');
            expect(traduzir_cesar_apenas_letras('10', 'kj')).toEqual('az');
        });

        it("Texto grande 1", () => {
            expect(encriptar_cesar_apenas_letras('1', 'abcdefghijklmnopqrstuvwxyz')).toEqual('bcdefghijklmnopqrstuvwxyza');
            expect(traduzir_cesar_apenas_letras('1', 'bcdefghijklmnopqrstuvwxyza')).toEqual('abcdefghijklmnopqrstuvwxyz');
        });

        it("Texto grande 2", () => {
            expect(encriptar_cesar_apenas_letras('7', 'Bom dia, Boa tarde, Boa noite!')).toEqual('Ivt kph, Ivh ahykl, Ivh uvpal!');
            expect(traduzir_cesar_apenas_letras('7', 'Ivt kph, Ivh ahykl, Ivh uvpal!')).toEqual('Bom dia, Boa tarde, Boa noite!');
        });
    });

    describe("Vários caracteres", () => {

        it("Chave 1", () => {
            expect(encriptar_cesar_varios_caracteres('1', 'a')).toEqual('b');
            expect(traduzir_cesar_varios_caracteres('1', 'b')).toEqual('a');
        });

        it("Chave inválida vazia", () => {
            expect(encriptar_cesar_varios_caracteres('', 'a')).toEqual(ERRO_CHAVE);
            expect(traduzir_cesar_varios_caracteres('', 'a')).toEqual(ERRO_CHAVE);
        });

        it("Chave inválida negativa", () => {
            expect(encriptar_cesar_varios_caracteres('-1', 'a')).toEqual(ERRO_CHAVE);
            expect(traduzir_cesar_varios_caracteres('-1', 'a')).toEqual(ERRO_CHAVE);
        });

        it("Chave inválida texto", () => {
            expect(encriptar_cesar_varios_caracteres('texto', 'a')).toEqual(ERRO_CHAVE);
            expect(traduzir_cesar_varios_caracteres('texto', 'a')).toEqual(ERRO_CHAVE);
        });

        it("Chave inválida float", () => {
            expect(encriptar_cesar_varios_caracteres("1.2", 'a')).toEqual(ERRO_CHAVE);
            expect(traduzir_cesar_varios_caracteres("1.2", 'a')).toEqual(ERRO_CHAVE);
        });

        it("Mensagem inválida", () => {
            expect(encriptar_cesar_varios_caracteres("1", '')).toEqual(ERRO_MENSAGEM);
            expect(traduzir_cesar_varios_caracteres("1", '')).toEqual(ERRO_MENSAGEM);
        });

        it("Dando volta no dic unicode limitado", () => {
            expect(encriptar_cesar_varios_caracteres("1", '˞˝')).toEqual(' ˞');
            expect(traduzir_cesar_varios_caracteres("1", ' ˞')).toEqual('˞˝');
        });

        it("Maiusculo e minusculos", () => {
            expect(encriptar_cesar_varios_caracteres('1', 'aAbBcCdD')).toEqual('bBcCdDeE');
            expect(traduzir_cesar_varios_caracteres('1', 'bBcCdDeE')).toEqual('aAbBcCdD');
        });

        it("Caracteres especiais", () => {
            expect(encriptar_cesar_varios_caracteres('1', 'áéíóú!? abc')).toEqual('âêîôû"@!bcd');
            expect(traduzir_cesar_varios_caracteres('1', 'âêîôû"@!bcd')).toEqual('áéíóú!? abc');
        });

        it("Caracteres especiais acima do limite", () => {
            expect(encriptar_cesar_varios_caracteres('1', '˟')).toEqual('˟');
            expect(traduzir_cesar_varios_caracteres('1', '˟')).toEqual('˟');
        });

        it('Chave maior', () => {
            expect(encriptar_cesar_varios_caracteres('123', 'a')).toEqual('ÿ');
            expect(traduzir_cesar_varios_caracteres('123', 'ÿ')).toEqual('a');
        });

        it('Texto grande 1', () => {
            expect(encriptar_cesar_varios_caracteres('123', 
            'Olá ! Será que troca letras com acentos também ? E espaços ? Vamos testar agora !')
            ).toEqual('íĊŜ¾¿¾ñăĐŜ¾ďēă¾ĒĐčāÿ¾ĊăĒĐÿđ¾āčċ¾ÿāăČĒčđ¾ĒÿċĀŤċ¾Ý¾ã¾ăđĎÿŢčđ¾Ý¾ôÿċčđ¾ĒăđĒÿĐ¾ÿąčĐÿ¾¿');

            expect(traduzir_cesar_varios_caracteres('123',
            'íĊŜ¾¿¾ñăĐŜ¾ďēă¾ĒĐčāÿ¾ĊăĒĐÿđ¾āčċ¾ÿāăČĒčđ¾ĒÿċĀŤċ¾Ý¾ã¾ăđĎÿŢčđ¾Ý¾ôÿċčđ¾ĒăđĒÿĐ¾ÿąčĐÿ¾¿')
            ).toEqual('Olá ! Será que troca letras com acentos também ? E espaços ? Vamos testar agora !');
        });

        it('Texto grande 2', () => {
            expect(encriptar_cesar_varios_caracteres('321',
            'Legal ! Parece que está tudo funcionando corretamente, vamos ver como o texto fica movendo mais ainda !!!')
            ).toEqual('ưǉǋǅǐƄƅƄƴǅǖǉǇǉƄǕǙǉƄǉǗǘȢƄǘǙǈǓƄǊǙǒǇǍǓǒǅǒǈǓƄǇǓǖǖǉǘǅǑǉǒǘǉƐƄǚǅǑǓǗƄǚǉǖƄǇǓǑǓƄǓƄǘǉǜǘǓƄǊǍǇǅƄǑǓǚǉǒǈǓƄǑǅǍǗƄǅǍǒǈǅƄƅƅƅ');

            expect(traduzir_cesar_varios_caracteres('321',
            'ưǉǋǅǐƄƅƄƴǅǖǉǇǉƄǕǙǉƄǉǗǘȢƄǘǙǈǓƄǊǙǒǇǍǓǒǅǒǈǓƄǇǓǖǖǉǘǅǑǉǒǘǉƐƄǚǅǑǓǗƄǚǉǖƄǇǓǑǓƄǓƄǘǉǜǘǓƄǊǍǇǅƄǑǓǚǉǒǈǓƄǑǅǍǗƄǅǍǒǈǅƄƅƅƅ')
            ).toEqual('Legal ! Parece que está tudo funcionando corretamente, vamos ver como o texto fica movendo mais ainda !!!');
        });
    });
});