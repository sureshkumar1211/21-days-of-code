//PSEUDOCODE
// 1. create function constructor called BMI
// 2. create instances as many as you want by using class BMI
// 3. create calculate bmi method by using prototype property which helps to inherit method all the instances
// 4. write a method called compateBMI which accepts two persons objects the persons that you wants to compare 
// 5. create instance by using new keyword and put three args(name,mass,height)
// 6. invoke calculate bmi method those instances
// 7. invoke compare method and pass the persons object that you wants to compare

//ES5
// var jhon, mark;

// function BMI(name, mass, height)
// {
//     var splitName = name.slice(1, name.length);
//     this.name = name[0].toUpperCase() + splitName;
//     this.mass = mass;
//     this.height = height;
// };

// BMI.prototype.calculateBMI = function ()
// {
//     this.bmi = this.mass / (this.height ** 2);
// };

// BMI.compareBMI = function (person1, person2)
// {
//     switch (true)
//     {
//         case person1.bmi < person2.bmi:
//             console.log(person2.name + ' BMI is higher than the ' + person1.name);
//             break;
//         case person1.bmi > person2.bmi:
//             console.log(person1.name + ' BMI is higher than the ' + person2.name);
//             break;
//         default:
//             console.log('both of them BMI is equal');
//     }
// };

//ES6
let jhon, mark;

class BMI
{
    constructor(name, mass, height)
    {
        let splitName = name.slice(1, name.length);
        this.name = name[0].toUpperCase() + splitName;
        this.mass = mass;
        this.height = height;
    };

    calculateBMI()
    {
        this.bmi = this.mass / (this.height ** 2);
    };

    static compareBMI(person1, person2)
    {
        switch (true)
        {
            case person1.bmi < person2.bmi:
                console.log(person2.name + ' BMI is higher than the ' + person1.name);
                break;
            case person1.bmi > person2.bmi:
                console.log(person1.name + ' BMI is higher than the ' + person2.name);
                break;
            default:
                console.log('both of them BMI is equal');
        }
    };
}

jhon = new BMI("jhon", 60, 160);
mark = new BMI("mark", 70, 160);

jhon.calculateBMI();
mark.calculateBMI();

BMI.compareBMI(jhon, mark);