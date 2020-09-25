describe("Substituição simples", () => {

    describe("Apenas letras", () => {

        it('Trocando apenas uma letra', () => {
            expect(subst_simples_apenas_letras('a', 'b', 'abcdef')).toEqual('bacdef');
            expect(subst_simples_apenas_letras('a', 'b', 'bacdef')).toEqual('abcdef');
        });

        it('Chave inválida vazia', () => {
            expect(subst_simples_apenas_letras('', '', 'abc')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida caracteres especiais 1', () => {
            expect(subst_simples_apenas_letras('!?1', 'abc', 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida caracteres especiais 2', () => {
            expect(subst_simples_apenas_letras('!?1', 'abc', 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida duplicada 1', () => {
            expect(subst_simples_apenas_letras('aAb', 'bed', 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida duplicada 2', () => {
            expect(subst_simples_apenas_letras('bed', 'aAb', 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida duplicada 3', () => {
            expect(subst_simples_apenas_letras(''))
        });
    });
});