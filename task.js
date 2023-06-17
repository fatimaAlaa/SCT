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
user1.newSolvedChallenge({
    id: 1,
    level: 'VE'
});
let o = {
    id: 2,
    level: 'ME'
};
let f = {
    id: 3,
    level: 'ME'
};
user1.newSolvedChallenge(o);
user1.newSolvedChallenge(f);
console.log(user1.xp);
console.log(user1.log);