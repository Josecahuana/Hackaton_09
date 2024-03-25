const formulario = document.querySelector('.formulario');


function ejercicio1() {
    disabledButon();
    anadirAttribute('formulario1', '#exer1');
}
function ejercicio2() {
    disabledButon();
    anadirAttribute('formulario2', '#exer2');
}
function ejercicio3() {
    disabledButon();
    anadirAttribute('formulario3', '#exer3');
}
function ejercicio4() {
    disabledButon();
    anadirAttribute('formulario4', '#exer4');
}
function ejercicio5() {
    disabledButon();
    anadirAttribute('formulario5', '#exer5');
}
function ejercicio6() {
    disabledButon();
    anadirAttribute('formulario6', '#exer6');
}
function ejercicio7() {
    disabledButon();
    anadirAttribute('#formulario7', '#exer7');
}
function ejercicio8() {
    disabledButon();
    anadirAttribute('#formulario8', '#exer8');
}
function ejercicio9() {
    disabledButon();
    anadirAttribute('#formulario9', '#exer9');
}
function ejercicio10() {
    disabledButon();
    anadirAttribute('#formulario10', '#exer10');
}
function ejercicio11() {
    disabledButon();
    anadirAttribute('#formulario11', '#exer11');
}
function ejercicio12() {
    disabledButon();
    anadirAttribute('#formulario12', '#exer12');
}
function ejercicio13() {
    disabledButon();
    anadirAttribute('#formulario13', '#exer13');
}
function ejercicio14() {
    disabledButon();
    anadirAttribute('#formulario14', '#exer14');
}
function ejercicio15() {
    disabledButon();
    anadirAttribute('#formulario15', '#exer15');
}
function ejercicio16() {
    disabledButon();
    anadirAttribute('#formulario16', '#exer16');
}
function ejercicio17() {
    disabledButon();
    anadirAttribute('#formulario17', '#exer17');
}
function ejercicio18() {
    disabledButon();
    anadirAttribute('#formulario18', '#exer18');
}
function ejercicio19() {
    disabledButon();
    anadirAttribute('#formulario19', '#exer19');
}
function ejercicio20() {
    disabledButon();
    anadirAttribute('#formulario20', '#exer20');
}
function ejercicio21() {
    disabledButon();
    anadirAttribute('#formulario21', '#exer21');
}
function ejercicio22() {
    disabledButon();
    anadirAttribute('#formulario22', '#exer22');
}
function ejercicio23() {
    disabledButon();
    anadirAttribute('#formulario23', '#exer23');
}
function ejercicio24() {
    disabledButon();
    anadirAttribute('#formulario24', '#exer24');
}
function ejercicio25() {
    disabledButon();
    anadirAttribute('#formulario25', '#exer25');
}
function ejercicio26() {
    disabledButon();
    anadirAttribute('#formulario26', '#exer26');
}
function ejercicio27() {
    disabledButon();
    anadirAttribute('#formulario27', '#exer27');
}
function ejercicio28() {
    disabledButon();
    anadirAttribute('#formulario28', '#exer28');
}
function ejercicio29() {
    disabledButon();
    anadirAttribute('#formulario29', '#exer29');
}
function ejercicio30() {
    disabledButon();
    anadirAttribute('#formulario30', '#exer30');
}
function ejercicio31() {
    disabledButon();
    anadirAttribute('#formulario31', '#exer31');
}



function disabledButon() {
    const boton = document.querySelectorAll('.botons button');
    boton.forEach(dato => dato.removeAttribute('disabled'));

}
function anadirAttribute(form, exer) {
    const dato = `#${form}`;
    const form1 = document.querySelector(dato);
    const exer1 = document.querySelector(exer);
    for (let i = 0; i < formulario.children.length; i++) {
        if (String(formulario.children[i].id) === form) {
            form1.classList.toggle('desactivo');
            exer1.setAttribute('disabled', '');
        } else {
            form1.classList.remove('activo');
            form1.classList.add('desactivo');
        }
    }

}




/****************************************************************************************/

