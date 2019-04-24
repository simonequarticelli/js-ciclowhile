//chiedo all'utente il cognome
var utente=prompt('Inserisci il tuo cognome', 'cognome');
//creo array con altri cognomi
var cognomi=['Rossi', 'Esposito', 'Quarticelli', 'Pippo'];
//creo variabile verifica
var find=false;
//definisco i
var i=0;
//utilizzo del ciclo while come controllo cognome
while (i<cognomi.length && !find){
    if (cognomi[i]==utente) {
      find=true;
    }
    i++;
  }
//logica
if (find) {
  alert('trovato');
} else {
  alert(utente +' non trovato');
  var aggiunta = prompt('vuoi aggiungerlo alla lista?', 'si/no');
  if (aggiunta == 'si') {
    //aggiunta del cognome utente
    cognomi.push(utente);
    //ordino i cognomi
    cognomi.sort();
  }
}
document.writeln(cognomi);
//visualizzo posione cognome inserito
var posizione = cognomi.indexOf(utente);
console.log(posizione);
