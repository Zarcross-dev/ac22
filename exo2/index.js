const { read } = require('fs');
const readline = require('readline')
module.exports = {
    run: () => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        i=0
        var specs=[]
        var travel_time=""
        function main(input) {
            readline.question(`Caractéristique du vaisseau -> `, spec =>{
                i++;
                specs=spec.split(";")
                specs.forEach((element, i) => {
                    specs[i]=element.split("=")
                    
                })
                specs={
                    "name"  :specs[0][1],
                    "speed" :specs[1][1].replace("km/h", ""),
                    "price" :specs[2][1].replace("/km", "")
                }

                readline.question("Temps de trajet -> ", time=>{
                    travel_time = time
                    readline.close()
                    calcul_trajet(travel_time)

                })
                
            })
        }
        main()
        
        function calcul_trajet(tt) {
            speed = specs.speed*24
            distance = speed*tt
            total_price = distance*specs.price 

            console.log(total_price.toFixed(2)+"€")
        }



    }
}