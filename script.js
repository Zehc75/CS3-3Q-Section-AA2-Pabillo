function callAFunc() {

        let intialPopulation = parseFloat(prompt('input the Initial Population'));
        let rateOfGrowth = parseFloat(prompt('input the Rate of growth'));
        let timeInHours = parseFloat(prompt('input the time in hours'));

        let exponentialPopulationGrowth = Math.round(intialPopulation * Math.pow(Math.E,rateOfGrowth*timeInHours));


        let location = prompt('input is for the region/location of the monster.');
        let nameOfMonster = prompt('input the name of the monster.');

        document.getElementById('result').innerhtml = " After " + timeInHours + " hours, " + " the population of " + nameOfMonster.toUpperCase() + " has risen to " + exponentialPopulationGrowth;
        
    }

