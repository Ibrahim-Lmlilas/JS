
// Inverser une chaîne sans utiliser .reverse().


function reverse(params) {
    let arr = [] ;
    for (let i = params.length-1; i >=0; i--) {
        arr = arr + params[i]
    }
    return arr 
}