let nbr = reversenbr(12345)
console.log(nbr);

divPar2(6)
divPar2(7)

logIn()


// fonction créer

function reversenbr(n) {
    return n.toString().split("").reverse().join("");
}
function divPar2(x) {
    switch (x % 2) {
    case 0:
        console.log(`Le num ${x} est divisible par 2  ${x}:2 = ${x / 2}`);
        break;
    default:
        console.log(`Ce nombre n'est pas divisible par 2`);
    }
}
function logIn() {
    let password = prompt("Entrez votre mot de passe:");
    while (password !== "mdp") {
    password = prompt("Mot de passe incorrect. Veuillez réessayer:");
    }
    alert("Vous êtes connecté");
}

