//Exercices faits :

//Exercices non terminés
const exo1 = require("./exo1/index.js");
const exo2 = require("./exo2/index.js");

//Exercices non faits
const exo3 = require("./exo3/index.js");
const exo4 = require("./exo4/index.js");
const exo5 = require("./exo5/index.js");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    //Demander quel exercice executer
    readline.question('Quel exercice voulez-vous exécuter ? ', num => {
        if(num == 1){readline.close(); exo1.run()}
        else if(num == 2){readline.close();exo2.run()}
        else if(num == 3){readline.close();exo3.run()}
        else if(num == 4){readline.close();exo4.run()}
        else if(num == 5){readline.close();exo5.run()}
        else{
            console.log("Merci de séléctionner un exercice valide (Valeur entre 1 et 5)")
        }
        
    });
}
main()