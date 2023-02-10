var readline = require('readline');
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});
let media = 0
let mediaRecuperacao = 0;

entradaDados.question('Digite nome do aluno\n', function (nome) {
    let nomeAluno = nome;
    entradaDados.question('Digite nomee do professor(a)\n', function (professor) {
        let nomeProfessor = professor;
        entradaDados.question("Digite sexo do aluno(a) \n", function (sexoA) {

            let sexoAluno = sexoA;
            if (sexoAluno === "M") {
                sexoAluno = "Aluno"
            } else {
                sexoAluno = "Aluna"
            }

            entradaDados.question('Digite sexo do professor(a)\n', function (sexoP) {
                let sexoProfessor = sexoP;

                if (sexoProfessor === "M") {
                    sexoProfessor = "Professor"
                } else {
                    sexoProfessor = "Professora"
                }
                entradaDados.question('Digite nome do curso \n', function (curso) {
                    let nomeCurso = curso;
                    entradaDados.question('Digite a disciplina\n', function (disciplina) {
                        let nomeDisciplina = disciplina;
                        entradaDados.question('digite 1° nota \n', function (nota1) {
                            let primeiraNota = nota1;
                            entradaDados.question('Digite 2° nota \n', function (nota2) {
                                let segundaNota = nota2;
                                entradaDados.question('Digite 3° nota \n', function (nota3) {
                                    let terceiraNota = nota3;
                                    entradaDados.question('Digite 4° nota\n', function (nota4) {
                                        let quartaNota = nota4;

                                        if (nomeAluno == '' || nomeProfessor == '' || sexoAluno == '' || sexoProfessor == '' || nomeCurso == '' || nomeDisciplina == '' || primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') {
                                            console.log('ERRo: Não é possivel calcular sem preencher todos osd dados');
                                        } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
                                            console.log('Erro:é necessario que todas as notas seja um numero,')
                                        } else if (primeiraNota < 0 || primeiraNota > 100 || segundaNota < 0 || segundaNota > 100 || terceiraNota < 0 || terceiraNota > 100 || quartaNota < 0 || quartaNota > 100) {
                                            console.log('ERRO: o sistema só aceita  números entre 0 e 100 ');

                                        } else {
                                            var media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) / 4;
                                            console.log('sua media é : ' + media)
                                            if (media >= 70) {
                                                console.log('Status aprovado');
                                            } else if (media < 50) {
                                                console.log('Status Reprovado seu burro');

                                            } else if (media >= 50 || media <= 60) {
                                                console.log('esta de recuperacao');
                                                entradaDados.question('qual o a nota da recuperação? \n', function (recuperacao) {
                                                    notaRecuperacao = recuperacao;

                                                   var mediaRecuperacao = (Number(notaRecuperacao) + Number(media)) / 2;
                                                    console.log(mediaRecuperacao);
                                                    if (mediaRecuperacao >= 60) {
                                                        console.log('aprovado na recuperação')
                                                    } else {
                                                        console.log('reprovado na recuperação')
                                                    }




                                                });
                                            }

                                        }
                                        // console.log('---------------- RELATORIO DO ALUNO ---------------------------');
                                        console.log(sexoAluno + ":" + nomeAluno);
                                        console.log('Curso' + nomeCurso);
                                        console.log(sexoProfessor + ':' + nomeProfessor);
                                        // console.log('Media final ' + media);
                                        console.log('media da recuperação: ' + mediaRecuperacao);
                                        console.log('media' + media)


                                    });
                                });
                            });
                        });
                    })
                });
            });
        });

    });
});