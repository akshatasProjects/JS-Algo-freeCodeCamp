/*

As you expand your JavaScript skills, you'll want to get comfortable with array manipulation methods, such as map(), reduce(), and filter().

In this statistics calculator project, you'll gain experience with handling user input, DOM manipulation, and 
method chaining. You'll get practice by performing 
statistical calculations like mean, median, mode, variance, and standard deviation.

*---- CONVERTING STR TO NUMBER USING MAP
The value of an input element is always a string, even if 
the input type is number. You need to convert this array 
of strings into an array of numbers. 
To do this, you can use the .map() method.

The .map() method takes a callback function as its first argument. This callback function takes a few arguments, 
but the first one is the current element being processed.

The callback function needs to return a value. In this case, 
you want to return the value of each element converted to a number. 
You can do this by using the Number() constructor, 
passing the element as an argument.

* FILTER STRINGS FROM NUMBERS
The .filter() method will allow you to filter elements out of an array,
creating a new array in the process.

Much like the .map() method, the .filter() method takes a callback function. 
The callback function takes the current element as its first argument.

The callback function needs to return a Boolean value, which indicates whether the element should be included 
in the new array. In this case, you want to return true if the element is not NaN (not a number).

However, you cannot check for equality here, because NaN is not equal to itself. Instead, 
you can use the isNaN() method, which returns true if the argument is NaN.

The .map() method is called on the array, and then the .filter() method is called on the result of the .map() method. This is called method chaining.

* REDUCE( TO GET THE SUM
Arrays have another method, called .reduce(), which is perfect for 
this situation. The .reduce() method takes an array and applies 
a callback function to condense the array into a single value.

- The .reduce() method takes a second argument that is used as the initial value of the accumulator. Without a second argument, the .reduce() method uses the first element of 
the array as the accumulator, which can lead to unexpected results.

----------- CALCULATE MEAN
The next step in calculating the mean is to divide the 
sum of numbers by the count of numbers in the list.

------- MEDIAN CALCULATION
Time to start working on the median calculation. 
The median is the midpoint of a set of numbers.

The first step in calculating the median is to ensure the list 
of numbers is sorted from least to greatest. Use sort()

*/

const calculator = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));
  const mean = getMean(numbers);
};

const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.sort();
};