/*EJERCICIO 1*/
function contrasenaValida() {
    const validar = document.querySelector('#validar');
    return (validar.value === '2FjjjbFsuj' || validar.value === 'eoZiugBf&g9') ? document.querySelector('#solution1').textContent = 'true' : document.querySelector('#solution1').textContent = 'false';;

}


/*EJERCICIO 2*/
function calcularImpuestos() {
    const edad = Number(document.querySelector('#edad').value);
    const ingresos = Number(document.querySelector('#ingresos').value);

    return (edad >= 18 && ingresos >= 1000) ? document.querySelector('#solution2').textContent = `${ingresos - (ingresos * 0.4)}` : document.querySelector('#solution2').textContent = `0`;
}


/*EJERCICIO 3*/
function bmi() {
    const peso = Number(document.querySelector('#peso').value);
    const altura = Number(document.querySelector('#altura').value);

    let bmi = peso / (altura * altura);
    console.log(bmi);

    if (bmi < 18.5) {
        return document.querySelector('#solution3').textContent = 'Bajo de peso'
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return document.querySelector('#solution3').textContent = 'Normal'
    } else if (bmi >= 25 && bmi < 29.9) {
        return document.querySelector('#solution3').textContent = 'Sobrepeso'
    } else if (bmi >= 29.9 || bmi > 30) {
        return document.querySelector('#solution3').textContent = 'Obeso'
    } else {
        return document.querySelector('#solution3').textContent = 'Dato incorrecto'
    }
}


/*ejercicio 4*/
function imprimirArreglo() {
    const arreglo = document.querySelector('#arreglo').value;
    let arr = arreglo.split(' ');
    let dato = "";
    for (let i = 0; i < arr.length; i++) {
        dato += `<span>${arr[i]}</span></br>`;
    }
    document.querySelector('#solution4').innerHTML = dato;

}


//ejercicio 5
function likes() {
    let likes = Number(document.querySelector('#likes').value);

    if (likes >= 1000000) {
        likes = (likes / 1000000) + "M"
        return document.querySelector('#solution5').textContent = likes;
    }
    else if (likes >= 1000) {
        likes = (likes / 1000) + "K";
        return document.querySelector('#solution5').textContent = likes;
    } else {
        likes = likes + ''
        return document.querySelector('#solution5').textContent = likes;
    }
}

//ejercicio 6
function fizzBuzz() {
    const fizzBuzz = Number(document.querySelector('#fizzbuzz').value);

    if (fizzBuzz % 3 === 0 && fizzBuzz % 5 === 0) {
        return document.querySelector('#solution6').textContent = 'fizzbuzz';
    } else if (fizzBuzz % 3 === 0) {
        return document.querySelector('#solution6').textContent = 'fizz';
    } else if (fizzBuzz % 5 === 0) {
        return document.querySelector('#solution6').textContent = 'buzz';
    } else {
        return document.querySelector('#solution6').textContent = 'No es multiplo de 3 o 5';
    }
}

//ejercicio 7
function contarRango() {
    const num1 = Number(document.querySelector('#num1').value);
    const num2 = Number(document.querySelector('#num2').value);
    let total = '';
    for (let i = num1; i < num2; i++) {
        total += i;
    }
    document.querySelector('#solution7').textContent = `${total.length - 1}`;
}

//ejercicio 8
function sumarRango() {
    const numStart = Number(document.querySelector('#numStart').value);
    const numEnd = Number(document.querySelector('#numEnd').value);
    let suma = 0;
    for (let i = numStart; i <= numEnd; i++) {
        suma += i;
    }
    console.log(suma);

    document.querySelector('#solution8').textContent = suma;

}

//
function numeroDeAs() {
    const numeroAses = document.querySelector('#numeroAses').value;
    let dato = numeroAses.split('');
    let total = 0;
    dato.forEach(data => {
        if (data === 'a') {
            return total++;
        }
    })
    document.querySelector('#solution9').textContent = total;
}

