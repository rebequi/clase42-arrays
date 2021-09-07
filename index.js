// const nombres = [
// "Tomas",
// "Gabriela",
// "Jeison",
// "Gerardo",
// "Luis"
// ]

// for (let i = 0; i < nombres.length; i++) {
//     console.log(i) // esto es lo que va contando
//     console.log (nombres[i]) // esto es lo que esta dentro del contador
    
// }


// Números positivos

// Dado un array de 10 números, retornar un numero que represente cuantos de ellos son positivos.

// const numeros = [11, -4, 1, 6, 7, -2, 54, -1, 98, -43]

// const cantidadDeNumerosPositivos = (array) => {
//     let cuantosNumerosPositivos = 0
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element > 0) {
//           cuantosNumerosPositivos++ 

// }
// }
// return cuantosNumerosPositivos
// }

// console.log (cantidadDeNumerosPositivos(numeros))


// Promedio de un curso

// Dado un array de 3 numeros, donde cada número representa la nota de una alumna, 
// retornar el promedio final de nota del curso.

const numeros = [60, 70, 80]

const promedioFinal = (array) => {
    let contador = 0
    for (let i = 0; i < array.length; i++) {
        contador += array[i];
        

    }
    return (contador / array.length)
}

console.log(promedioFinal(numeros))


// Promedio de un curso 2

// Dado un array de cualquier cantidad de numeros, 
// donde cada número representa la nota de una alumna, 
// retornar el promedio final de nota del curso. 
// (Nota: recordá que podes saber la longitud de un array con array.length)


