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


    //slice() will cut out part of a string past an index you specify. start index required, end index optional
let slicevar = "HELLO it is a nice day";
console.log(slicevar.slice(7)); // t is a nice day

console.log(slicevar.slice(9 ,-1)) // is a nice da  -1 gives one before last letter,
console.log(slicevar.slice(0,1)) //first letter: h


    //split()  will split a string by what we define, " " space or "" each letter. then separate them into single items in an array.

console.log(slicevar.split(" ")); // [ 'hello', 'it', 'is', 'a', 'nice', 'day' ]

//we can split then tell it the amount of items we want
console.log(slicevar.split(" ", 2)); // [ 'hello', 'it' ]

//most important thing is to remember, this is for turning a string into an array, so we can do all types of array methods to a string, then turn it back if we want to
 let arr = slicevar.split(" "); //
console.log(arr[0]); //hello



        // startsWith()  is like endsWith but the opposite, returns true if a string starts with our input
console.log(slicevar.startsWith("hi"));//false
console.log(slicevar.startsWith("hello"))// true



        // toLowerCase()  converts a string to lowercase without changing the original string

console.log(slicevar.toLowerCase());// hello it is a nice day


        // toString()  not used on strings, but used to make objects and arrays into a string so it is useable

        // toUperCase()  makes a string upercase, does not change the original string

console.log(slicevar.toUpperCase()); // HELLO IT IS A NICE DAY

        // trim() removes white spaces from start and end of a string, not the middle
let c = "    b   "
console.log(c.trim())// b







    //  Number Methods

// isInteger()  returns true for WHOLE numbers, decimals and strings return false
console.log(Number.isInteger(5-2));// true
console.log(Number.isInteger(5/2)) // false

    // toFixed()  turns a number into a string and rounds it to whole, or however many places we say. then we would turn that string back to a number, or simply use math.Round()
let numb = 5.324234
console.log(numb.toFixed());// 5
console.log(numb.toFixed(3))// 5.324

    //toLocalString()   turns the number into a string and formats it with commas, can also add dollar sign for dollar format
let num = 1000000;
console.log(num.toLocaleString());//1,000,000
let strnum = num.toLocaleString();

//type of  to get type of variable or object
console.log(typeof strnum) // string



                       // convert string to a number
                       //  parseFloat()  or Number(),  parseInt() can NOT convert decimals, so don't use
let testn = "34.11"
console.log(     Number(testn))  //34.11
console.log(       parseFloat(testn))  //34.11

                    // convert  numbers, arrays to a string  with toString()  or string()
                    // we would split a string with  split(), to an array, then array.toString()  back to string



                            // Math Methods
let roundme = 10.6;
console.log(     Math.round(roundme)); // 11    rounds to the nearest

console.log(     Math.floor(roundme))  // 10   round down to the nearest even if its above .5

console.log(    Math.min(5, 10)) // 5   gives min value of 2 numbers

console.log( Math.max(1, 99)) // 99 gives max value of 2 numbers

console.log(  Math.random() ) // 0.4245354980448932    gives random numbers between 0-1   which we should round and can multiply by 100 if we want random whole numbers







                         // Array methods

// spread operator can replace some methods for arrays and makes it easy to copy things    -   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax   -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics)//  ["head", "shoulders", "knees", "and", "toes"]

arr1 = [1, 2 ,3];
arr2 = [4, 5, 6];
arr1 = [...arr2, ...arr1] //   [ 4, 5, 6, 1, 2, 3 ]  -         easily turn arrays around, where we would have to use methods to accompish this.
console.log(arr1)

arr1 = [arr1, arr2]; // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]   gives an array of 2 arrays, not one array with all the items like above,

console.log(arr1)


                  //rest param - allows a function to take in unlimited arguments when called that we may not know, then puts then into an array. a real array, so methods can be called on them
function myFun(a,  b, ...manyMoreArgs) {
 console.log("a", a)// a, one
 console.log("b", b) // b, two
 console.log("manyMoreArgs", manyMoreArgs)   // manyMoreArgs, ["three", "four", "five", "six"]
}
myFun("one", "two", "three", "four", "five", "six")



                                                               //https://www.w3schools.com/jsref/jsref_obj_array.asp
                   // concat()   add arrays to the end of an array, this is an alternative to the above spread operator.  [...arr1, ...arr2]
let arr3 = ["a", "b" ,"c"];
let arr4 = ["d", "e" ,"f", "g", "h"];

console.log(arr3.concat(arr4)); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
console.log(arr3.concat(arr4, arr2)); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 4, 5, 6 ]     can add 2 or more arrays also.



                     // every(CurrentValue)   runs a function for every item in the array, the function must have a condiiton that returns true or false.
                     // then if every item in the array returns true, it will return true, and the same for false
let arr5 = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10];
function testevery(num) {

return 5 < num
}

console.log(arr5.every(testevery)); //false



                      // fill("value", startindex, endindex)  fills an array with our item typed in, it will CHANGE the original array, end index defaults to the array length
console.log(      arr5.fill(1)    ) //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

let arr6 = [1, 2 ,3, "a", "b", "c"];
// instead of learning copyWithin() which copies existing items in the array, with fill(), we have to type a value, but by making the array[] value below, we copy an item to the array that we did NOT write in
console.log(    arr6.fill(arr6[3], 2)  ) //[ 1, 2, 'a', 'a', 'a', 'a' ]



                  // filter(  function(currentvalue,  index))          filter is like every(), we need a function that will return a conditional true or false, but in this case, we don't just want a boolean
                  //               we want to keep all the values that return true from our function,   then we make a new function from that value

let arfilter = [1,2,3,4,5,6,7,8,9,10];

let filtered = arfilter.filter( currentnum => currentnum < 5)

