// Written by Blake Bedford-Palmer
// 28 November 2015
// blake@blake.org.nz
// github.com/blakenz/ChristmasMessage

var myDate = new Date();
var d = myDate.getDate();
var m = myDate.getMonth();

//The date of christmas, Month is 11 because javascript dates are 0-11
var xmasDate = 25;
var xmasMonth = 11;

if (d == xmasDate && m == xmasMonth) {

    for (i = 0; i < 3; i++) {
        //says ho 3 times if it's christmas
        alert("Ho");
    }
    alert("Merry Christmas");
} 
else {
    console.log("It's not christmas")
}
