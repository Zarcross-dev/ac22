const readline = require('readline')
module.exports = {
    run: () => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        i=1
        var steps=[]
        var mission=""
        function main(input) {
            readline.question(`Etape ${i} -> `, text =>{
                i++;
                if(!text){
                    readline.close();
                    create_mission_name();
                }else{
                    steps.push(text);
                    main();
                    
                }
                
            })
        }
        main()
        function create_mission_name() {
            var used_letters=[]
            console.log(steps)
            steps.forEach(planet => {
                var letter = planet.charAt(0).toUpperCase()
                var size = planet.length-1

                if(used_letters.includes(letter)){
                    var letter = planet.charAt(0).toUpperCase()+planet.charAt(1).toLowerCase()
                    var size = planet.length-2
                    mission += letter+size
                    
                }else{
                    used_letters.push(letter)
                    mission += letter+size
                }
            });
            console.log(mission)
        }



    }
}