console.log(filtered) // [ 1, 2, 3, 4 ]




                 // find(currentvalue, index)  is like filter, we need a function that returns a condition true or false. but we want to find the FIRST item that meets it and we return only that, not every item
function arFind(current) {
return current > 4;
}

console.log(  arfilter.find(arFind)) // 5  is the first number over 5 in the array




         //  findindex(current, index)   is like find, we find the first value that meets our condition but we want the index of the item. not the item itself

let arrfindin = [11,22,33,44,55,66,77,88,99];

console.log(   arrfindin.findIndex( current => current > 40)) // 3 index, 44 is the first item with index of 3, the 4th item in the array.



          // forEach(current, index)   we actually DO something to the array items like calculations or string methods to each one, instead of returning a boolean to get the first one or filter.
arrfindin.forEach(function (current,index) {
    console.log( current * 2)  // 22, 44, 66  we can do calculations to every item in the array and DONT have to create a new array, where other methods will make a new one
})
// a for loop might be better than forEach because we have access to break and continue there, but in forEach, there is no way to stop the loops


            // from(current, index)    like forEach, it will run a function for each item, but then it will add each new item into a new array it returns. forEach does not return an array
                //we have to return the current item calculation, unlike in forEach. there we could just log each item
                //remember from() is for creating more arrays, where as foreach just wants to run a function for each value, not necessarily returning it

let arrfrom = Array.from(arrfindin, function(current, index) {

return current * 3;
})
console.log(arrfrom) //[33, 66, 99]



                // includes()  same as in string method, returns true or false if the array includes the search term
let inc = ["cat", "hat", "mat", "splat", "prat", "hat"];
console.log( inc.includes("mat"));// true
console.log(inc.includes("c")) ;//false

                // indexOf()  gives index of the search item, returns -1 if it's not found
console.log( inc.indexOf("splat")) ;// 3
console.log( inc.indexOf("phat")) ;// -1


                // array.join("separator") turns an array into a string,  like how we use split(" ") to make an array out of a string and split each item by space
console.log(inc.join(" "));// "cat hat mat splat prat"


                // lastIndexOf()  like indexOf but gives the last one, so it searches from back to front
console.log(   inc.indexOf("hat")) // 1
console.log(  inc.lastIndexOf("hat")) // 5


                // length  - gives length of an array or can set the length to trim the array down

console.log(   inc.length) ;// 6         ["cat", "hat", "mat", "splat", "prat", "hat"]
inc.length = 3;
console.log(inc) ;//  [ 'cat', 'hat', 'mat' ]


            // map(current, index)   map returns a new array that we modify with the function.  where forEach does not return a new one, it's for running a function. array.length number of times. such as
            //adding events to a group of buttons, you don't need a new array for that. but you need to run a function for each item
            //so map is for when we NEED a NEW array modified from the first

let upInc = inc.map(current => {

return current.toUpperCase();
})
console.log(upInc) // [ 'CAT', 'HAT', 'MAT' ]


            // pop()   remove the last item in an array, this changes the original array
upInc.pop();//
console.log(upInc) ;//[ 'CAT', 'HAT' ]




            // push()  the opposite of pop, we add an item to the end of the array
let cars = ["toyota", "honda", "lexus",  "audi", "bmw"]
cars.push("mazda");
console.log(cars) //[ 'toyota', 'honda', 'lexus', 'audi', 'bmw', 'mazda' ]



            // reduce()  - reduce an array to one value, we can store a total and do calculations on every item in the array like add them all together or subtract them all. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
            //the difference is we add item 1 to item2 etc.. instead of doing calculations on each item individually
            //     array.reduce(function(previousvalue,  currentvalue) .  also called totalvalue placeholder array.reduce(total, currentvalue)
            // we can replace reduce with forEach, we just create a variable globally to hold the total and add to it, total+= currentvalue,  will give the same

let reduc = [12,1,5,2];
const reduced = reduc.reduce(function (total, present) {  // note we make the variable const, where if we use forEach, we would use let. this is a benefit to having immutable variable
    return total + present;
})
console.log(reduced) //20


            // reverse() reverses the order of the array simply, this DOES change the original array
let rev  = [1,2,3,4,5];
console.log(   rev.reverse());


                // shift() - push, adds to the end, pop removes from the end, shift removes from the beginning. changes original array
rev.shift();
console.log(rev) ;//[ 4, 3, 2, 1 ]


                // slice() selects items in an array, and returns the items as a new array

console.log( rev.slice(0,2)) ; // [ 4, 3 ]


                    // some()  like every, but not all have to return true to be true here. works like find(), we have a function and condition to check, but we dont return the item or index, just a boolean
let som = [5, 20,30, 40];
console.log(som.some((item) => item > 5)) ;// true


                    // sort()  sorts an array by comparison. defaults to alphabetical order https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
                    // return > 0  sort a after b
                    //return < 0 sort a before b
let sor = [23, 21, 55, 33, 732, 1 ,4]
sor.sort((a, b) => a - b);
console.log(sor); //[1,  4,  21, 23, 33, 55, 732 ]



                    // splice(), will add in elements where you say inside the array, slice() only extracts items already in the array,
                    // splice() also can remove elements inside the array
                    // push() adds items to the end, unshift() adds items to the beggins, so this is how we add anywhere in the middle of an array
                    // splice(index, howmany, item1, ....., itemX)
sor.splice(3,1, "apple", "orange", "banana");
console.log(sor) ; // [1,  4, 21, 'apple', 'orange', 'banana',33,  55, 732]   we start at 3 and delete 1 item, "23" then add our 3 items



                    // toString()  like join() converts array to a string, but string seperates items by comma, where in join() we can specify the seperator















