// Supprimer les doublons d’un tableau sans utiliser Set ni .filter().

function doublons(params) {
    let arr = [];
    for (let i = 0; i < params.length; i++) {
        if (!arr.includes(params[i])) {
            arr.push(params[i])
        }
    }
    return arr
}