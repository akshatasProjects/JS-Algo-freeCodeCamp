/*
- Remember that .getElementsByClassName() method returns an HTMLCollection, 
which is an array-like object of all the elements that have a matching class name. 
You can use the spread operator to convert it into an array.
 const inputValues = [...document.getElementsByClassName("values-dropdown")];

// 1. BUBBLE SORT
Bubble Sort
Bubble Sort is a simple sorting algorithm that repeatedly steps 
through the list, compares adjacent elements, and swaps them 
if they are in the wrong order. This process is repeated until 
the list is sorted.

The first sorting algorithm you will implement is the bubble sort, which 
starts at the beginning of the array and 'bubbles up' unsorted values towards 
the end, iterating through the array until it is completely sorted.
- Because you need to compare elements, you'll need to use a nested for loop

// 2. Selection sort
Selection sort works by finding the smallest value in the array, 
then swapping it with the first value in the array. Then, it finds the next smallest value in the array, and swaps it with the second value in the array. It continues 
iterating through the array until it is completely sorted.

// 3. Insertion sort
This algorithm works by building up a sorted array at the 
beginning of the list. It begins the sorted array with the 
first element. Then it inspects the next element and swaps 
it backward into the sorted array until it is in a sorted 
position, and so on.

The default behavior of .sort() is to convert the numbers values to strings, and sort them alphabetically.
to fix this, you can pass a callback function to the .sort() method. The callback function has two parameters - for yours, use a and b. The parameters of a and b represent the number values in the array that will be sorted.

The callback to .sort() should return a number. That number determines how to sort the elements a and b:

* If the number is negative, sort a before b.
* If the number is positive, sort b before a.
* If the number is zero, do not change the order of a and b.
Keeping in mind that you want the numbers to be sorted in 
ascending order (smallest to largest), return a single 
subtraction calculation using a and b that 
will correctly sort the numbers with the above logic.

*/

const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));

  const sortedValues = inputValues.sort((a, b) => {
    return a - b;
  });

  updateUI(sortedValues);
};

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

//----------1. Bubble Sort-----------
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};
// ---------------2. Selection Sort----------------------
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
};

// ---------------3. Insertion Sort----------------------
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currValue;
  }
  return array;
};

sortButton.addEventListener("click", sortInputArray);
