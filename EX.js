
// 1-Écrire une fonction qui compte combien de fois chaque caractère apparaît dans une chaîne donnée.

function countar(params) {
    let countar = {};
    for (let i = 0; i < params.length; i++) {
        let caracter = params[i];
        if (countar[caracter]) {
            countar[caracter]=countar[caracter]+1
        }
        else{
            countar[caracter]=1
        }
        
    }
    return countar ;
}