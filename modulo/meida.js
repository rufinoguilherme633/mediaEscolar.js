const calcularMedia = function(nota1, nota2, nota3, nota4) {
    let numero1 = Number(nota1);
    let numero2 = Number(nota2);
    let numero3 = Number(nota3);
    let numero4 = Number(nota4);
    let media = 0



    //  else {
    //     let media = numero1 + numero2 + numero3 + numero4 / 4;
    //     console.log(media)
    //     if (media > 70) {
    //         console.log('Status aprovado');
    //     }

    // }




    //    let media = numero1 + numero2 + numero3 + numero4;

    // console.log(media)
    // if (media >= 70) {
    //     console.log('status: APROVADO');
    // }

}



const relatorioAluno = function(sexoAluno, nomeAluno, nomeCurso, sexoProfessor, nomeProfessor, media) {
    console.log('---------------- RELATORIO DO ALUNO ---------------------------');
    console.log('Status aprovado');
    console.log(sexoAluno + ":" + nomeAluno);
    console.log('Curso: ' + nomeCurso);
    console.log(sexoProfessor + ': ' + nomeProfessor);
    console.log('media: ' + media)
}

const relatorioAlunoReprovado = function(sexoAluno, nomeAluno, nomeCurso, sexoProfessor, nomeProfessor, media) {
    console.log('---------------- RELATORIO DO ALUNO ---------------------------');
    console.log('Status Reprovado');
    console.log(sexoAluno + ":" + nomeAluno);
    console.log('Curso: ' + nomeCurso);
    console.log(sexoProfessor + ': ' + nomeProfessor);
    console.log('media: ' + media)
}

const relatorioAlunoReprovadoNaRecuperacao = function(sexoAluno, nomeAluno, nomeCurso, sexoProfessor, nomeProfessor, mediaRecuperacao, media) {
    console.log('---------------- RELATORIO DO ALUNO ---------------------------');
    console.log('reprovado na recuperação')
    console.log(sexoAluno + ":" + nomeAluno);
    console.log('Curso' + nomeCurso);
    console.log(sexoProfessor + ': ' + nomeProfessor);
    // console.log('Media final ' + media);
    console.log('media da recuperação: ' + mediaRecuperacao);
    console.log('media: ' + media)
}

const calculoMedia = function(primeiraNota, segundaNota, terceiraNota, quartaNota) {
    var media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) / 4;

    return media
}



console.log(calcularMedia(10, 10, 10, 10))

module.exports = {
    relatorioAluno,
    relatorioAlunoReprovado,
    relatorioAlunoReprovadoNaRecuperacao,
    calculoMedia

}