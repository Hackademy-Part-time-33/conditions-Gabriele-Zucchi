
// ESERCIZIO 1

// let totGatti = +prompt('Quanti gatti ci sono?');

// let gattiInFila = +prompt('Quanti gatti ci sono in fila?');

// let fileRisultanti = Math.trunc(totGatti / gattiInFila);

// let gattiFuori = totGatti % gattiInFila;

// let gattiMancanti = gattiInFila - gattiFuori;

// console.log(`Ci sono ${fileRisultanti} file di  gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${gattiFuori}`);


//  ESERCIZIO 2
//  prova con IF
// let v = +prompt('Inserisci un numero per il giudizio: ');

// if (v < 18){
//     console.log('insufficiente');
// } else if (v >= 18 && v < 21) {
//     console.log('sufficiente');
// } else if (v >= 21 && v < 24) {
//     console.log('buono');
// } else if (v >= 24 && v < 27) {
//     console.log('distinto');
// } else if (v >= 27 && v < 29) {
//     console.log('ottimo');
// } else if (v == 30) {
//     console.log('eccellente');
// } else {
//     console.log('valore non valido');
// }

//  Prova con Switch

// switch (true){
//     case (v < 18) : console.log('insufficiente'); break;
//     case (v >= 18 && v < 21) : console.log('sufficiente'); break;
//     case (v >= 21 && v < 24) : console.log('buono'); break;
//     case (v >= 24 && v < 27) : console.log('distinto'); break;
//     case (v >= 27 && v < 29) : console.log('ottimo'); break;
//     case (v === 30) : console.log('eccellente'); break;
//     default : console.log('valore non valido'); break;
// }

// ESERCIZIO 3

// prova con IF ELSE

let temp = +prompt('inserisci una temperatura: ');

// if (temp < -10){ 
//     console.log('copriti...ancora ti raffreddi');
// }else if (temp < 0) {
//     console.log('non é tanto il freddo quanto l\'umiditá ');
// }else if (temp < 20) {
//     console.log('non ci sono piú le mezze stagioni');
// }else if (temp < 30) {
//     console.log('mi dia una peroni sudati');
// }else if (temp >= 30) {
//     console.log('lu mare, lu sole, lu ientu');
// }else {
//     console.log('valore non valido');
// }

// prova con SWITCH

switch (true){
    case (temp < -10) : console.log('copriti...ancora ti raffreddi'); break;
    case (temp < 0) : console.log('non é tanto il freddo quanto l\'umiditá'); break;
    case (temp < 20) : console.log('non ci sono piú le mezze stagioni'); break;
    case (temp <30 ) : console.log('mi dia una peroni sudati'); break;
    case (temp >= 30) : console.log('lu mare, lu sole, lu ientu'); break;
    default : console.log('valore non valido'); break;
}