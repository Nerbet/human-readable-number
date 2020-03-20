module.exports = function toReadable (number) {
    var digits = [];
    var a;
    var name;
    var name1;
    var name2;
    var name3;

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
    if (digits.length == 2)
    {
        if(digits[1] == 1)
        {
            if(digits[0] == 0)
        {
        name = "ten";
        return name;
        }
        if(digits[0] == 1)
        {
        name = "eleven";
        return name;
        }
        if(digits[0] == 2)
        {
        name = "twelve";
        return name;
        }
        if(digits[0] == 3)
        {
        name = "thirteen";
        return name;
        }
        if(digits[0] == 4)
        {
        name = "fourteen";
        return name;
        }
        if(digits[0] == 5)
        {
        name = "fifteen";
        return name;
        }
        if(digits[0] == 6)
        {
        name = "sixteen";
        return name;
        }
        if(digits[0] == 7)
        {
        name = "seventeen";
        return name;
        }
        if(digits[0] == 8)
        {
        name = "eighteen";
        return name;
        }
        if(digits[0] == 9)
        {
        name = "nineteen";
        return name;
        }
        }

        if(digits[1] == 2)
        {
            name1 = "twenty";
            if(digits[0] == 0)
        {
        return name1;
        }
        if(digits[0] == 1)
        {
        name2 = " one";
        name = name1 + name2;
        return name;
        }
        if(digits[0] == 2)
        {
        name2 = " two";
        name = name1 + name2;
        return name;
        }
        if(digits[0] == 3)
        {
        name2 = " three";
        name = name1 + name2;
        return name;
        }
        if(digits[0] == 4)
        {
        name2 = " four";
        name = name1 + name2;
        return name;
        }
        if(digits[0] == 5)
        {
        name2 = " five";
        name = name1 + name2;
        return name;
        }
        if(digits[0] == 6)
        {
        name2 = " six";
        name = name1 + name2;
        return name;
        }
        if(digits[0] == 7)
        {
        name2 = " seven";
        name = name1 + name2;
        return name;
        }
        if(digits[0] == 8)
        {
        name2 = " eight";
        name = name1 + name2;
        return name;
        }
        if(digits[0] == 9)
        {
        name2 = " nine";
        name = name1 + name2;
        return name;
        }

        }
    }
    if (digits.length == 3)
    {

    }
}
