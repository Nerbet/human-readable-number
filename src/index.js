module.exports = function toReadable (number) {
    var digits = [];
    var a;
    var name;

     while(number != 0)
    {
        a = number%10;
        number=(number-a)/10;
        digits.push(a);
    }
    if (digits.length == 1)
    {
        if(digits[0] == 0)
        {
        name = "zero";
        return name;
        }
        if(digits[0] == 1)
        {
        name = "one";
        return name;
        }
        if(digits[0] == 2)
        {
        name = "two";
        return name;
        }
        if(digits[0] == 3)
        {
        name = "three";
        return name;
        }
        if(digits[0] == 4)
        {
        name = "four";
        return name;
        }
        if(digits[0] == 5)
        {
        name = "five";
        return name;
        }
        if(digits[0] == 6)
        {
        name = "six";
        return name;
        }
        if(digits[0] == 7)
        {
        name = "seven";
        return name;
        }
        if(digits[0] == 8)
        {
        name = "eight";
        return name;
        }
        if(digits[0] == 9)
        {
        name = "nine";
        return name;
        }
    } 
}
