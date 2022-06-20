/* <<<<<<<<<<<<<<----------------------------------VARIABLES---------------------------------->>>>>>>>>>>>>>> */
var num //can be used through out whole program
var unassigned //as name suggests it is unassigned
console.log("value of num before: ", num);
var num2 = 89; //num2 is declaration and 89 is initialization '=' is assinment operator
num = 15;
num = num2;
let newnum = 25; //can be used within scope where it is declared
console.log("value of newnum before: ", newnum);
newnum = "sstring";
const pi = 3.14; //will remain costant throuout proram

console.log("value of num after: ", num);
console.log("value of num2: ", num2);
console.log("value of newnum after: ", newnum);
console.log("value of pi: ", pi,"\n");




/* <<<<<<<<<<<<<<----------------------------------OPERATIONS---------------------------------->>>>>>>>>>>>>>> */
var n1 = 5 + 7;
num += 2; //addition
num2 = num2 - num; //substraction   //compound subs
var mul = 3 * 14; //multiplication
mul--; //decrement
var div = 33 / 3; //division
div++; //incremet

console.log("value of n1: ", n1);
console.log("value of mul: ", mul);
console.log("value of div: ", div);
console.log("value of num after: ", num);
console.log("value of num2 after: ", num2);
//variable name and function anmes are case sensitive in Javascript






/* <<<<<<<<<<<<<<----------------------------------DECIMALS---------------------------------->>>>>>>>>>>>>>> */
var decimal = 0.69 * 1.45;
console.log("value of decimal: ", decimal);
var dec2 = 4.32 / 1.89;
console.log("value of dec2: ", dec2);
var rem = 19 % 3;
console.log("value of remainder: ", rem,"\n");




/* <<<<<<<<<<<<<<----------------------------------STRING---------------------------------->>>>>>>>>>>>>>> */
var car = "Waganar";
console.log("car: ",car);
console.log("i am double quoted \"STRING\"");
var concat = "first" + "second";
newnum = newnum + "is not a number";
console.log("value of newnum after: ", newnum);
console.log("concat: ", concat);
console.log("length of newnum:",newnum.length);
console.log(concat[0]);           //first letter of string
console.log(concat[concat.length-1]);         //last letter
//to find nth last letter use length-n 
console.log(concat[5],"\n");
//string construction can also be done using variable + variable + ............
// "+=" operator also work in strings
//individual string literals cannot be changed (immutability)

/*
\' single quote
\" double quote
\\ backslash
\n new line
\r carriage return
\t tab
\b backslash
\f from feed
*/



/* <<<<<<<<<<<<<<----------------------------------ARRAYS---------------------------------->>>>>>>>>>>>>>> */
var ar1 = [];
var ar2 = [23, 19.3456, "any string", true]; //1D array with any datatype
var ar3 = [[23, 19.3456, "any string", true], [56, 34.78], [true, "WTH", 11010]]; //multidimentional array with any datatype (here 2D array)
console.log("array val:", ar2[3]);
console.log("array val:", ar2[2]);
console.log("array val:", ar3[1]);
ar2[1] = ["why", 79];
console.log("array val:", ar2[1]); //access array element through indexes
console.log("array val:", ar2[1][0]); //accessing multi-dimentional array
ar2.push([true, 10, "string"]);
console.log("array val:", ar2[ar2.length-1]);
ar2.pop(); //removes last element from array
console.log("array val:", ar2[ar2.length-1]);
ar2.shift(); //remove first element of array
console.log(ar2);
ar2.unshift(23); //insert at 0 position
console.log(ar2);
//individual elements of arrays can be modified
console.log("\n");







/* <<<<<<<<<<<<<<----------------------------------FUNCTIONS---------------------------------->>>>>>>>>>>>>>> */
var spc = 10;         //variables outside functions are global scope
var df = 18;
function plus15(a){
    var lcl = 5;       //local scope defined witin function cannot be used outside function
    var df = 45;
    df+=5;
    if(typeof spc != "undefined")
        {console.log(a+spc+lcl);}
    console.log(df); // prints value of local variable
} //function
plus15(45);
console.log(df);

function rtn(a,b)
{return a+b;} //function returns value
var ans = rtn(13,23);
console.log(ans);

console.log("\n");





