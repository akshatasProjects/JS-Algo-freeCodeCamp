/*
- Remember that .getElementsByClassName() method returns an HTMLCollection, 
which is an array-like object of all the elements that have a matching class name. 
You can use the spread operator to convert it into an array.
 const inputValues = [...document.getElementsByClassName("values-dropdown")];

// 1. BUBBLE SORT
The first sorting algorithm you will implement is the bubble sort, which 
starts at the beginning of the array and 'bubbles up' unsorted values towards 
the end, iterating through the array until it is completely sorted.

- Because you need to compare elements, you'll need to use a nested for loop

*/

const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();
  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));

  const sortedValues = bubbleSort(inputValues);
  updateUI(sortedValues);
};

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

sortButton.addEventListener("click", sortInputArray);

//----------1. Bubble Sort-----------
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      console.log(array, array[j], array[j + 1]);
    }
  }
};
