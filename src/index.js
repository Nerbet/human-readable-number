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

        if(digits[1] == 3)
        {
            name1 = "thirty";
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

        if(digits[1] == 4)
        {
            name1 = "forty";
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

        if(digits[1] == 5)
        {
            name1 = "fifty";
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

        if(digits[1] == 6)
        {
            name1 = "sixty";
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

        if(digits[1] == 7)
        {
            name1 = "seventy";
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

        if(digits[1] == 8)
        {
            name1 = "eighty";
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

        if(digits[1] == 9)
        {
            name1 = "ninety";
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
        if(digits[2] == 1)
        {
            name3 = "one hundred";
            if(digits[1] == 0)
            {
                if(digits[0] == 0)
                {
                    return name3;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name1;
                return name;
                }
                 if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name1;
        return name;
        }
        if(digits[0] == 5)
        {
        name1 = " five";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 6)
        {
        name1 = " six";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 7)
        {
        name1 = " seven";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 8)
        {
        name1 = " eight";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 9)
        {
        name1 = " nine";
        name = name3 + name1;
        return name;
        }
            }

            if(digits[1] == 1)
            {
                if(digits[0] == 0)
                {
                name2 = " ten";
                name = name3 +name2;
                return name;
                }

                if(digits[0] == 1)
                {
                name2 = " eleven";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 2)
                {
                name2 = " twelve";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 3)
                {
                name2 = " thirteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 4)
                {
                name2 = " fourteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 5)
                {
                name2 = " fifteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 6)
                {
                name2 = " sixteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 7)
                {
                name2 = " seventeen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 8)
                {
                name2 = " eighteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 9)
                {
                name2 = " nineteen";
                name = name3 +name2;
                return name;
                }
            }

            if(digits[1] == 2)
            {
                name2 = " twenty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 3)
            {
                name2 = " thirty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 4)
            {
                name2 = " forty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 5)
            {
                name2 = " fifty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 6)
            {
                name2 = " sixty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 7)
            {
                name2 = " seventy";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 8)
            {
                name2 = " eighty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 9)
            {
                name2 = " ninety";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }
        }

        if(digits[2] == 2)
        {
            name3 = "two hundred";
            if(digits[1] == 0)
            {
                if(digits[0] == 0)
                {
                    return name3;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name1;
                return name;
                }
                 if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name1;
        return name;
        }
        if(digits[0] == 5)
        {
        name1 = " five";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 6)
        {
        name1 = " six";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 7)
        {
        name1 = " seven";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 8)
        {
        name1 = " eight";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 9)
        {
        name1 = " nine";
        name = name3 + name1;
        return name;
        }
            }

            if(digits[1] == 1)
            {
                if(digits[0] == 0)
                {
                name2 = " ten";
                name = name3 +name2;
                return name;
                }

                if(digits[0] == 1)
                {
                name2 = " eleven";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 2)
                {
                name2 = " twelve";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 3)
                {
                name2 = " thirteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 4)
                {
                name2 = " fourteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 5)
                {
                name2 = " fifteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 6)
                {
                name2 = " sixteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 7)
                {
                name2 = " seventeen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 8)
                {
                name2 = " eighteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 9)
                {
                name2 = " nineteen";
                name = name3 +name2;
                return name;
                }
            }

            if(digits[1] == 2)
            {
                name2 = " twenty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 3)
            {
                name2 = " thirty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 4)
            {
                name2 = " forty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 5)
            {
                name2 = " fifty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 6)
            {
                name2 = " sixty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 7)
            {
                name2 = " seventy";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 8)
            {
                name2 = " eighty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 9)
            {
                name2 = " ninety";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }
        }

        if(digits[2] == 3)
        {
            name3 = "three hundred";
            if(digits[1] == 0)
            {
                if(digits[0] == 0)
                {
                    return name3;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name1;
                return name;
                }
                 if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name1;
        return name;
        }
        if(digits[0] == 5)
        {
        name1 = " five";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 6)
        {
        name1 = " six";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 7)
        {
        name1 = " seven";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 8)
        {
        name1 = " eight";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 9)
        {
        name1 = " nine";
        name = name3 + name1;
        return name;
        }
            }

            if(digits[1] == 1)
            {
                if(digits[0] == 0)
                {
                name2 = " ten";
                name = name3 +name2;
                return name;
                }

                if(digits[0] == 1)
                {
                name2 = " eleven";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 2)
                {
                name2 = " twelve";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 3)
                {
                name2 = " thirteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 4)
                {
                name2 = " fourteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 5)
                {
                name2 = " fifteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 6)
                {
                name2 = " sixteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 7)
                {
                name2 = " seventeen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 8)
                {
                name2 = " eighteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 9)
                {
                name2 = " nineteen";
                name = name3 +name2;
                return name;
                }
            }

            if(digits[1] == 2)
            {
                name2 = " twenty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 3)
            {
                name2 = " thirty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 4)
            {
                name2 = " forty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 5)
            {
                name2 = " fifty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 6)
            {
                name2 = " sixty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 7)
            {
                name2 = " seventy";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 8)
            {
                name2 = " eighty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 9)
            {
                name2 = " ninety";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }
        }

        if(digits[2] == 4)
        {
            name3 = "four hundred";
            if(digits[1] == 0)
            {
                if(digits[0] == 0)
                {
                    return name3;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name1;
                return name;
                }
                 if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name1;
        return name;
        }
        if(digits[0] == 5)
        {
        name1 = " five";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 6)
        {
        name1 = " six";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 7)
        {
        name1 = " seven";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 8)
        {
        name1 = " eight";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 9)
        {
        name1 = " nine";
        name = name3 + name1;
        return name;
        }
            }

            if(digits[1] == 1)
            {
                if(digits[0] == 0)
                {
                name2 = " ten";
                name = name3 +name2;
                return name;
                }

                if(digits[0] == 1)
                {
                name2 = " eleven";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 2)
                {
                name2 = " twelve";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 3)
                {
                name2 = " thirteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 4)
                {
                name2 = " fourteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 5)
                {
                name2 = " fifteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 6)
                {
                name2 = " sixteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 7)
                {
                name2 = " seventeen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 8)
                {
                name2 = " eighteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 9)
                {
                name2 = " nineteen";
                name = name3 +name2;
                return name;
                }
            }

            if(digits[1] == 2)
            {
                name2 = " twenty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 3)
            {
                name2 = " thirty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 4)
            {
                name2 = " forty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 5)
            {
                name2 = " fifty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 6)
            {
                name2 = " sixty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 7)
            {
                name2 = " seventy";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 8)
            {
                name2 = " eighty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 9)
            {
                name2 = " ninety";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }
        }

        if(digits[2] == 5)
        {
            name3 = "five hundred";
            if(digits[1] == 0)
            {
                if(digits[0] == 0)
                {
                    return name3;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name1;
                return name;
                }
                 if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name1;
        return name;
        }
        if(digits[0] == 5)
        {
        name1 = " five";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 6)
        {
        name1 = " six";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 7)
        {
        name1 = " seven";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 8)
        {
        name1 = " eight";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 9)
        {
        name1 = " nine";
        name = name3 + name1;
        return name;
        }
            }

            if(digits[1] == 1)
            {
                if(digits[0] == 0)
                {
                name2 = " ten";
                name = name3 +name2;
                return name;
                }

                if(digits[0] == 1)
                {
                name2 = " eleven";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 2)
                {
                name2 = " twelve";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 3)
                {
                name2 = " thirteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 4)
                {
                name2 = " fourteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 5)
                {
                name2 = " fifteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 6)
                {
                name2 = " sixteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 7)
                {
                name2 = " seventeen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 8)
                {
                name2 = " eighteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 9)
                {
                name2 = " nineteen";
                name = name3 +name2;
                return name;
                }
            }

            if(digits[1] == 2)
            {
                name2 = " twenty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 3)
            {
                name2 = " thirty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 4)
            {
                name2 = " forty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 5)
            {
                name2 = " fifty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 6)
            {
                name2 = " sixty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 7)
            {
                name2 = " seventy";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 8)
            {
                name2 = " eighty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 9)
            {
                name2 = " ninety";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }
        }

        if(digits[2] == 6)
        {
            name3 = "six hundred";
            if(digits[1] == 0)
            {
                if(digits[0] == 0)
                {
                    return name3;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name1;
                return name;
                }
                 if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name1;
        return name;
        }
        if(digits[0] == 5)
        {
        name1 = " five";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 6)
        {
        name1 = " six";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 7)
        {
        name1 = " seven";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 8)
        {
        name1 = " eight";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 9)
        {
        name1 = " nine";
        name = name3 + name1;
        return name;
        }
            }

            if(digits[1] == 1)
            {
                if(digits[0] == 0)
                {
                name2 = " ten";
                name = name3 +name2;
                return name;
                }

                if(digits[0] == 1)
                {
                name2 = " eleven";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 2)
                {
                name2 = " twelve";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 3)
                {
                name2 = " thirteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 4)
                {
                name2 = " fourteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 5)
                {
                name2 = " fifteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 6)
                {
                name2 = " sixteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 7)
                {
                name2 = " seventeen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 8)
                {
                name2 = " eighteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 9)
                {
                name2 = " nineteen";
                name = name3 +name2;
                return name;
                }
            }

            if(digits[1] == 2)
            {
                name2 = " twenty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 3)
            {
                name2 = " thirty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 4)
            {
                name2 = " forty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 5)
            {
                name2 = " fifty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 6)
            {
                name2 = " sixty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 7)
            {
                name2 = " seventy";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 8)
            {
                name2 = " eighty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 9)
            {
                name2 = " ninety";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }
        }

        if(digits[2] == 7)
        {
            name3 = "seven hundred";
            if(digits[1] == 0)
            {
                if(digits[0] == 0)
                {
                    return name3;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name1;
                return name;
                }
                 if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name1;
        return name;
        }
        if(digits[0] == 5)
        {
        name1 = " five";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 6)
        {
        name1 = " six";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 7)
        {
        name1 = " seven";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 8)
        {
        name1 = " eight";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 9)
        {
        name1 = " nine";
        name = name3 + name1;
        return name;
        }
            }

            if(digits[1] == 1)
            {
                if(digits[0] == 0)
                {
                name2 = " ten";
                name = name3 +name2;
                return name;
                }

                if(digits[0] == 1)
                {
                name2 = " eleven";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 2)
                {
                name2 = " twelve";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 3)
                {
                name2 = " thirteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 4)
                {
                name2 = " fourteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 5)
                {
                name2 = " fifteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 6)
                {
                name2 = " sixteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 7)
                {
                name2 = " seventeen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 8)
                {
                name2 = " eighteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 9)
                {
                name2 = " nineteen";
                name = name3 +name2;
                return name;
                }
            }

            if(digits[1] == 2)
            {
                name2 = " twenty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 3)
            {
                name2 = " thirty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 4)
            {
                name2 = " forty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 5)
            {
                name2 = " fifty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 6)
            {
                name2 = " sixty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 7)
            {
                name2 = " seventy";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 8)
            {
                name2 = " eighty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 9)
            {
                name2 = " ninety";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }
        }

        if(digits[2] == 8)
        {
            name3 = "eight hundred";
            if(digits[1] == 0)
            {
                if(digits[0] == 0)
                {
                    return name3;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name1;
                return name;
                }
                 if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name1;
        return name;
        }
        if(digits[0] == 5)
        {
        name1 = " five";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 6)
        {
        name1 = " six";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 7)
        {
        name1 = " seven";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 8)
        {
        name1 = " eight";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 9)
        {
        name1 = " nine";
        name = name3 + name1;
        return name;
        }
            }

            if(digits[1] == 1)
            {
                if(digits[0] == 0)
                {
                name2 = " ten";
                name = name3 +name2;
                return name;
                }

                if(digits[0] == 1)
                {
                name2 = " eleven";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 2)
                {
                name2 = " twelve";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 3)
                {
                name2 = " thirteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 4)
                {
                name2 = " fourteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 5)
                {
                name2 = " fifteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 6)
                {
                name2 = " sixteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 7)
                {
                name2 = " seventeen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 8)
                {
                name2 = " eighteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 9)
                {
                name2 = " nineteen";
                name = name3 +name2;
                return name;
                }
            }

            if(digits[1] == 2)
            {
                name2 = " twenty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 3)
            {
                name2 = " thirty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 4)
            {
                name2 = " forty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 5)
            {
                name2 = " fifty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 6)
            {
                name2 = " sixty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 7)
            {
                name2 = " seventy";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 8)
            {
                name2 = " eighty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 9)
            {
                name2 = " ninety";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }
        }

        if(digits[2] == 9)
        {
            name3 = "nine hundred";
            if(digits[1] == 0)
            {
                if(digits[0] == 0)
                {
                    return name3;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name1;
                return name;
                }
                 if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name1;
        return name;
        }
        if(digits[0] == 5)
        {
        name1 = " five";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 6)
        {
        name1 = " six";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 7)
        {
        name1 = " seven";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 8)
        {
        name1 = " eight";
        name = name3 + name1;
        return name;
        }
        if(digits[0] == 9)
        {
        name1 = " nine";
        name = name3 + name1;
        return name;
        }
            }

            if(digits[1] == 1)
            {
                if(digits[0] == 0)
                {
                name2 = " ten";
                name = name3 +name2;
                return name;
                }

                if(digits[0] == 1)
                {
                name2 = " eleven";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 2)
                {
                name2 = " twelve";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 3)
                {
                name2 = " thirteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 4)
                {
                name2 = " fourteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 5)
                {
                name2 = " fifteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 6)
                {
                name2 = " sixteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 7)
                {
                name2 = " seventeen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 8)
                {
                name2 = " eighteen";
                name = name3 +name2;
                return name;
                }
                if(digits[0] == 9)
                {
                name2 = " nineteen";
                name = name3 +name2;
                return name;
                }
            }

            if(digits[1] == 2)
            {
                name2 = " twenty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 3)
            {
                name2 = " thirty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 4)
            {
                name2 = " forty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 5)
            {
                name2 = " fifty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 6)
            {
                name2 = " sixty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 7)
            {
                name2 = " seventy";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 8)
            {
                name2 = " eighty";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }

            if(digits[1] == 9)
            {
                name2 = " ninety";
                if(digits[0] == 0)
                {
                    name = name3 + name2;
                    return name;
                }
                if(digits[0] == 1)
                {
                name1 = " one";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 2)
                {
                name1 = " two";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 3)
                {
                name1 = " three";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 4)
                {
                name1 = " four";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 5)
                {
                name1 = " five";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 6)
                {
                name1 = " six";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 7)
                {
                name1 = " seven";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 8)
                {
                name1 = " eight";
                name = name3 + name2 + name1;
                return name;
                }
                if(digits[0] == 9)
                {
                name1 = " nine";
                name = name3 + name2 + name1;
                return name;
                }
            }
        }
    }
}
