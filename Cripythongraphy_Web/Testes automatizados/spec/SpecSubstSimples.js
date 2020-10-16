describe("Substituição simples", () => {

    describe("Apenas letras", () => {

        it('Trocando apenas uma letra', () => {
            expect(encriptar_subst_simples_apenas_letras(['a', 'b'], 'abcdef')).toEqual('bacdef');
            expect(traduzir_subst_simples_apenas_letras(['a', 'b'], 'bacdef')).toEqual('abcdef');
        });

        it('Chave inválida vazia', () => {
            expect(encriptar_subst_simples_apenas_letras(['', ''], 'abc')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_apenas_letras(['', ''], 'abc')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida caracteres especiais 1', () => {
            expect(encriptar_subst_simples_apenas_letras(['!?1', 'abc'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_apenas_letras(['!?1', 'abc'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida caracteres especiais 2', () => {
            expect(encriptar_subst_simples_apenas_letras(['!?1', 'abc'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_apenas_letras(['abc', '!?1'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida duplicada 1', () => {
            expect(encriptar_subst_simples_apenas_letras(['aAb', 'bed'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_apenas_letras(['aAb', 'bed'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida duplicada 2', () => {
            expect(encriptar_subst_simples_apenas_letras(['bed', 'aAb'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_apenas_letras(['bed', 'aAb'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida duplicada 3', () => {
            expect(encriptar_subst_simples_apenas_letras(['bc', 'aA'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_apenas_letras(['bc', 'aA'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida duplicada 4', () => {
            expect(encriptar_subst_simples_apenas_letras(['aA', 'bc'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_apenas_letras(['aA', 'bc'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida duplicada entre chaves 1', () => {
            expect(encriptar_subst_simples_apenas_letras(['abc', 'dea'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_apenas_letras(['abc', 'dea'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida duplicada entre chaves 2', () => {
            expect(encriptar_subst_simples_apenas_letras(['dea', 'abc'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_apenas_letras(['dea', 'abc'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida tamanhos diferentes de chaves 1', () => {
            expect(encriptar_subst_simples_apenas_letras(['ab', 'tec'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_apenas_letras(['ab', 'tec'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida tamanhos diferentes de chaves 2', () => {
            expect(encriptar_subst_simples_apenas_letras(['tec', 'ab'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_apenas_letras(['tec', 'ab'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Testar mensagem com letras minusculas e maiusculas', () => {
            expect(encriptar_subst_simples_apenas_letras(['abc', 'def'], 'abcdef ABCDEF')).toEqual('defabc DEFABC');
            expect(traduzir_subst_simples_apenas_letras(['abc', 'def'], 'defabc DEFABC')).toEqual('abcdef ABCDEF');
        });

        it('Testar mensagem com caracteres especiais', () => {
            expect(encriptar_subst_simples_apenas_letras(['abc', 'def'], '!?.^123 oi')).toEqual('!?.^123 oi');
            expect(traduzir_subst_simples_apenas_letras(['abc', 'def'], '!?.^123 oi')).toEqual('!?.^123 oi');
        });

        it('Trocando mais caracteres', () => {
            expect(encriptar_subst_simples_apenas_letras(['bcdat', 'opqrz'], 'atenção amigos !')).toEqual('rzençãb rmigbs !');
            expect(traduzir_subst_simples_apenas_letras(['bcdat', 'opqrz'], 'rzençãb rmigbs !')).toEqual('atenção amigos !');
        });

        it('Texto grande 1 com chaves que possuem os mesmos caracteres', () => {
            expect(encriptar_subst_simples_apenas_letras(['abcdefghijklmnopqrstuvwxyz', 'fhizdlmnavgewptubxjrqocsky'], 
            'Tudo bem com voce ?')).toEqual('Rqzt hdw itw otid ?');

            expect(traduzir_subst_simples_apenas_letras(['abcdefghijklmnopqrstuvwxyz', 'fhizdlmnavgewptubxjrqocsky'],
            'Rqzt hdw itw otid ?')).toEqual('Tudo bem com voce ?');
        });
        
        it('Texto grande 2 com chaves que possuem os mesmos caracteres', () => {
            expect(encriptar_subst_simples_apenas_letras(['abcdefghijklmnopqrstuvwxyz', 'neruzjxpgfabcowvdqyihtslmk'],
            'Por favor, me responda !')).toEqual('Vwq jntwq, cz qzyvwoun !');

            expect(traduzir_subst_simples_apenas_letras(['abcdefghijklmnopqrstuvwxyz', 'neruzjxpgfabcowvdqyihtslmk'],
            'Vwq jntwq, cz qzyvwoun !')).toEqual('Por favor, me responda !')
        });

        it('Texto grande 1 com chaves que possuem todos caracteres diferentes', () => {
            expect(encriptar_subst_simples_apenas_letras(['abcdefg', 'hijklmn'],
            'Opa, testando com chaves totalmente diferentes')).toEqual('Oph, tlsthgko jof jahvls totheflgtl kbmlrlgtls');

            expect(traduzir_subst_simples_apenas_letras(['abcdefg', 'hijklmn'],
            'Oph, tlsthgko jof jahvls totheflgtl kbmlrlgtls')).toEqual('Opa, testando com chaves totalmente diferentes');
        });

        it('Texto grande 2 com chaves que possuem todos caracteres diferentes', () => {
            expect(encriptar_subst_simples_apenas_letras(['bcdeuy', 'alnozm'], 
            'MAIS um TESTE para VERIFICAR com MAIUSC')).toEqual('YBIS zy TOSTO pbrb VORIFILBR ley YBIZSL');

            expect(encriptar_subst_simples_apenas_letras(['bcdeuy', 'alnozm'],
            'YBIS zy TOSTO pbrb VORIFILBR ley YBIZSL')).toEqual('MAIS um TESTE para VERIFICAR com MAIUSC');
        });
    });

    describe('Vários caracteres', () => {

        it('Trocando apenas uma letra', () => {
            expect(encriptar_subst_simples_varios_caracteres(['a', 'b'], 'abcdef')).toEqual('bacdef');
            expect(traduzir_subst_simples_varios_caracteres(['a', 'b'], 'bacdef')).toEqual('abcdef');
        });

        it('Chave inválida vazia', () => {
            expect(encriptar_subst_simples_varios_caracteres(['', ''], 'abc')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_varios_caracteres(['', ''], 'abc')).toEqual(ERRO_CHAVE);
        });

        it('Chave com caracteres especiais 1', () => {
            expect(encriptar_subst_simples_varios_caracteres(['!?1', 'abc'], 'abcde')).toEqual('!?1de');
            expect(traduzir_subst_simples_varios_caracteres(['!?1', 'abc'], '!?1de')).toEqual('abcde');
        });

        it('Chave com caracteres especiais 2', () => {
            expect(encriptar_subst_simples_varios_caracteres(['!?1', 'abc'], 'abcde')).toEqual('!?1de');
            expect(traduzir_subst_simples_varios_caracteres(['!?1', 'abc'], '!?1de')).toEqual('abcde');
        });

        it('Chave inválida duplicada 1', () => {
            expect(encriptar_subst_simples_varios_caracteres(['aAb', 'bed'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_varios_caracteres(['aAb', 'bed'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida duplicada 2', () => {
            expect(encriptar_subst_simples_varios_caracteres(['bed', 'aAb'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_varios_caracteres(['bed', 'aAb'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida duplicada 3', () => {
            expect(encriptar_subst_simples_varios_caracteres(['bc', 'aA'], 'abcde')).toEqual('baAde');
            expect(traduzir_subst_simples_varios_caracteres(['bc', 'aA'], 'baAde')).toEqual('abcde');
        });

        it('Chave inválida duplicada 4', () => {
            expect(encriptar_subst_simples_varios_caracteres(['aA', 'bc'], 'abcde')).toEqual('baAde');
            expect(traduzir_subst_simples_varios_caracteres(['aA', 'bc'], 'baAde')).toEqual('abcde');
        });

        it('Chave inválida duplicada entre chaves 1', () => {
            expect(encriptar_subst_simples_varios_caracteres(['abc', 'dea'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_varios_caracteres(['abc', 'dea'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida duplicada entre chaves 2', () => {
            expect(encriptar_subst_simples_varios_caracteres(['dea', 'abc'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_varios_caracteres(['dea', 'abc'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida tamanhos diferentes de chaves 1', () => {
            expect(encriptar_subst_simples_varios_caracteres(['ab', 'tec'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_varios_caracteres(['ab', 'tec'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Chave inválida tamanhos diferentes de chaves 2', () => {
            expect(encriptar_subst_simples_varios_caracteres(['tec', 'ab'], 'abcde')).toEqual(ERRO_CHAVE);
            expect(traduzir_subst_simples_varios_caracteres(['tec', 'ab'], 'abcde')).toEqual(ERRO_CHAVE);
        });

        it('Testar mensagem com letras minusculas e maiusculas', () => {
            expect(encriptar_subst_simples_varios_caracteres(['abc', 'def'], 'abcdef ABCDEF')).toEqual('defabc ABCDEF');
            expect(traduzir_subst_simples_varios_caracteres(['abc', 'def'], 'defabc ABCDEF')).toEqual('abcdef ABCDEF');
        });

        it('Testar mensagem com caracteres especiais', () => {
            expect(encriptar_subst_simples_varios_caracteres(['abc', 'def'], '!?.^123 oi')).toEqual('!?.^123 oi');
            expect(traduzir_subst_simples_varios_caracteres(['abc', 'def'], '!?.^123 oi')).toEqual('!?.^123 oi');
        });

        it('Trocando mais caracteres', () => {
            expect(encriptar_subst_simples_varios_caracteres(['bcdat', 'opqrz'], 'atenção amigos !')).toEqual('rzençãb rmigbs !');
            expect(traduzir_subst_simples_varios_caracteres(['bcdat', 'opqrz'], 'rzençãb rmigbs !')).toEqual('atenção amigos !');
        });

        it('Texto grande 1 com chaves que possuem os mesmos caracteres', () => {
            expect(encriptar_subst_simples_varios_caracteres(['abcdefghijklmnopqrstuvwxyz', 'fhizdlmnavgewptubxjrqocsky'], 
            'Ué ? Esse exemplo não é igual ao da cifra de substituição simples no modo apenas letras ? Não, as maiusculas não serão trocadas se você não pedir!')
            ).toEqual('Ué ? Ejjd dsdwuet pãt é amqfe ft zf ialxf zd jqhjrarqaçãt jawuedj pt wtzt fudpfj edrxfj ? Nãt, fj wfaqjiqefj pãt jdxãt rxtifzfj jd otiê pãt udzax!');

            expect(traduzir_subst_simples_varios_caracteres(['abcdefghijklmnopqrstuvwxyz', 'fhizdlmnavgewptubxjrqocsky'],
            'Ué ? Ejjd dsdwuet pãt é amqfe ft zf ialxf zd jqhjrarqaçãt jawuedj pt wtzt fudpfj edrxfj ? Nãt, fj wfaqjiqefj pãt jdxãt rxtifzfj jd otiê pãt udzax!')
            ).toEqual('Ué ? Esse exemplo não é igual ao da cifra de substituição simples no modo apenas letras ? Não, as maiusculas não serão trocadas se você não pedir!');
        });
        
        it('Texto grande 2 com chaves que possuem os mesmos caracteres', () => {
            expect(encriptar_subst_simples_varios_caracteres(['abcdefghijklmnopqrstuvwxyz !?.,', 'qwertyuiopasdfghjklzxcvbnm!., ?'],
            'Vamos trocar outros caracteres agora ! Testando, 1, 2, 3 ... Funcionou ?')
            ).toEqual('Vqdgl!zkgeqk!gxzkgl!eqkqeztktl!qugkq!.!Ttlzqfrg?!1?!2?!3!   !Fxfeogfgx!,');

            expect(traduzir_subst_simples_varios_caracteres(['abcdefghijklmnopqrstuvwxyz !?.,', 'qwertyuiopasdfghjklzxcvbnm!., ?'],
            'Vqdgl!zkgeqk!gxzkgl!eqkqeztktl!qugkq!.!Ttlzqfrg?!1?!2?!3!   !Fxfeogfgx!,')
            ).toEqual('Vamos trocar outros caracteres agora ! Testando, 1, 2, 3 ... Funcionou ?')
        });

        it('Texto grande 1 com chaves que possuem todos caracteres diferentes', () => {
            expect(encriptar_subst_simples_varios_caracteres(['abcdefg!?AO ', 'hijklmn[]TKX'],
            'Opa, testando com chaves totalmente diferentes !?')).toEqual('Kph,XtlsthgkoXjofXjahvlsXtotheflgtlXkbmlrlgtlsX[]');

            expect(traduzir_subst_simples_varios_caracteres(['abcdefg!?AO ', 'hijklmn[]TKX'],
            'Kph,XtlsthgkoXjofXjahvlsXtotheflgtlXkbmlrlgtlsX[]')).toEqual('Opa, testando com chaves totalmente diferentes !?');
        });

        it('Texto grande 2 com chaves que possuem todos caracteres diferentes', () => {
            expect(encriptar_subst_simples_varios_caracteres(['bcdeuy', 'alnozm'], 
            'MAIS um TESTE para VERIFICAR com MAIUSC')).toEqual('MAIS zy TESTE pbrb VERIFICAR ley MAIUSC');

            expect(encriptar_subst_simples_varios_caracteres(['bcdeuy', 'alnozm'],
            'MAIS zy TESTE pbrb VERIFICAR ley MAIUSC')).toEqual('MAIS um TESTE para VERIFICAR com MAIUSC');
        });
    });
});