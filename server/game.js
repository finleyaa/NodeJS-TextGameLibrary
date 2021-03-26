const CONSTANTS = require("./constants");

const CMD_FUNCTIONS = {"move": Game.move};

class Game {
    constructor(startLocation) {
        this.startLocation = startLocation;
        console.log(CONSTANTS.COMMANDS);
    }

    parseCommand = (cmd) => {
        cmd = cmd.toLowerCase();
        opcode = cmd.split(" ")[0];

        let intent;
        for (let x = 0; x < Object.keys(CONSTANTS.COMMANDS).length; x++) {
            let keywords = Object.values(CONSTANTS.COMMANDS)[x];
            let command = Object.keys(CONSTANTS.COMMANDS)[x];
            if (keywords.contains(opcode)) {
                intent = command;
                break;
            }
        };

        if (!intent) { // No intent found
            return false;
        }
    }

    move = (operand) => {
        console.log("Moving player");
    }
}

module.exports = Game;