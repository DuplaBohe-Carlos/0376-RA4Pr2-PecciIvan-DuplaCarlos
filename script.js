const MAX_RONDES = 10;
const codiSecret = [1, 2, 3, 4]; 

let rondesRestants = MAX_RONDES;  
let partidaAcabada = false;

/**
 */
function inicialitzarSelects() {
    const selects = document.querySelectorAll(".code-input");
    selects.forEach(select => {
        for (let i = 0; i <= 9; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            select.appendChild(option);
        }
    });
}

/**
 * @param {string} missatge
 * @param {string} tipus
 */
function logTerminal(missatge, tipus = "normal") {
    const terminal = document.getElementById("terminal");
    const linia = document.createElement("p");
    linia.classList.add("line");

    if (tipus === "error") {
        linia.classList.add("error");
        linia.textContent = ">> ERROR: " + missatge;
    } else if (tipus === "exit") {
        linia.classList.add("success");
        linia.textContent = ">> " + missatge;
    } else {
        linia.textContent = "> " + missatge;
    }

    terminal.appendChild(linia);
    terminal.scrollTop = terminal.scrollHeight;
}

/**
 */
function actualitzarComptadorRondes() {
    document.getElementById("rondes-restants").textContent = rondesRestants;
}

/**
 * @returns {number[]}
 */
function recollirIntent() {
    const selects = document.querySelectorAll(".code-input");
    return Array.from(selects).map(select => parseInt(select.value, 10));
}

/**
 */
function gestorEnviarIntent() {
    if (partidaAcabada) {
        logTerminal("La partida ha acabat. Recarrega la pàgina per tornar a jugar.", "error");
        return;
    }

    const intent = recollirIntent();
    logTerminal(`Intent introduït: [ ${intent.join(" - ")} ]`);

    const pistes = validarIntent(intent, codiSecret);
    logTerminal(`Pistes: [ ${pistes.join(" | ")} ]`);

    rondesRestants--;
    actualitzarComptadorRondes();

    if (esGuanyador(pistes)) {
        logTerminal(`ACCÉS CONCEDIT! Has endevinat el codi: [ ${codiSecret.join(" - ")} ]`, "exit");
        partidaAcabada = true;
    } else if (esGameOver(rondesRestants)) {
        logTerminal(`SISTEMA BLOQUEJAT. El codi era: [ ${codiSecret.join(" - ")} ]`, "error");
        partidaAcabada = true;
    } else {
        logTerminal(`Rondes restants: ${rondesRestants}`);
    }
}

inicialitzarSelects();
document.getElementById("btn-enviar").addEventListener("click", gestorEnviarIntent);
logTerminal("Sistema inicialitzat. Endevina el codi de 4 dígits.");