var x;

function test_x () {
    console.log("current value of x is: " + x)
    console.log("doing loosely compare using ==")
    if (x == undefined) {
        console.log("x is undefined");
    } else {
        console.log("x is defined")
    }
    if (x == null) {
        console.log("x is null");
    } else {
        console.log("x is not null")
    }
    console.log("doing strictly compare using ===")
    if (x === undefined) {
        console.log("x is undefined");
    } else {
        console.log("x is defined")
    }
    if (x === null) {
        console.log("x is null");
    } else {
        console.log("x is not null")
    }
}

test_x();

x = null;
test_x();

x = 5;
test_x();