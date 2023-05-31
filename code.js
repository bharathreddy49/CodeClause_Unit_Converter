function convert() {
    var inputValue = document.getElementById("inputValue").value;
    var unitFrom = document.getElementById("unitFrom").value;
    var unitTo = document.getElementById("unitTo").value;
    var result = document.getElementById("result");

    var convertedValue;
    switch (unitFrom) {
        case "cm":
            convertedValue = convertFromCm(inputValue, unitTo);
            break;
        case "m":
            convertedValue = convertFromM(inputValue, unitTo);
            break;
        case "km":
            convertedValue = convertFromKM(inputValue, unitTo);
            break;
        case "inch":
            convertedValue = convertFromInch(inputValue, unitTo);
            break;
        case "ft":
            convertedValue = convertFromFt(inputValue, unitTo);
            break;
        case "yd":
            convertedValue = convertFromYd(inputValue, unitTo);
            break;
        case "c":
            convertedValue = convertFromC(inputValue, unitTo);
            break;
        case "f":
            convertedValue = convertFromF(inputValue, unitTo);
            break;
        case "k":
            convertedValue = convertFromK(inputValue, unitTo);
            break;            
        default:
            convertedValue = "Invalid conversion";
    }
    result.innerHTML = inputValue + " " + unitFrom + " = " + convertedValue + " " + unitTo;
}

function convertFromCm(value, unitTo) {
    switch (unitTo) {
        case "cm":
            return value;
        case "m":
            return value / 100;
        case "km":
            return value / 100000;
        case "inch":
            return value / 2.54;
        case "ft":
            return value / 30.48;
        case "yd":
            return value / 91.44;
        default:
            return "Invalid conversion";
    }
}

function convertFromM(value, unitTo) {
    switch (unitTo) {
        case "cm":
            return value*100;
        case "m":
            return value;
        case "km":
            return value*0.001;
        case "inch":
            return value*39.3700787;
        case "ft":
            return value*3.2808399;
        case "yd":
            return value*1.0936133;
        default:
            return "Invalid conversion";
    }
}

function convertFromKM(value, unitTo) {
    switch (unitTo) {
        case "cm":
            return value*100000;
        case "m":
            return value*1000;
        case "km":
            return value;
        case "inch":
            return value*39370.0787;
        case "ft":
            return value*3280.8399;
        case "yd":
            return value*1093.6133;
        default:
            return "Invalid conversion";
    }
  
}

function convertFromInch(value, unitTo) {
    switch (unitTo) {
        case "cm":
            return value*2.54;
        case "m":
            return value*0.0254;
        case "km":
            return value*0.0000254;
        case "inch":
            return value;
        case "ft":
            return value*0.083333333;
        case "yd":
            return value*0.027777777;
        default:
            return "Invalid conversion";
    }

}

function convertFromFt(value, unitTo) {
    switch (unitTo) {
        case "cm":
            return value*30.48;
        case "m":
            return value*0.3048;
        case "km":
            return value*0.0003048;
        case "inch":
            return value*12;
        case "ft":
            return value;
        case "yd":
            return value*0.33333333333;
        default:
            return "Invalid conversion";
    }
}

function convertFromYd(value, unitTo) {
    switch (unitTo) {
        case "cm":
            return value*91.44;
        case "m":
            return value*0.9144;
        case "km":
            return value*0.0009144;
        case "inch":
            return value*36;
        case "ft":
            return value*3;
        case "yd":
            return value;
        default:
            return "Invalid conversion";
    }
}

function convertFromC(value, unitTo){
    switch (unitTo) {
        case "c":
            return value;
        case "f":
            return 32+(value*1.8);
        case "k":
            return 273.15+(value*1);
        default:
            return "Invalid conversion";
    }
}
function convertFromF(value, unitTo){
    switch (unitTo) {
        case "c":
            return (value-32)*(5/9)
        case "f":
            return value;
        case "k":
            return (value-32)*(5/9)+273.15;
        default:
            return "Invalid conversion";
    }
}
function convertFromk(value, unitTo){
    switch (unitTo) {
        case "c":
            return value-273.15;
        case "f":
            return (value-273.15)*(1.8)+32;
        case "k":
            return value;
        default:
            return "Invalid conversion";
    }
}

