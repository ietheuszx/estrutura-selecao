/*
Questão 6: Como você pode usar uma declaração if, else if, else para 
determinar a estação do ano com base no mês em JavaScript?
*/

let estacao = 13;

if ((estacao === 12) || (estacao === 1) || (estacao === 2) || (estacao === 3 )) {
    console.log("É verão papai")
} else if (( estacao ===4) || ( estacao === 5) || ( estacao === 6)) {
    console.log("É Outono, foia foia foia")
} else if (( estacao === 7 || estacao === 8 || estacao === 9)) {
    console.log("É inferno")
} else if (( estacao === 10 || estacao === 11)) {
    console.log("É brisavera")
} else {
    console.log("Não existe porra")
}