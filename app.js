console.log('%c Mars Rover kata', 'font-weight: bold; font-size: 2em;')
console.log('%c Iteration 1 | The Rover Object', 'font-size: 1.4em')
console.log('- There are two rovers both with the default direction of "N" named roverOne and roverTwo')
console.log('- roverOne starts at 0,0 and roverTwo starts at 7,7.')
console.log('%c Iteration 2 | Turning the Rover', 'font-size: 1.4em')
console.log('- there are two functions to turn your rover left and right')
console.log('- try this command -- turnLeft(roverOne)')
console.log('- the two function calls are turnLeft() and turnRight()')
console.log('%c Iteration 3 | Moving the Rover', 'font-size: 1.4em')
console.log('- there are two functions to move your rover backwards and forwards')
console.log('- the two function calls are moveForward() and moveBackward')
console.log('%c Iteration 4 | Commands', 'font-size: 1.4em')
console.log('- commands(--put quotes around the-- f) ')
console.log('%c Iteration 5 | Tracking', 'font-size: 1.4em')
console.log('- your rover has a property of travelLog')
console.log('- try this command -- roverOne.travelLog')

// Rover Objects
let roverOne= {
    name: "Rover1",
    direction: "N",
    coorX: 0,
    coorY: 0,
    travelLog: [],
}

let roverTwo = {
    name: "Rover2",
    direction: "N",
    coorX: 7,
    coorY: 7,
    travelLog: [],
}

// The grid where the rovers will move - includes obstacles
const grid = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, "X", null, null, null, null, null],
    [null, null, null, null, null, null, null, "X", null, null],
    [null, null, "X", null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, "X", null],
    [null, null, "X", null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, "X", null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
];

console.log(grid);

function turnLeft(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "N";
            break;
    }
    console.log(`Current heading of ${rover.name}: ${rover.direction}`);
}

function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "N";
            break;
    }
    console.log(`Current heading of ${rover.name}: ${rover.direction}`);
}

function moveForward(rover) {
    for (let i = 0; i < grid.length; i++) {

        const row = rover.coorX;
        const column = rover.coorY;
        const stone = grid[row][column];

        if (stone === "X") {
            console.log(`${rover.name} as encountered a rock (${row},${column}) we cannot continue...`);
            break;
        } else {
            if ((roverOne.coorX === roverTwo.coorX) && (roverOne.coorY === roverTwo.coorY)) {
                console.log(`Look where your going! You have a friend rover, possible rover collison in coordinates! [${rover.coorX},${rover.coorY}])`);
            } else {
                if (rover.coorX >= 0 && rover.coorY >= 0) {
                    if (rover.coorX <= 10 && rover.coorY <= 10) {
                        switch (rover.direction) {
                            case "N":
                                rover.coorY--;
                                break;
                            case "S":
                                rover.coorY++;
                                break;
                            case "W":
                                rover.coorX--;
                                break;
                            case "E":
                                rover.coorX++;
                                break;
                        }
                    } else {
                        console.log(`${rover.name} turn around you are near the grid limits!`);
                    }
                } else {
                    console.log(`${rover.name} you are in the grid limits, turn around!`);
                }
                console.log(`${rover.name} you are moving towards - ${rover.direction}`);
                console.log(rover.coorX, rover.coorY);
                rover.travelLog.push([rover.coorX, rover.coorY]);
                break;
            }
        }
    }
}

function moveBackward(rover) { 
    for (let i = 0; i < grid.length; i++) {
        var row = rover.coorX;
        var column = rover.coorY;
        var stone = grid[row][column];
        if (stone === "X") {
            console.log(`${rover.name} hemos topado con una roca en las coordenadas (${row},${column}) y no podemos proseguir...`);
            break;
        } else {
            if ((roverOne.coorX === roverTwo.coorX) && (roverOne.coorY === roverTwo.coorY)) {
                console.log(`Hey! mira por donde vas, no estas trabajado solo! (Posible colisión de rover's en coordenadas [${rover.coorX},${rover.coorY}])`);
            } else {
                if (rover.coorX >= 0 && rover.coorY >= 0) {
                    if (rover.coorX <= 10 && rover.coorY <= 10) {
                        switch (rover.direction) {
                            case "N":
                                rover.coorY++;
                                break;
                            case "S":
                                rover.coorY--;
                                break;
                            case "W":
                                rover.coorX++;
                                break;
                            case "E":
                                rover.coorX--;
                                break;
                        }
                    } else {
                        console.log(`${rover.name} You are in the grid limits, turn around!`);
                    }
                } else {
                    console.log(`${rover.name} You are in the grid limits, turn around!`);
                }
                console.log(`${rover.name} go back you are still going - ${rover.direction}`);
                console.log(rover.coorX, rover.coorY);
                rover.travelLog.push([rover.coorX, rover.coorY]);
                break;
            }
        }
    }
}

function commands(shortcut) {
    for (let i = 0; i < shortcut.length; i++) {

        if (shortcut[i] === "f") {
            moveForward(roverOne);
            moveForward(roverTwo);
        } else if (shortcut[i] === "r") {
            turnRight(roverOne);
            turnRight(roverTwo);
        } else if (shortcut[i] === "l") {
            turnLeft(roverOne);
            turnLeft(roverTwo);
        } else if (shortcut[i] === "b") {
            moveBackward(roverOne);
            moveBackward(roverTwo);
        } else {
            console.log(`${rover.name} 
            unrecognized command .... enter the course only f -> (forward), r -> (right), l -> (left) or b -> (back) the command ${shortcut[i]} does not exist`);
            break;
        }
    }
    console.log([roverOne.travelLog, roverTwo.travelLog]);
}
