class User {
    constructor(name, xp, log) {
        this.name = name;
        this.xp = xp;
        this.log = log;
    }
    newSolvedChallenge(challenge) {
        this.xp += obj[challenge.level];
        this.log.push(challenge.id);
    }

}
class challenge {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }
}
let obj = {
    "VE": 5,
    "EA": 10,
    "ME": 20,
    "HA": 40,
    "VH": 80,
    "EX": 120
}
var user1 = new User("Fatima", 0, []);
console.log(user1)
let ch1 = new challenge(1, "ME")
user1.newSolvedChallenge(ch1);

let ch2 = new challenge(2, "ME")
user1.newSolvedChallenge(ch2);

let ch3 = new challenge(3, "EA")
user1.newSolvedChallenge(ch3);

console.log(user1.xp);
console.log(user1.log);