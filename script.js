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

/*EJERCICIO 1*/ //LISTO
function contrasenaValida() {
    const validar = document.querySelector('#validar');
    return (validar.value === '2Fj(jjbFsuj' || validar.value === 'eoZiugBf&g9') ? document.querySelector('#solution1').textContent = 'true' : document.querySelector('#solution1').textContent = 'false';;

}


/*EJERCICIO 2*/ //LISTO
function calcularImpuestos() {
    const edad = Number(document.querySelector('#edad').value);
    const ingresos = Number(document.querySelector('#ingresos').value);

    return (edad >= 18 && ingresos >= 1000) ? document.querySelector('#solution2').textContent = `${ingresos - (ingresos * 0.4)}` : document.querySelector('#solution2').textContent = `0`;
}


/*EJERCICIO 3*/ //LISTO
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


/*ejercicio 4*/ //LISTO
function imprimirArreglo() {
    const arreglo = document.querySelector('#arreglo').value;
    let datoArreglo = JSON.parse(arreglo);
    let imprimir = "";
    datoArreglo.forEach(dato => {
        imprimir += dato + ' ';
    });

    document.querySelector('#solution4').innerHTML = imprimir;

}


//ejercicio 5 //LISTO
function likes() {
    let likes = Number(document.querySelector('#likes').value);

    if (likes >= 1000000) {
        likes = (likes / 1000000)
        return document.querySelector('#solution5').textContent = Math.trunc(likes) + 'M';
    }
    else if (likes >= 1000) {
        likes = (likes / 1000);
        return document.querySelector('#solution5').textContent = Math.trunc(likes) + 'K';
    } else {
        likes = likes + ''
        return document.querySelector('#solution5').textContent = likes;
    }
}

//ejercicio 6 //LISTO
function fizzBuzz() {
    const fizzBuzz = Number(document.querySelector('#fizzbuzz').value);

    if (fizzBuzz % 3 === 0 && fizzBuzz % 5 === 0) {
        return document.querySelector('#solution6').textContent = 'fizzbuzz';
    } else if (fizzBuzz % 3 === 0) {
        return document.querySelector('#solution6').textContent = 'fizz';
    } else if (fizzBuzz % 5 === 0) {
        return document.querySelector('#solution6').textContent = 'buzz';
    } else {
        return document.querySelector('#solution6').textContent = fizzBuzz;
    }
}

//ejercicio 7  //LISTO
function contarRango() {
    const num1 = Number(document.querySelector('#num1').value);
    const num2 = Number(document.querySelector('#num2').value);
    let total = 0;
    for (let i = num1; i < num2; i++) {
        total += 1;
    }
    document.querySelector('#solution7').textContent = `${total - 1}`;
}

//ejercicio 8 //LISTO
function sumarRango() {
    const numStart = Number(document.querySelector('#numStart').value);
    const numEnd = Number(document.querySelector('#numEnd').value);
    let suma = 0;
    if (numStart !== numEnd) {
        for (let i = numStart; i <= numEnd; i++) {
            suma += i;
        }
    } else {
        suma = 0;
    }
    document.querySelector('#solution8').textContent = suma;

}

//ejercicio 9 //LISTO
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

//ejercicio 10 //LISTO
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

//ejercicio 11 //LISTO
function sumarArreglo() {
    const sumarNumero = document.querySelector('#sumarNumero').value;
    let numeroArreglo = JSON.parse(sumarNumero);
    let suma = 0;
    numeroArreglo.forEach(numero => {
        suma += numero;
    })
    document.querySelector('#solution11').textContent = suma;

}


//ejercicio 12 //LISTO
function multiplicarArreglo() {
    const multiplicarNumero = document.querySelector('#multiplicarNumero').value;
    let numeroArreglo = JSON.parse(multiplicarNumero);
    let multiplicar = 1;
    numeroArreglo.forEach(numero => {
        (numero !== '0') ? multiplicar *= numero : multiplicar += 0;
    })
    document.querySelector('#solution12').textContent = multiplicar;
}


//ejercicio 13  // LISTO
function removerCeros() {
    const remover = document.querySelector('#remover').value;
    if (remover !== '') {
        let numeroArreglo = JSON.parse(remover);
        const result = numeroArreglo.filter(numero => numero !== 0);
        document.querySelector('#solution13').textContent = JSON.stringify(result);
    } else {
        document.querySelector('#solution13').textContent = 'Ingresar valor';
    }
}

//ejercicio 14  //LISTO
function sumarArr() {
    const datoArreglo = document.querySelector('#datoArreglo').value;
    const positionStart = Number(document.querySelector('#positionStart').value);
    const positionEnd = Number(document.querySelector('#positionEnd').value);
    let numeroArreglo = JSON.parse(datoArreglo);
    let sum = 0;
    numeroArreglo.forEach((dato, index) => {
        if (positionEnd > numeroArreglo.length - 1 || positionEnd === positionStart || positionStart > positionEnd) {
            sum += 0
        } else if (Number(index) >= positionStart && Number(index) <= positionEnd) {
            sum += Number(dato);
        } else {

        }
    });
    document.querySelector('#solution14').textContent = sum;
}

