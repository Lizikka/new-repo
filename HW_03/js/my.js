let firstName = prompt ("Enter Your  first name");

let lastName = prompt ("Enter Your  last name");

let dateOfBirth =  Number (prompt ("Enter  date of Your bird "));

let monthOfBirth = Number (prompt ("Enter month of Your bird "));

let yearOfBirth = Number (prompt ("Enter  year  of Your bird "));

const year = Number ("2022");

var age = year  - yearOfBirth;








document.write( "User Bio:" + " " + firstName + " "  + lastName + "," + " " + age + " years old" + " " );

if ((yearOfBirth % 4 == 0))
document.write ("(Leap Year)," + " ");


if ((monthOfBirth == 12 && dateOfBirth >=22) || (monthOfBirth == 1 && dateOfBirth <= 19)) 

document.write ("Capricorn") ;



 if  ((monthOfBirth == 1 && dateOfBirth >=20) || (monthOfBirth == 2 && dateOfBirth <= 18)) 

document.write ("Aquarius");


if ((monthOfBirth == 2 && dateOfBirth >=19) || (monthOfBirth == 3 && dateOfBirth <= 20)) 

document.write ("Pisces ") ;



 if  ((monthOfBirth == 3 && dateOfBirth >=21) || (monthOfBirth == 4 && dateOfBirth <= 19)) 

document.write ("Aries");

if ((monthOfBirth == 4 && dateOfBirth >=20) || (monthOfBirth == 5 && dateOfBirth <= 20)) 

document.write ("Taurus") ;



 if  ((monthOfBirth == 5 && dateOfBirth >=21) || (monthOfBirth == 6 && dateOfBirth <= 20)) 

document.write ("Gemini");


if ((monthOfBirth == 6 && dateOfBirth >=21) || (monthOfBirth == 7 && dateOfBirth <= 22)) 

document.write ("Cancer") ;



 if  ((monthOfBirth == 7 && dateOfBirth >=23) || (monthOfBirth == 8 && dateOfBirth <= 22)) 

document.write ("Leo ");

if ((monthOfBirth == 8 && dateOfBirth >=23) || (monthOfBirth == 9 && dateOfBirth <= 22)) 

document.write (" Virgo") ;



 if  ((monthOfBirth == 9 && dateOfBirth >=23) || (monthOfBirth == 10 && dateOfBirth <= 22)) 

document.write ("Libra ");


if ((monthOfBirth == 10 && dateOfBirth >=23) || (monthOfBirth == 11 && dateOfBirth <= 21)) 

document.write ("Scorpio  ") ;



 if  ((monthOfBirth == 11 && dateOfBirth >=22) || (monthOfBirth == 12 && dateOfBirth <= 21)) 

document.write ("Sagittarius ");