//
function numeroDeCaracteres() {
    const valorString = document.querySelector('#valorString').value;
    const caracter = document.querySelector('#caracter').value;

    let dato = valorString.split('');
    let total = 0;
    dato.forEach(data => {
        if (data === caracter) {
            return total++;
        }
    })
    document.querySelector('#solution10').textContent = total;
}

//
function sumarArreglo() {
    const sumarNumero = document.querySelector('#sumarNumero').value;
    let numeroArreglo = sumarNumero.split(' ');
    let suma = 0;
    numeroArreglo.forEach(numero => {
        suma += Number(numero);
    })
    document.querySelector('#solution11').textContent = suma;

}


//
function multiplicarArreglo() {
    const multiplicarNumero = document.querySelector('#multiplicarNumero').value;
    let numeroArreglo = multiplicarNumero.split(' ');
    let multiplicar = 1;
    numeroArreglo.forEach(numero => {
        if (numero !== '0') {
            multiplicar *= Number(numero);
        } else {
            multiplicar += 0;
        }
    })
    document.querySelector('#solution12').textContent = multiplicar;
}


//
function removerCeros() {
    const remover = document.querySelector('#remover').value;
    let numeroArreglo = remover.split(' ');
    let total = [];
    const result = numeroArreglo.filter(numero => Number(numero) !== 0);

    document.querySelector('#solution13').textContent = `[${result}]`;

}

//FALTAAAAA
function sumarArr() {
    const datoArreglo = document.querySelector('#datoArreglo').value;
    const positionStart = Number(document.querySelector('#positionStart').value);
    const positionEnd = Number(document.querySelector('#positionEnd').value);

    let numeroArreglo = datoArreglo.split(' ');
    let sum = 0;
    for (let i = 0; i < numeroArreglo.length; i++) {
        if (positionStart === positionEnd) {
            break;
        } else if (numeroArreglo[i] >= numeroArreglo[positionStart] && numeroArreglo[i] <= numeroArreglo[positionEnd]) {
            sum += Number(numeroArreglo[i]);
        }
    }
    document.querySelector('#solution14').textContent = sum;
}


//
function transcribir() {
    const datoCadena = document.querySelector('#datoCadena').value;
    let datoArreglo = datoCadena.split('');
    let imprimir = '';
    datoArreglo.forEach(dato => {
        if (dato === 'G') {
            imprimir += 'C'
        } else if (dato === 'C') {
            imprimir += 'G'
        } else if (dato === 'T') {
            imprimir += 'A'
        } else if (dato === 'A') {
            imprimir += 'U'
        } else {
            imprimir += dato
        }
    })

    document.querySelector('#solution15').textContent = imprimir;

}

//
function capitalizar() {
    const capitalizar = document.querySelector('#capitalizar').value;
    let imprimir = '';

    for (let i = 0; i < capitalizar.length; i++) {
        if (i === 0) {
            imprimir += capitalizar[i].toUpperCase();
        } else {
            imprimir += capitalizar[i].toLowerCase();
        }
    }

    document.querySelector('#solution16').textContent = imprimir;
}

//
function capitalizar2() {
    const capitalizarPalabra = document.querySelector('#capitalizarPalabra').value;
    let datoArreglo = capitalizarPalabra.split(' ');
    let imprimir = '';
    for (let i = 0; i < datoArreglo.length; i++) {
        imprimir += datoArreglo[i].charAt(0).toUpperCase() + datoArreglo[i].slice(1) + ' ';
    }

    document.querySelector('#solution17').textContent = imprimir;
}

//
function max() {
    const max = document.querySelector('#max').value;
    let datoArreglo = max.split(' ');


    const result = datoArreglo.sort((a, b) => Number(a) - Number(b))

    let total = result[result.length - 1];

    document.querySelector('#solution18').textContent = total;
}


//
function min() {
    const min = document.querySelector('#min').value;
    let datoArreglo = min.split(' ');


    const result = datoArreglo.sort((a, b) => Number(a) - Number(b))

    let total = result[0];

    document.querySelector('#solution19').textContent = total;
}


