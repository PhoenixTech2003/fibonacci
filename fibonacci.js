const fibonacci = function fibonacciSequenceIterative(lengthOfSequence){

    //START AT ZERO
    let start = 0;
    //create array for storing the sequence
    let arraySequence = [];
    //append the value to the array
    arraySequence.push(start);
    //increment the current value in the array by one
    start = start + 1;
    //append the value to the array
    arraySequence.push(start);
    //declare the pointers for the prev and current values
    let prev = 0;
    let current = 1;
    //if the length of the array is less than then recieved value do the following:
    while (arraySequence.length < lengthOfSequence){

        // add the previous value and the value before that and store them
        let result = arraySequence[prev] + arraySequence[current];
        //append the value to the array
        arraySequence.push(result);
        // increment the variables prev and current to add the next values in the sequence
        prev = prev + 1;
        current = current + 1;


    }
    return arraySequence;


}

