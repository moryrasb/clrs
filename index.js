import {binarryNumber1, binaryNumber2, unSortedArraySmall} from "./data/data.js";
import {

    insertionSortDescending,
    insertionSortFor,
    insertionSortWhile
} from "./sorts/insertionSort.js";
import {linearSearch} from "./searches/linearSearch.js";
import {addBinary, addBinaryWithConvert} from "./etc/AddBinary.js";
const array = unSortedArraySmall;
// insertionSortWhile(array, array.length);
// insertionSortFor(array, array.length);
//insertionSortDescending(array, array.length);
// const index = linearSearch(array, 8);
//console.log("sorted array: ", array);
//console.log("index : ", index);

const result = addBinaryWithConvert(binarryNumber1,binaryNumber2, 8);
console.log(result);