//
function password() {
    const password = document.querySelector('#password').value;
    let datoArreglo = password.split('');

    let imprimir = '';
    datoArreglo.forEach(dato => {
        if (dato === 'a') {
            imprimir += '4'
        } else if (dato === 'e') {
            imprimir += '3'
        } else if (dato === 'i') {
            imprimir += '1'
        } else if (dato === 'o') {
            imprimir += '0'
        } else {

            imprimir += dato.toLowerCase();
        }
    })

    document.querySelector('#solution20').textContent = imprimir.replaceAll(' ', '');

}

//
function pares() {
    const pares = document.querySelector('#pares').value;
    let datoArreglo = pares.split('');
    const result = datoArreglo.filter(numero => Number(numero) % 2 === 0);

    document.querySelector('#solution21').textContent = result;
}


//
function positionPares() {
    const positionPares = document.querySelector('#positionPares').value;
    let datoArreglo = positionPares.split(' ');
    let imprimir = '';
    if (datoArreglo) {
        datoArreglo.forEach((dato, index) => {
            if (Number(dato) % 2 === 0) {
                imprimir += index;
            } else {
                imprimir += '';
            }
        })
    } else {
        imprimir = '[]'
    }

    document.querySelector('#solution22').textContent = imprimir;
}

//23
function duplicar() {
    const duplicar = document.querySelector('#duplicar').value;
    let datoArreglo = duplicar.split(' ');
    let imprimir = '';
    const result = datoArreglo.map(dato => {
        imprimir += (Number(dato) * 2) + ' ';
    });

    document.querySelector('#solution23').textContent = imprimir;

}

//24
function empiezanConA() {
    const arregloA = document.querySelector('#arregloA').value;
    let datoArreglo = arregloA.split(' ');
    let imprimir = '';
    for (let i = 0; i < datoArreglo.length; i++) {
        if (datoArreglo[i].charAt(0) === 'a' || datoArreglo[i].charAt(0) === 'A') {
            imprimir += datoArreglo[i] + ' ';
        } else {
            imprimir += '';
        }
    }

    if (!imprimir) {
        imprimir += '[]'
        document.querySelector('#solution24').textContent = imprimir;
    } else {
        document.querySelector('#solution24').textContent = imprimir;
    }

}

//25
function terminanConS() {
    const terminaS = document.querySelector('#terminaS').value;
    let datoArreglo = terminaS.split(' ');
    let imprimir = '';
    for (let i = 0; i < datoArreglo.length; i++) {
        if (datoArreglo[i].charAt(datoArreglo[i].length - 1) === 's' || datoArreglo[i].charAt(datoArreglo[i].length - 1) === 'S') {
            imprimir += datoArreglo[i] + ' ';
        } else {
            imprimir += '';
        }
    }
    if (!imprimir) {
        imprimir += '[]'
        document.querySelector('#solution25').textContent = imprimir;
    } else {
        document.querySelector('#solution25').textContent = imprimir;
    }

}

//26  ---- solo recibe arrays de numeros
function imprimirMatriz() {
    const arregloArr = document.querySelector('#arregloArr').value;
    let datoArreglo = JSON.parse(arregloArr);
    console.log(datoArreglo);
    let imprimir = [];
    datoArreglo.forEach(dato => {
        if (typeof dato == 'object') {
            dato.forEach(char => {
                imprimir.push(char);
            })
        } else {
            imprimir.push(dato);
        }
    });
    document.querySelector('#solution26').textContent = '[' + imprimir + ']';
}

