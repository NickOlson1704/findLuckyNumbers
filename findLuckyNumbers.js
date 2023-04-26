//Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

//You can trust that this function will never be called with n < 0 or n > 10.

//luckyNumbers(2)
// returns (3, 7)

//luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2)


//write function that will  have n as a param
function luckyNumbers(n){
    //create the array that will be returned
    let result = []
    //create for-loop
    for(let i =0; i < n; i++){
        Math.floor(Math.random( ) * 10 + 1)
    }
}

