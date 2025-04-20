// Remplacer toutes les occurrences d’un caractère donné par un autre sans .replace().



function raplace(params1 , params2 , params3) {
    let resulte = "";

    for (let i = 0; i < params1.length; i++) {
        if (params1[i]===params2) {
            resulte = resulte + params3
        }
        else{
            resulte = resulte + params1[i]
        }
        
    }
    return resulte ;
}