//ejercicio 15  //LISTO
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

//ejercicio 16 //LISTO
function capitalizar() {
    const capitalizar = document.querySelector('#capitalizar').value;
    let imprimir = '';
    for (let i = 0; i < capitalizar.length; i++) {
        (i === 0) ? imprimir += capitalizar[i].toUpperCase() : imprimir += capitalizar[i].toLowerCase();
    }
    document.querySelector('#solution16').textContent = imprimir;
}

//ejercicio 17 //LISTO
function capitalizar2() {
    const capitalizarPalabra = document.querySelector('#capitalizarPalabra').value;
    let datoArreglo = capitalizarPalabra.split(' ');
    let imprimir = '';
    for (let i = 0; i < datoArreglo.length; i++) {
        imprimir += datoArreglo[i].charAt(0).toUpperCase() + datoArreglo[i].slice(1) + ' ';
    }
    document.querySelector('#solution17').textContent = imprimir;
}

//ejercicio 18 //LISTO
function max() {
    const max = document.querySelector('#max').value;
    let datoArreglo = JSON.parse(max);
    const result = datoArreglo.sort((a, b) => a - b)
    let total = result[result.length - 1];
    document.querySelector('#solution18').textContent = total;
}

//ejercicio 19 //LISTO
function min() {
    const min = document.querySelector('#min').value;
    let datoArreglo = JSON.parse(min);
    const result = datoArreglo.sort((a, b) => a - b)
    let total = result[0];
    document.querySelector('#solution19').textContent = total;
}

//ejercicio 20 //LISTO
function password() {
    const password = document.querySelector('#password').value;
    let datoArreglo = password.split('');
    let imprimir = '';
    datoArreglo.forEach(dato => {
        if (dato === 'a') {
            imprimir += 4
        } else if (dato === 'e') {
            imprimir += 3
        } else if (dato === 'i') {
            imprimir += 1
        } else if (dato === 'o') {
            imprimir += 0
        } else {
            imprimir += dato.toLowerCase();
        }
    })
    document.querySelector('#solution20').textContent = imprimir.replaceAll(' ', '');
}

//ejercicio 21 //LISTO
function pares() {
    const pares = document.querySelector('#pares').value;
    let datoArreglo = JSON.parse(pares);
    const result = datoArreglo.filter(numero => numero % 2 === 0);
    document.querySelector('#solution21').textContent = JSON.stringify(result);
}

//ejercicio 22 //LISTO
function positionPares() {
    const positionPares = document.querySelector('#positionPares').value;
    let datoArreglo = JSON.parse(positionPares);
    let imprimir = [];
    if (datoArreglo) {
        datoArreglo.forEach((dato, index) => {
            if (dato % 2 === 0) {
                imprimir.push(index);
            }
        })
    } else {
        imprimir += ''
    }
    document.querySelector('#solution22').textContent = JSON.stringify(imprimir);
}

//ejercicio 23 //LISTO
function duplicar() {
    const duplicar = document.querySelector('#duplicar').value;
    let datoArreglo = JSON.parse(duplicar);
    let imprimir = [];
    datoArreglo.map(dato => imprimir.push(dato * 2));
    document.querySelector('#solution23').textContent = JSON.stringify(imprimir);
}

//ejercicio 24 //LISTO
function empiezanConA() {
    const arregloA = document.querySelector('#arregloA').value;
    let datoArreglo = JSON.parse(arregloA);
    let imprimir = [];
    for (let i = 0; i < datoArreglo.length; i++) {
        if (datoArreglo[i].charAt(0) === 'a' || datoArreglo[i].charAt(0) === 'A') {
            imprimir.push(datoArreglo[i]);
        }
    }
    if (!imprimir) {
        document.querySelector('#solution24').textContent = `[${imprimir}]`;
    } else {
        document.querySelector('#solution24').textContent = JSON.stringify(imprimir);
    }
}

//ejercicio 25 //LISTO
function terminanConS() {
    const terminaS = document.querySelector('#terminaS').value;
    let datoArreglo = JSON.parse(terminaS);
    let imprimir = [];
    for (let i = 0; i < datoArreglo.length; i++) {
        if (datoArreglo[i].charAt(datoArreglo[i].length - 1) === 's' || datoArreglo[i].charAt(datoArreglo[i].length - 1) === 'S') {
            imprimir.push(datoArreglo[i]);
        }
    }
    if (!imprimir) {
        document.querySelector('#solution25').textContent = `[${imprimir}]`;
    } else {
        document.querySelector('#solution25').textContent = JSON.stringify(imprimir);
    }

}

