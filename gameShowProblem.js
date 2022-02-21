const playTheGame = (willSwitch) => {

    const doorWithCar = Math.floor(Math.random() * DOORS.length);
    const selectedDoor = Math.floor(Math.random() * DOORS.length);
    
    const openedDoor = DOORS.find((door) => door !== doorWithCar && door !== selectedDoor);

    if (willSwitch) {
        return doorWithCar === DOORS.find((door) => door !== selectedDoor && door !== openedDoor)
    }
    return doorWithCar === selectedDoor;
};

const simulateGameShow = (noOfIterations, willSwitch) => {
    let gamesWon = 0;
    for(let i = 0; i < noOfIterations; i++) {
        gamesWon += playTheGame(willSwitch);
    }
    return gamesWon;
};

const DOORS = [0, 1, 2];
const ITERATIONS = 1000;

const gamesWonIfSwitched = simulateGameShow(ITERATIONS, willSwitch = true);
const percentageOfWinsIfSwitched = ((gamesWonIfSwitched/1000) * 100).toFixed(2);
const gamesWonIfNotSwitched = simulateGameShow(ITERATIONS, willSwitch = false);
const percentageOfWinsIfNotSwitched = ((gamesWonIfNotSwitched/1000) * 100).toFixed(2);

console.log(`Stay: Count ${gamesWonIfNotSwitched}/${ITERATIONS} - ${percentageOfWinsIfNotSwitched}%`);
console.log(`Switch: Count ${gamesWonIfSwitched}/${ITERATIONS} - ${percentageOfWinsIfSwitched}%`);
