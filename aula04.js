const nota1 = 4
const nota2 = 8
const nota3 = 8

const media = (nota1 + nota2 + nota3) / 3

if (media>6){
    console.log (media.toFixed(2) + ' é maior que 6 você está aprovado')
}else{
    console.log (media + ' não é maior que 6 você esta reprovado')
}