/*                              JavaScript String Methods
Notes:                                                     https://www.w3schools.com/jsref/jsref_obj_string.asp
    All string methods return a new value.

    They do not change the original variable.

     String indexes are zero-based:
    The first character is in position 0, the second in 1, and so on.

    Normally, strings like "John Doe", cannot have methods or properties because they are not objects.

    But with JavaScript, methods and properties are also available to strings, because JavaScript treats strings as objects when executing methods and properties.

    You can use single or double quotes:

    You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
        let answer2 = "He is called 'Johnny'";

    Because strings must be written within quotes, JavaScript will misunderstand this string:
        let text = "We are the so-called "Vikings" from the north.";

    The solution to avoid this problem, is to use the backslash escape character.
    The sequence \"  inserts a double quote in a string:

    let text = "We are the so-called \"Vikings\" from the north.";

    The sequence \'  inserts a single quote in a string:
        let text= 'It\'s alright.';

    The sequence \\  inserts a backslash in a string:
        let text = "The character \\ is called backslash.";



 */
// For Strings
//properties
// Length -  gives character length of a string, also counting spaces.

let text = "HELLO WORLD";

console.log(text.length);  //gives 6



    // charAt() method returns the character at a specified index (position) in a string.
    // the first character starts at index 0, second at 1..

console.log(text.charAt(2)); // l

console.log(text.charAt(text.length - 1)); //to get the last letter of ANY stirng  expect: d

console.log(text.charAt(0)) // H

console.log(text.charAt(3.21)) // L - we round down to nearest

console.log(text.charAt( 15)) // blank, out of range

console.log(text.charAt()) // H   defaults to 0 index



    // concat - join 2 or more strings together

let msg = "its a sunny day";

text.concat(msg);
console.log(text.concat(msg)) //HELLO WORLDits a sunny day   - we want a space

console.log(text.concat(" ", msg)) //HELLO WORLD it's a sunny day we add in a space, we can concat multiple strings at once
//alternative to concat,  template strings or template literals, require to empty quotes for spacing

console.log(`${text} ${msg}`);

//adding variables together
console.log(text + " " + msg);



    //  endsWith()  searches a string to see if it ends with a string and returns true if it does. returns false if anything else.  it is case-sensitive

console.log(msg.endsWith("DAY"))  //gives false


    // Includes()  - searches a string for a value then returns a boolean.  can also set a index to start searching at

console.log(msg.includes("sunny")); //true

console.log(msg.includes("its", 5)); //false



    // indexOf()   will search a string, can be one letter, in a variable, then returns its index position.
    //where as charAt()  will search an INDEX and return the character, this is the opposite
    //we can give it a start position, so it will give us the 2nd or third etc.. string we want if we don't want just the first
    //if it does not exist, it returns -1

console.log(msg.indexOf("sunny"));

console.log(msg.indexOf("a", 7));


    // lastIndexOf()  searches like indexOf, but searches backwards, so it will return the last one
    // returns -1 if it doesn't exist.  gives index from the start at 0

let txt = "its a great day, yes it's a day"

console.log(txt.lastIndexOf("day")); // 28
console.log(txt.length) // 31



    //  localCompare()
    //returns -1  if the string its called on is BEFORE the string input
    //returns 1 if the string its called on is AFTER the input
    //returns 0 if they are equal, when using words they test the first letters
    //use case:  can be used to return a number so we can put things in alphabetical order, but we can sort arrays later on, so not very useful

let a = "a";
let b = "b";

console.log(a.localeCompare(b)); //gives -1 because a is before b
console.log(b.localeCompare(a)); //gives 1 because b is after a

    // repeat()  return a new string repeating a string x number of times

console.log(a.repeat(19)); //aaaaaaaaaaaaaaaaaaaa



    // match()  search for a string, and return an array of all the times it occurs
    // use case, see how many times a word is repeated, then get length of array

let text1 = "The rain in SPAIN stays mainly in the plain";
console.log(text1.match(/ain/g)); // case sensitive, returns [ ain, ain, ain ]



    //replace()  returns a new string with the word replaced with input
let red = "red red red red red";
console.log(red.replace("red", "blue")); //blue red red red red  - replaces first one only

console.log(red.replace(/red/g, "blue"));// global replaces all reds, blue blue blue blue blue,



    //search() returns the index of the input string,  is like indexOf() BUT it can Not have a start position
    //advantage is, we can use pattern to search case-insensitive
    //returns -1 if none is found

let search = "Red red red RED"
console.log(search.search("r"));