//
function numerosAPalabras() {
    const numerosAPalabras = document.querySelector('#numerosAPalabras').value;
    let datoArreglo = numerosAPalabras.split(' ');
    let imprimir = '';

    datoArreglo.forEach(dato => {
        if (Number(dato) === 0) {
            imprimir += 'Cero' + ' ';
        } else if (Number(dato) === 1) {
            imprimir += 'Uno' + ' ';
        }
        else if (Number(dato) === 2) {
            imprimir += 'Dos' + ' ';
        }
        else if (Number(dato) === 3) {
            imprimir += 'Tres' + ' ';
        }
        else if (Number(dato) === 4) {
            imprimir += 'Cuatro' + ' ';
        }
        else if (Number(dato) === 5) {
            imprimir += 'Cinco' + ' ';
        }
        else if (Number(dato) === 6) {
            imprimir += 'Seis' + ' ';
        }
        else if (Number(dato) === 7) {
            imprimir += 'Siete' + ' ';
        }
        else if (Number(dato) === 8) {
            imprimir += 'Ocho' + ' ';
        } else {
            imprimir += 'Nueve' + ' ';
        }
    })
    document.querySelector('#solution27').textContent = imprimir;
}

//28
function palabrasANumeros() {
    const palabrasANumeros = document.querySelector('#palabrasANumeros').value;
    let datoArreglo = palabrasANumeros.split(' ');
    let imprimir = '';

    datoArreglo.forEach(dato => {
        if (dato === 'cero') {
            imprimir += '0' + ' ';
        } else if (dato === 'uno') {
            imprimir += '1' + ' ';
        }
        else if (dato === 'dos') {
            imprimir += '2' + ' ';
        }
        else if (dato === 'tres') {
            imprimir += '3' + ' ';
        }
        else if (dato === 'cuatro') {
            imprimir += '4' + ' ';
        }
        else if (dato === 'cinco') {
            imprimir += '5' + ' ';
        }
        else if (dato === 'seis') {
            imprimir += '6' + ' ';
        }
        else if (dato === 'siete') {
            imprimir += '7' + ' ';
        }
        else if (dato === 'ocho') {
            imprimir += '8' + ' ';
        } else {
            imprimir += '9' + ' ';
        }
    })
    document.querySelector('#solution28').textContent = imprimir;
}


//29
function numAsteriscos() {
    const numAsteriscos = document.querySelector('#numAsteriscos').value;
    let datoArreglo = numAsteriscos.split(' ');
    let imprimir = 0;
    datoArreglo.forEach(dato => {
        if (dato === '*') {
            imprimir += 1;
        } else {
            imprimir += 0;
        }
    })
    if (imprimir > 0) {
        document.querySelector('#solution29').textContent = imprimir;
    } else {
        document.querySelector('#solution29').textContent = '[ ]';
    }
}

//30 -- FALTA
function numAsteriscos() {
    const numAsteriscos = document.querySelector('#numAsteriscos').value;
    let datoArreglo = JSON.parse(numAsteriscos);
    let imprimir = 0;
    datoArreglo.forEach(dato => {
        for (let i = 0; i < dato.length; i++) {
            if (dato[i] === '*') {
                imprimir += 1;
            } else {
                imprimir += 0;
            }
        }
    })
    document.querySelector('#solution30').textContent = imprimir;
}

// function datos() {
//     const arr = [1, 3, [4, 5, 6], 1, 2];
//     let imprimir = [];
//     arr.forEach(dato => {
//         if (typeof dato == 'object') {
//             dato.forEach(char => {
//                 imprimir.push(char);
//             })
//         } else {
//             imprimir.push(dato);
//         }
//     });
//     document.querySelector('#solution31').textContent = imprimir;
// }






//31
function distancia() {
    const palabraNew1 = document.querySelector('#palabraNew1').value;
    const palabraNew2 = document.querySelector('#palabraNew2').value;
    let datoArreglo1 = palabraNew1.split('');
    let datoArreglo2 = palabraNew2.split('');
    let imprimir = 0;
    if (datoArreglo1.length >= datoArreglo2.length) {
        for (let i = 0; i < datoArreglo1.length; i++) {
            if (datoArreglo1[i] === datoArreglo2[i]) {
                imprimir += 0;
            } else {
                imprimir += 1;
            }
        }
    } else {
        for (let i = 0; i < datoArreglo2.length; i++) {
            if (datoArreglo1[i] === datoArreglo2[i]) {
                imprimir += 0;
            } else {
                imprimir += 1;
            }
        }
    }

    document.querySelector('#solution31').textContent = imprimir;
}