const MAX_RONDES = 5;

/**
 * @returns {number[]}
 */
function generarCodiSecret() {
    const codi = [];
    for (let i = 0; i < 4; i++) {
        codi.push(Math.floor(Math.random() * 10));
    }
    return codi;
}


const codiSecret = generarCodiSecret();


/**
 
 * @param {number[]} intent
 * @param {number[]} secret
 * @returns {string[]}
 */
function validarIntent(intent, secret) {
    const pistes = ["×", "×", "×", "×"];
    const secretUsats = [false, false, false, false];
    const intentUsats  = [false, false, false, false];


    for (let i = 0; i < 4; i++) {
        if (intent[i] === secret[i]) {
            pistes[i]      = "1";
            secretUsats[i] = true;
            intentUsats[i] = true;
        }
    }

  
    for (let i = 0; i < 4; i++) {
        if (intentUsats[i]) continue;
        for (let j = 0; j < 4; j++) {
            if (secretUsats[j]) continue;
            if (intent[i] === secret[j]) {
                pistes[i]      = "Ø";
                secretUsats[j] = true;
                break;
            }
        }
    }

    return pistes;
}

/**

 * @param {string[]} pistes
 * @returns {boolean}
 */
function esGuanyador(pistes) {
    return pistes.every(p => p === "1");
}

/**

 * @param {number} rondesRestants
 * @returns {boolean}
 */
function esGameOver(rondesRestants) {
    return rondesRestants <= 0;
}