/* <<<<<<<<<<<<<<----------------------------------CONDITIONAL STATEMENTS---------------------------------->>>>>>>>>>>>>>> */
function ckc(a){  //if-else used to check conditions in code
    if(a%2)
        return false;
    else
        return true
        // if-else if-else if-else if-else [if-else ladder]
}       ///even-odd check
console.log(ckc(12));
//if local and global variable as same name then local variable as precedence.

// '==' is used for equality check                                            3 == '3'  performs type conversion
// '===' strict equality--> value as well as datatype should be same          3 != '3'  doesn't perform type conversion
// '!=' inequality operator  [performs type conversion]
// '!==' strict inequality  [doesn't perform type conversion]
/* > greater than
   >= greater than equal to
   < less than
   <= less than equal to     */
/* && loical and
   || loical or  */

function swt(a)  //switch case example 
{
    var ck = a%2;
    switch(ck)
    {
        case 1:
            return "odd";
            break;
        case 0:
            return "even";
            break;
        default:                        //when non of te above condition is satisfied then control comes here
            return "not valid input";
            break;
    }
} //if break is not used then a particular case excecutes everything below it
console.log(swt("Australia"));

function ckc2(a){  
   return a%2;       //boolean return
}       ///even-odd check
console.log(ckc2(15));
// return undefined; is used to exit function in between [returns null value]
console.log("\n");








/* <<<<<<<<<<<<<<----------------------------------OBJECTS---------------------------------->>>>>>>>>>>>>>> */
var obj = {
    "name" : "Kanishk",
    "age" : 19,
    "occupation" : "student",
    "address" : "GNR",
    "favChar" : "Luffy",
    12 : "just example",
    "ar" : [1,2,3,4],
    "nest" : {
        "ob1" : 1,
        "ob2" : 2,
        "ob3" : 3
    }
};
console.log(obj.name);        //dot notation
console.log(obj["favChar"]);  //bracket notation
var tst = "age";
console.log(obj[tst]);        //call trhrough variable
//object properties can be updated using these notation

obj.game = "sekiro";          //add new property to object
console.log(obj["game"]);

// 'delete obj.occupation;'    to delete property from object
//objects are also use as key-value search pairs

console.log(obj.hasOwnProperty("ar"));  //checks if function has the property [boolean type in built function]

//bracket notations are commonly used when property name has space in it
//object properties can be another objects too.
console.log(obj.nest.ob1);  //caling nested object properties
console.log("\n");










/* <<<<<<<<<<<<<<----------------------------------LOOPS---------------------------------->>>>>>>>>>>>>>> */
var mar = [1,2,3,4,5];

var i=0;
while(i < 5)
{console.log(mar[i]);i++;}
// it can be even i+=num i*=num or even i-- i-=num i/=num in (backward count) 
for(var j = 0 ; j < 5 ; j++)
{console.log(mar[j]);}
// if-else nesting and loop nesting is also possible
// in do-while loop runs one time and then checks condition [runs at least on time]

/* array --> []
   object --> {} */
   console.log("\n");









/* <<<<<<<<<<<<<<----------------------------------IN-BUILT FUNCTIONS---------------------------------->>>>>>>>>>>>>>> */
console.log(Math.random());    //generates random fraction >=0 <1  [but not 1]
console.log(Math.floor(Math.random()*100)); //generates random wole number >=0 <100  [but not 100]

var min = 5;
var max = 50;
console.log(Math.floor(Math.random()*(max-min+1))+min);  //generates random wole number >=5 <50  [but not 50] [in certain range]

console.log(parseInt("12"));          //convert string to int
console.log(parseInt("Twelve"));      // returns NaN
console.log(parseInt("101101101", 2));   //parseInt with base of number system

console.log(35%2 ? "odd" : "even");    //conditional (ternary) operator  [one line if-else]
console.log(-90>0 ? "positive" : -90<0 ? "negative" : "even");   //multiple ternary operators
console.log("\n");










/* <<<<<<<<<<<<<<----------------------------------VAR & LET & CONST---------------------------------->>>>>>>>>>>>>>> */
var dum = 12;
var dum = 14; //redeclaration
dum = 16; //assinment
//these all are valid for var
let dum2 = 12;
dum2 = 16; //assinment
//these all are valid for let [redeclaration is not valid]

const e = 2.718; //read-only variable
const arr = [1,2,3];
arr[0]=3;
arr[1]=1;
arr[2]=2;
//this is valid for const [mutation in const array]
//arr = [3,1,2] is not valid for const 

Object.freeze(obj); //object properties cannot be mutated


console.log("\n");