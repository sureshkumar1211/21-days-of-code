// PSEUDOCODE

// Write a function constructor called BasketBall. 
// which accepts an array for scores and a string for team respectively
// write a method called calculateAvg, which helps to calculate avg score of the team and store that object
// write a static method called compareAvgAndPrintWinner, which helps to find who has high avg than others print them as winner 
// keep in mind there might be draw

//ES5
// var jhon, mike, mary;

// function BasketBall(scores, teamName)
// {
//     this.scores = scores;
//     this.name = teamName;
// };

// BasketBall.prototype.calculateAvg = function ()
// {
//     this.avg = this.scores.reduce(function (accumulator, currentValue)
//     {
//         return accumulator + currentValue;
//     }, 0) / this.scores.length;
// };

// BasketBall.compareAvgAndPrintWinner = function (team1, team2, team3)
// {
//     switch (true)
//     {
//         case team1.avg > team2.avg && team1.avg > team3.avg:
//             console.log("Congratulations " + team1.name + " you won the game");
//             break;
//         case team2.avg > team1.avg && team2.avg > team3.avg:
//             console.log("Congratulations " + team2.name + " you won the game");
//             break;
//         case team3.avg > team1.avg && team3.avg > team2.avg:
//             console.log("Congratulations " + team3.name + " you won the game");
//             break;
//         default:
//             console.log('scores are level between either two teams or all the three');
//     }
// };

//ES6
let jhon, mike, mary;

class BasketBall
{
    constructor(scores, teamName)
    {
        this.scores = scores, this.name = teamName;
    };
    calculateAvg()
    {
        this.avg = this.scores.reduce((accumulator, currentValue) => accumulator + currentValue) / this.scores.length;
    };

    static compareAvgAndPrintWinner(team1, team2, team3)
    {
        switch (true)
        {
            case team1.avg > team2.avg && team1.avg > team3.avg:
                console.log(`Congratulations ${team1.name} you won the game`);
                break;
            case team2.avg > team1.avg && team2.avg > team3.avg:
                console.log(`Congratulations ${team2.name} you won the game`);
                break;
            case team3.avg > team1.avg && team3.avg > team2.avg:
                console.log(`Congratulations ${team3.name} you won the game`);
                break;
            default:
                console.log('scores are level');
        }
    };
};

jhon = new BasketBall([89, 120, 109], "jhon"), mike = new BasketBall([116, 94, 123], "mike"), mary = new BasketBall([97, 134, 105], "mary");
jhon.calculateAvg(), mike.calculateAvg(), mary.calculateAvg();
BasketBall.compareAvgAndPrintWinner(jhon, mike, mary);