
describe("Adivinhador César", () => {

    describe("Apenas letras", () => {

        describe("Idioma: Portugês", () => {

            it("Mensagem inválida (vazia)", () => {
                expect(adivinha_cesar_apenas_letras('', true)).toEqual(false);
            });

            it("Adivinhando mensagem 1", () => {
                expect(adivinha_cesar_apenas_letras('Pqb, fbj, uvep cfn ? Qsjnfjsp uftuf ep bejwjoibeps vujmjaboep b dibwf 1 !', true)
                ).toEqual(['Opa, eai, tudo bem ? Primeiro teste do adivinhador utilizando a chave 1 !', 1]);
            });

            it("Adivinhando mensagem 2", () => {
                expect(adivinha_cesar_apenas_letras('Abm, qmu, fgpa nqy ? Bduyquda fqefq pa mpuhuztmpad gfuxulmzpa m otmhq 12 !', true)
                ).toEqual(['Opa, eai, tudo bem ? Primeiro teste do adivinhador utilizando a chave 12 !', 12]);
            });

            it("Adivinhando mensagem 3", () => {
                expect(adivinha_cesar_apenas_letras('Kqybk fkwyc docdkb ew dohdy woxyb', true)
                ).toEqual(['Agora vamos testar um texto menor', 10]);
            });

            it("Adivinhando mensagem 4", () => {
                expect(adivinha_cesar_apenas_letras('Pexmsyxye myw y woxyb ?? Kqybk fkwyc fob myw ew dohdy low wksyb. Fkwyc oxbyvkb occo dohdy zkbk ovo psmkb qbkxnky, zkbk fob co ovo zyno cob knsfsxrkny zovk knsfsxrknyb !', true)
                ).toEqual(['Funcionou com o menor ?? Agora vamos ver com um texto bem maior. Vamos enrolar esse texto para ele ficar grandao, para ver se ele pode ser adivinhado pela adivinhador !', 10]);
            });

            it("Adivinhando mensagem 5", () => {
                expect(adivinha_cesar_apenas_letras('Xknw paopwn iweo qi patpk ! Wcknw yki qiw ydwra iwekn !', true)
                ).toEqual(['Bora testar mais um texto ! Agora com uma chave maior !', 22]);
            });
        });
    });

    describe("Vários caracteres", () => {

        describe("Idioma: Português", () => {

            it("Mensagem inválida (vazia)", () => {
                expect(adivinha_cesar_varios_caracteres('', true)).toEqual(false);
            });

            it("Adivinhando mensagem 1", () => {
                expect(adivinha_cesar_varios_caracteres('Ly|k*~o}~k|*myw*y*¢ë|sy}*mk|km~o|o}*kqy|k*+', true)
                ).toEqual(['Bora testar com o vários caracteres agora !', 10]);
            });

            it("Adivinhando mensagem 2", () => {
                expect(adivinha_cesar_varios_caracteres('Éöùè¦ûìúûèù¦êöô¦ö¦ýŅùðöú¦êèùèêûìùìú¦èîöùè³¦êïèýì¦üô¦÷öüêö¦ôèðöù¦§', true)
                ).toEqual(['Bora testar com o vários caracteres agora, chave um pouco maior !', 100]);
            });

            it("Adivinhando mensagem 3", () => {
                expect(adivinha_cesar_varios_caracteres('ã¾āčċ¾ĒăĖĒč¾ĎăďēăČč¾Ý', true)
                ).toEqual(['E com texto pequeno ?', 123]);
            });

            it("Adivinhando mensagem 4", () => {
                expect(adivinha_cesar_varios_caracteres('áćďĒāÀĖāčďēÀĔąēĔāĒÀăďčÀĕčÀĔąĘĔďÀčāĉďĒÎÎÎÀöďĕÀąĎĒďČāĒÀĕčÀĔāĎĔďÀāđĕĉÀĎąēēāÀčąĎēāćąčÌÀĐāĒāÀąČāÀĆĉăāĒÀčāĉďĒÌÀēąĉÀČŞÀĎŦÎÎÎÀîŠďÀēąĉÀďÀđĕąÀąēăĒąĖąĒÌÀēŰÀĖďĕÀąĎĒďČāĒÀčąēčďÌÀĎŠďÀĔąčÀčĕĉĔďÀďÀđĕąÀĆāĚąĒÀÁ', true)
                ).toEqual(['Agora vamos testar com um texto maior... Vou enrolar um tanto aqui nessa mensagem, para ela ficar maior, sei lá né... Não sei o que escrever, só vou enrolar mesmo, não tem muito o que fazer !', 125]);
            });

            it("Adivinhando mensagem 5", () => {
                expect(adivinha_cesar_varios_caracteres('ɱʗʟʢʑɐʦʑʝʟʣɐʤʕʣʤʑʢɐʓʟʝɐʥʝʑɐʓʘʑʦʕɐʝʑʙʟʢɐɑ', true)
                ).toEqual(['Agora vamos testar com uma chave maior !', 525]);
            });
        });
    });
});