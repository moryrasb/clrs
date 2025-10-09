//  efficient algorithm for sorting a small number of elements
// elements a[0] to a[i-1] is our loop invariant
export const insertionSortWhile = (array, n) => {
    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i-1;
        while (j>=0 && array[j]>key) {
            array[j+1] = array[j];
            j--;
            array[j+1] = key;
        }
    }
};
export const insertionSortFor = (array, n) => {
    for(let i= 1; i<n; i++){
        let key = array[i];
        for (let j = i-1; j>=0; j--){
            if(array[j]>key){
                array[j+1] = array[j];
                array[j] = key;
            }
            else {
                break;
            }
        }
    }
}

export const insertionSortDescending= (array, n) => {
    for(let i=1; i<n; i++){
        let key = array[i];
        for (let j = i-1; j>=0; j--){
            if(array[j]<key){
                array[j+1] = array[j];
                array[j] = key;

            }
            else {
                break;
            }
        }
    }
}