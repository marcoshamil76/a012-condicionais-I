

let idade = prompt("Digite sua idade")
let ensinoMedio2

let checkSimNao = prompt("Ensino médio concluido? Digite sim ou não")

let isMaiorIdade;
let isCursandoOutraFaculdade;

    if(checkSimNao === "sim"){
        ensinoMedio2 = true
    }else{
        ensinoMedio2 = false
	}
console.log (checkSimNao)
checkSimNao = prompt("Esta cursando uma faculadade? Digite Sim ou não")
console.log (checkSimNao)
    if(checkSimNao === "sim"){
        isCursandoOutraFaculdade = true
    }else{
        isCursandoOutraFaculdade = false
	}

    if (ensinoMedio2 && isCursandoOutraFaculdade){
        alert ("Parabéns vc concluiu o ensino médio e já está na Faculdade")

    }else if (!isCursandoOutraFaculdade && ensinoMedio2){
        alert ("Parabéns vc concluiu o ensino médio, e agora o próximo passo é entrar na Faculdade")
    }else{
        alert ("Continue estudando que logo irá concluir o ensino médio \n e entrar na Faculdade")
}
   // ensinomedio = confirm("voce terminou o ensino o medio") 