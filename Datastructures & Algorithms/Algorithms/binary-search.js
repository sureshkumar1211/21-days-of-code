// This function takes an sorted array and  a value, if value found in array then return index of the element

//PSEUDOCODE

// 1. Write a function called binarySearch.
// 2. It takes an array a value as an args.
// 3. create start point beginning of the array  
// 4. create end point end of the array  
// 5. create middle point middle of the array => (start + end) / 2  
// 6. loop through an array until ele is equal to current index or start, end > middle   
// 7. if element is not found return -1 
// 8. if element is found return middle


const binarySearch = (arr, ele) =>
{
    let left = 0, right = arr.length, middle = Math.floor((left + right) / 2);
    while (ele !== arr[middle] && !middle < left)
    {
        ele < arr[middle] ? right = middle - 1 : left = middle + 1;
        middle = Math.floor((left + right) / 2);
        if (ele == arr[middle]) return middle;
    }
    return ele == arr[middle] ? middle : -1;
};

console.log(binarySearch([1, 4, 7, 15, 18, 20], 21))

