function Functions() {

        let intialPop = prompt('Initial Population');
        let rate = prompt('rate of growth');
        let time = prompt('time in hours');

        let finalPop = Math.round(parseFloat(intialPop)*(Math.pow(Math.E,parseFloat(rate)*parseFloat(time))));
        let monstername = prompt('Monster Name');
        let monsterregion = prompt ('Monster Region');

        let temp = ''
        let MONESTER = temp.concat(monsterregion,' ',monstername).toUpperCase();
        let output = "After " + time + " hours, the population of " + MONESTER + " has risen to " + finalPop;

        document.getElementById('result').innerHTML = output;

        
    }
