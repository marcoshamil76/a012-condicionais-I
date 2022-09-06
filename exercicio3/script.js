

let nacionalidade = window.prompt("Digite sua nacionalidade").toLowerCase()

if (nacionalidade === "brasileira"){
    console.log ("você é brasileiro, não se esqueça do desfile amanhã 07/09")

}else if (nacionalidade === "argentina"){
    console.log ("Sua nacionalidade é Argentina")
}else if(nacionalidade === "uruguaia"){
    console.log ("Sua nacionalidade é uruguaia")
}else if(nacionalidade === "chilena"){
    console.log ("Sua nacionalidade é chilena")
}else if(nacionalidade === "colombiana"){
    console.log ("Sua nacionalidade é colombiana")
}else{
    console.log ("Nacionalidade não encontrada")
}


// Outra maneira de resolver este exercicio

//  let nacionalidade2 = prompt ("Qual é sua nacionalidade?").toLowerCase()
// let respostaNacionalidade = ["brasileira","argentina", "uruguaia", "chilena", "colombiana"]

// if (respostaNacionalidade.includes(nacionalidade2)){
//     console.log("Olá, sua nacionalidade é : ",nacionalidade2)
// }else{
//     console.log("Nacionalidade não encontrada")
// }


// Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor
// da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade`
// é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` 
// deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 