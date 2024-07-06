var English = prompt("Enter English Marks");
var Chemistry = prompt("Enter Chemistry Marks");
var Mathematics = prompt("Enter Mathematics Marks");

function parcentage(num1, num2, num3,  ) {
    var x = num1 + num2 + num3 ;
    var z = x / 300 * 100  // parcentage formula
    return z;

}

    var Total = parcentage(English, Chemistry, Mathematics,);
    document.write("Total parcentage is : " + Total + "%" )



