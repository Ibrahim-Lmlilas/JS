
// Compter le nombre de voyelles dans une chaîne.
function voyelle(params) {
    let countar = 0 ;
    for (let i = 0; i < params.length; i++) {
        let cha = params[i]
        if (cha === 'a' ||cha === 'e' ||cha === 'i' ||cha === 'o' ||cha === 'u' || cha === 'y' ) {
            countar ++
        }
    }
    return countar
}