//ejercicio 26 //LISTO
function imprimirMatriz() {
    const arregloArr = document.querySelector('#arregloArr').value;
    let datoArreglo = JSON.parse(arregloArr);
    let imprimir = '';
    datoArreglo.forEach(dato => {
        if (typeof dato == 'object') {
            dato.forEach(char => {
                imprimir += `<span>${char}</span></br>`;
            })
        } else {
            imprimir += `<span>${dato}</span></br>`;
        }
    });
    document.querySelector('#solution26').innerHTML = imprimir;
}
//[[1, 2, 3],[78, 5, 6],[7, 8, 9]]

//ejercicio 27 //LISTO
function numerosAPalabras() {
    const numerosAPalabras = document.querySelector('#numerosAPalabras').value;
    let datoArreglo = JSON.parse(numerosAPalabras);
    let imprimir = [];

    datoArreglo.forEach(dato => {
        if (dato === 0) {
            imprimir.push('Cero');
        } else if (dato === 1) {
            imprimir.push('Uno');
        }
        else if (dato === 2) {
            imprimir.push('Dos');
        }
        else if (dato === 3) {
            imprimir.push('Tres');
        }
        else if (dato === 4) {
            imprimir.push('Cuatro');
        }
        else if (dato === 5) {
            imprimir.push('Cinco');
        }
        else if (dato === 6) {
            imprimir.push('Seis');
        }
        else if (dato === 7) {
            imprimir.push('Siete');
        }
        else if (dato === 8) {
            imprimir.push('Ocho');
        } else {
            imprimir.push('Nueve');
        }
    })
    document.querySelector('#solution27').textContent = JSON.stringify(imprimir);
}

//ejercicio 28 //LISTO
function palabrasANumeros() {
    const palabrasANumeros = document.querySelector('#palabrasANumeros').value;
    let datoArreglo = JSON.parse(palabrasANumeros);
    let imprimir = [];
    datoArreglo.forEach(dato => {
        if (dato === 'cero') {
            imprimir.push(0);
        } else if (dato === 'uno') {
            imprimir.push(1);
        } else if (dato === 'dos') {
            imprimir.push(2);
        }else if (dato === 'tres') {
            imprimir.push(3);
        }else if (dato === 'cuatro') {
            imprimir.push(4);
        }else if (dato === 'cinco') {
            imprimir.push(5);
        }else if (dato === 'seis') {
            imprimir.push(6);
        }else if (dato === 'siete') {
            imprimir.push(7);
        }else if (dato === 'ocho') {
            imprimir.push(8);
        } else if (dato === 'nueve') {
            imprimir.push(9);
        } else {
            imprimir.push(-1);
        }
    })
    document.querySelector('#solution28').textContent = JSON.stringify(imprimir);
}

//ejercicio 29 //LISTO
function numAsteriscos() {
    const numAsteriscos = document.querySelector('#numAsteriscos').value;
    let datoArreglo = JSON.parse(numAsteriscos);
    let imprimir = 0;
    datoArreglo.forEach( dato => (dato === '*') ? imprimir += 1 : imprimir += 0 )
    if (imprimir > 0) {
        document.querySelector('#solution29').textContent = imprimir;
    } else {
        document.querySelector('#solution29').textContent = imprimir;
    }
}

//ejercicio 30 //LISTO
function numAsteriscos1() {
    const numAsteriscos1 = document.querySelector('#numAsteriscos1').value;
    let datoArreglo = JSON.parse(numAsteriscos1);
    let imprimir = 0;
    datoArreglo.forEach(dato => {
        if (typeof dato == 'object') {
            dato.forEach(char => {
                (char === "*") ? imprimir += 1 : imprimir += 0;
            })
        } else {
            (dato === "*") ? imprimir += 1 : imprimir += 0;
        }
    });
    document.querySelector('#solution30').textContent = imprimir;
}
//const arr = [["*","","*"],["","*",""],["*","","*"]];

//ejercicio 31 //LISTO
function distancia() {
    const palabraNew1 = document.querySelector('#palabraNew1').value;
    const palabraNew2 = document.querySelector('#palabraNew2').value;
    let datoArreglo1 = palabraNew1.split('');
    let datoArreglo2 = palabraNew2.split('');
    let imprimir = 0;
    if (datoArreglo1.length >= datoArreglo2.length) {
        for (let i = 0; i < datoArreglo1.length; i++) {
            (datoArreglo1[i] === datoArreglo2[i]) ? imprimir += 0 : imprimir += 1
        }
    } else {
        for (let i = 0; i < datoArreglo2.length; i++) {
            (datoArreglo1[i] === datoArreglo2[i]) ? imprimir += 0 : imprimir += 1;     
        }
    }

    document.querySelector('#solution31').textContent = imprimir;
}