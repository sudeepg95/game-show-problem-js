const playTheGame = (willSwitch) => {
    const DOORS = [0, 1, 2];

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

console.log(simulateGameShow(1000, willSwitch = true));
console.log(simulateGameShow(1000, willSwitch = false));