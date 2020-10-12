describe("Cifra de Vigenère", () => {

    describe("Apenas letras", () => {

        it('Chave e mensagem simples 1', () => {
            expect(encriptar_vigenere_apenas_letras('b', 'abcdef')).toEqual('bcdefg');
            expect(traduzir_vigenere_apenas_letras('b', 'bcdefg')).toEqual('abcdef');
        });

        it('Chave e mensagem simples 2', () => {
            expect(encriptar_vigenere_apenas_letras('bca', 'abcdef')).toEqual('bdcegf');
            expect(traduzir_vigenere_apenas_letras('bca', 'bdcegf')).toEqual('abcdef');
        });

        it('Chave inválida vazia', () => {
            expect(encriptar_vigenere_apenas_letras('', 'abc')).toEqual(ERRO_CHAVE);
            expect(traduzir_vigenere_apenas_letras('', 'abc')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida com caracteres especiais', () => {
            expect(encriptar_vigenere_apenas_letras('abcé', 'abc')).toEqual(ERRO_CHAVE);
            expect(traduzir_vigenere_apenas_letras('abcé', 'abc')).toEqual(ERRO_CHAVE);
        });

        it('Mensagem inválida (vazia)', () => {
            expect(encriptar_vigenere_apenas_letras('abc', '')).toEqual(ERRO_MENSAGEM);
            expect(traduzir_vigenere_apenas_letras('abc', '')).toEqual(ERRO_MENSAGEM);
        });

        it('Mensagem com letras minusc e maiusc', () => {
            expect(encriptar_vigenere_apenas_letras('AbCdE', 'aBcDe')).toEqual('aCeGi');
            expect(traduzir_vigenere_apenas_letras('AbCdE', 'aCeGi')).toEqual('aBcDe');
        });

        it('Caracteres especiais (não trocar)', () => {
            expect(encriptar_vigenere_apenas_letras('bcd', 'abc ! ? áé .,')).toEqual('bdf ! ? áé .,');
            expect(traduzir_vigenere_apenas_letras('bcd', 'bdf ! ? áé .,')).toEqual('abc ! ? áé .,');
        });

        it('Ignorar andamento da chave quando encontrar caracteres especiais', () => {
            expect(encriptar_vigenere_apenas_letras('abc', 'abc !í.,áé abc')).toEqual('ace !í.,áé ace');
            expect(traduzir_vigenere_apenas_letras('abc', 'ace !í.,áé ace')).toEqual('abc !í.,áé abc');
        });

        it('Ultrapassando o limite (voltar ao inicio)', () => {
            expect(encriptar_vigenere_apenas_letras('bc', 'zy yz')).toEqual('aa zb');
            expect(traduzir_vigenere_apenas_letras('bc', 'aa zb')).toEqual('zy yz');
        });

        it('Chave de caracteres com valores altos', () => {
            expect(encriptar_vigenere_apenas_letras('flx', 'oi alo')).toEqual('tt xqz');
            expect(traduzir_vigenere_apenas_letras('flx', 'tt xqz')).toEqual('oi alo');
        });

        it('Texto grande 1', () => {
            expect(encriptar_vigenere_apenas_letras('ataque',
            'Vamos invadir a base deles amanhã !')).toEqual('Vtmem mnoatcv a uaiy heeei uqaghã !');

            expect(traduzir_vigenere_apenas_letras('ataque',
            'Vtmem mnoatcv a uaiy heeei uqaghã !')).toEqual('Vamos invadir a base deles amanhã !');
        });

        it('Texto grande 2', () => {
            expect(encriptar_vigenere_apenas_letras('covid',
            'Cuidado para não se contaminar !')).toEqual('Eidldfc kiuc bãj ah ecibdowiiu !');

            expect(traduzir_vigenere_apenas_letras('covid',
            'Eidldfc kiuc bãj ah ecibdowiiu !')).toEqual('Cuidado para não se contaminar !');
        });
    });

    describe('Vários caracteres', () => {

        it('Chave e mensagem simples 1', () => {
            expect(encriptar_vigenere_varios_caracteres('!', 'abcde')).toEqual('bcdef');
            expect(traduzir_vigenere_varios_caracteres('!', 'bcdef')).toEqual('abcde');
        });

        it('Chave e mensagem simples 2', () => {
            expect(encriptar_vigenere_varios_caracteres('!"#', 'abcde')).toEqual('bdfeg');
            expect(traduzir_vigenere_varios_caracteres('!"#', 'bdfeg')).toEqual('abcde');
        });

        it('Mensagem númerica', () => {
            expect(encriptar_vigenere_varios_caracteres('!', '12')).toEqual('23');
            expect(traduzir_vigenere_varios_caracteres('!', '23')).toEqual('12');
        })

        it('Chave númerica', () => {
            expect(encriptar_vigenere_varios_caracteres('0', ' ')).toEqual('0');
            expect(traduzir_vigenere_varios_caracteres('0', '0')).toEqual(' ');
        })

        it('Chave inválida vazia', () => {
            expect(encriptar_vigenere_varios_caracteres('', 'abc')).toEqual(ERRO_CHAVE);
            expect(traduzir_vigenere_varios_caracteres('', 'abc')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida com caracteres acima do limite', () => {
            expect(encriptar_vigenere_varios_caracteres('˟', 'abc')).toEqual(ERRO_CHAVE);
            expect(traduzir_vigenere_varios_caracteres('˟', 'abc')).toEqual(ERRO_CHAVE);
        });

        it('Mensagem inválida (vazia)', () => {
            expect(encriptar_vigenere_varios_caracteres('abc', '')).toEqual(ERRO_MENSAGEM);
            expect(traduzir_vigenere_varios_caracteres('abc', '')).toEqual(ERRO_MENSAGEM);
        });

        it('Mensagem com letras minusc e maiusc', () => {
            expect(encriptar_vigenere_varios_caracteres('Aa', 'AaaA')).toEqual('bÅ¤¤');
            expect(traduzir_vigenere_varios_caracteres('Aa', 'bÅ¤¤')).toEqual('AaaA');
        });

        it('Mensagem com caracteres acima do limite', () => {
            expect(encriptar_vigenere_varios_caracteres('abc', '˟˟˟˟')).toEqual('˟˟˟˟');
            expect(traduzir_vigenere_varios_caracteres('abc', '˟˟˟˟')).toEqual('˟˟˟˟');
        });

        it('Ignorar andamento da chave quando encontrar caracteres especiais', () => {
            expect(encriptar_vigenere_varios_caracteres('!"', 'a˟a˟a˟a')).toEqual('b˟c˟b˟c');
            expect(traduzir_vigenere_varios_caracteres('!"', 'b˟c˟b˟c')).toEqual('a˟a˟a˟a');
        });

        it('Ultrapassando o limite (voltar ao inicio)', () => {
            expect(encriptar_vigenere_varios_caracteres('!"', '˞˝')).toEqual('  ');
            expect(traduzir_vigenere_varios_caracteres('!"', '  ')).toEqual('˞˝');
        });

        it('Chave de caracteres com valores altos', () => {
            expect(encriptar_vigenere_varios_caracteres('˜˝', ' !"#')).toEqual('˜˞˞!');
            expect(traduzir_vigenere_varios_caracteres('˜˝', '˜˞˞!')).toEqual(' !"#');
        });

        it('Texto grande 1', () => {
            expect(encriptar_vigenere_varios_caracteres('testando',
            'Vamos ver como que essa cifra está funcionando ! Será que está trocando tudo ?')
            ).toEqual('ÍÉãæ×nÝ×éeÙæÑàdãìÍsÜ×äÈoÚÑÜéÅnÌåëĦsÝÙßÊÛæÖ×åÈàdpt»ÛéĢnØçÜeÛêØįdæé×ÙØÒÕÖoëÝÚæa°');

            expect(traduzir_vigenere_varios_caracteres('testando',
            'ÍÉãæ×nÝ×éeÙæÑàdãìÍsÜ×äÈoÚÑÜéÅnÌåëĦsÝÙßÊÛæÖ×åÈàdpt»ÛéĢnØçÜeÛêØįdæé×ÙØÒÕÖoëÝÚæa°')
            ).toEqual('Vamos ver como que essa cifra está funcionando ! Será que está trocando tudo ?');
        });

        it('Texto grande 2', () => {
            expect(encriptar_vigenere_varios_caracteres('cháves diférentes!',
            'Vamos testar agora com uma chave diferente, com espaços e acentos.')
            ).toEqual('¼ÌĮèÛstÌßÝĪçeÒÞ×èbcÎİæeëmÈiÌıÖÞÖtÌßgËÝĦçÜÛ,dÏØĶrÍäçÉĺpÙhĦvÉÙeÕàØļ¢');

            expect(traduzir_vigenere_varios_caracteres('cháves diférentes!',
            '¼ÌĮèÛstÌßÝĪçeÒÞ×èbcÎİæeëmÈiÌıÖÞÖtÌßgËÝĦçÜÛ,dÏØĶrÍäçÉĺpÙhĦvÉÙeÕàØļ¢')
            ).toEqual('Vamos testar agora com uma chave diferente, com espaços e acentos.');
        });
    });
});