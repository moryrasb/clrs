import {binarryNumber1, binaryNumber2, unSortedArraySmall} from "./data/data.js";
import { performance } from "node:perf_hooks";
import {

    insertionSortDescending, recursiveInsertionSort,
    insertionSortFor,
    insertionSortWhile
} from "./sorts/insertionSort.js";
import {linearSearch} from "./searches/linearSearch.js";
import {addBinary, addBinaryWithConvert} from "./etc/AddBinary.js";
import {SelectionSort} from "./sorts/selectionSort.js";
import {mergeSort} from "./sorts/mergeSort.js";
const array = unSortedArraySmall;
// insertionSortWhile(array, array.length);
// insertionSortFor(array, array.length);
//insertionSortDescending(array, array.length);
// const index = linearSearch(array, 8);
//console.log("sorted array: ", array);
//console.log("index : ", index);
const start = performance.now();
//const result = addBinaryWithConvert(binarryNumber1,binaryNumber2, 8);
//insertionSortWhile(array, array.length);
//insertionSortFor(array, array.length);
//SelectionSort(array,array.length);
 //mergeSort(array,0,10);
recursiveInsertionSort(array,11);
console.log("sorted array: ", array);
const end = performance.now();
console.log(`Execution time: ${end - start} ms`);
//console.log(result);