console.log('Slice and Splice difference')

console.log('The slice() method does not mutate (change) the original array, it returns a new array containing the extracted elements.')

let arr = [1,2,3,4,5]
// index   0,1,2,3,4
// neg    -4,-3,-2,-1,0

let arr2 = arr.slice(1,3) // 2,3
let arr3 = arr.slice(1) // 2,3,4,5
let arr4 = arr.slice(4) //5
let arr5 = arr.slice(3) //4 ,5
let arr6 = arr.slice(-2 , -1) //4

console.table([arr ,arr2 , arr3 ,arr4 , arr5 , arr6]);

console.log('Splice')

console.log('The splice() method modifies the original array.It returns an array containing the elements that were removed (if any).You can use it both to remove and insert elements in a single operation.')

let array = [1,2,3,4,5]
// index  =  0,1,2,3,4


let array2 = array.splice(1,3)
// console.log(array)
// console.log(array2)

let array3 = array.splice(1 , 3, "a" , "b" ,"c")
console.log(array)
console.log(array3)