'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * indentity: Returns the value unchanged
 * @param{*} value: the value to be returned from this function.
 * @returns{*}: returns the value as entered
 */
 
function identity(value){
 return value;
}
module.exports.identity = identity;

/**
 * typeOf: Returns the value as a string of the value
 * @param{*} value: the value to be returned from this function.
 * @returns{*}: returns the value as a string 
 * 
 *
 * 
 */
function typeOf(value){
 if(Array.isArray(value)) return "array";
 if (value === null) return "null";
 else return typeof(value);
}
module.exports.typeOf = typeOf;



/**
 * first: designed to return an empty array if it is not an array. if the nummber is NaN or not given, it will return the first element in the array.
 * otherwise it will return the first elements upto the input number
 * 
 * @param {Array} collection: The collection over which to test.
 * @param {number} number: The number will be used to see if the array contains that number
 * 
 * @returns{array}:returns an empty array if it is not an array. if the nummber is NaN or not given, it will return the first element in the array.
 * otherwise it will return the first elements upto the input number
 * 
 * 
 */

  function first(array, number){
 if( !Array.isArray(array) || number < 0){
  return [];
 }
 else if(number === null || isNaN(number)){
  return array[0]
 }
 else if (number > array.length){
  return array;
 }
 else {
  return array.slice(0,number)
  
 }
}
module.exports.first = first;


/**
 * last: designed to return an empty array if it is not an array. if the nummber is NaN or not given, it will return the last element in the array.
 * otherwise it will return the input number up to the last number
 * @param {Array} collection: The collection over which to test.
 * @param {number} number: The number will be used to see if the array contains that number
 * 
 * @returns{array}:returns an empty array if it is not an array. if the nummber is NaN or not given, it will return the last element in the array.
 * otherwise it will return the input number to the last number
 * 
 * 
 */
 
 function last(arr,num){
 if( !Array.isArray(arr) || num < 0){
  return [];
} else if(num === null || isNaN(num)){
  return arr[arr.length - 1]
 }
 else if (num > arr.length){
  return arr;
 }
 else {
  return arr.slice(num - 1)
  
 }
}
module.exports.last = last;


/**
 * indexOf: designed to return an empty array if it is not an array. if the nummber is NaN or not given, it will return the last element in the array.
 * otherwise it will return the input number up to the last number
 * @param {Array} collection: The collection over which to test.
 * @param {*} value: The value will be used to see if the array contains that value
 * 
 * @returns{array}:Return the index of <array> that is the first occurrance of <value>
 *    Return -1 if <value> is not in <array>
 * 
 * 
 */
 
 function indexOf(arr, value){
 
 for(let i = 0; i < arr.length; i++){
  if (arr[i] === value){
   
   return i;
  }
 
 }return - 1;
}
module.exports.indexOf = indexOf;


/**
 * contains: designed to return  true if <array> contains <value>
 *    Return false otherwise
 * @param {Array} collection: The collection over which to test.
 * @param {*} value: The value will be used to see if the array contains that value
 * 
 * @returns{array}:Returns true if <array> contains <value>
 *    Returns false otherwise
 * 
 * 
 */
 function contains(arr, value){
 return arr.indexOf(value) > 0 ? true: false;

}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 * 
 */
 
 function each(collection, func){
  if(Array.isArray(collection) && collection !== undefined){
   for( let i = 0; i < collection.length; i++){
    func(collection[i], i, collection);
   }
  
  }else {for (let key in collection){
   func(collection[key], key, collection);
  }}
}
module.exports.each = each;


/**
 * unique: Using indexOf it will return a new array of all elements from <array> with duplicates removed
 * 
 * @param {Array} arr: The collection over which to test.
 * 
 * returns{array}:returns a new array of all elements from <array> with duplicates removed
 */
 function unique(arr){
  let unique =  function (value, index, arr) {
  return arr.indexOf(value) === index;
};
let newArr = arr.filter(unique);
return newArr;
}
module.exports.unique = unique;


/**
 * filter: call <function> for each element in <array> passing the arguments:
 *      the element, it's index, <array>
 *    return a new array of elements for which calling <function> returned true
 * 
 * @param {Array} arr: The collection over which to iterate.
 * @param {Function} func: The Function to be used to test if each element in the array is true or false
 * returns{array}:return a new array of elements for which calling <function> returned true
 */
 
 function filter(arr, func){
let newArray = [];
for(let i = 0; i < arr.length; i++){
 if(func(arr[i], i, arr) === true){
  newArray.push(arr[i]);
 } }
return newArray;
}
module.exports.filter = filter;

/**
 * reject: call <function> for each element in <array> passing the arguments:
 *      the element, it's index, <array>
 *    return a new array of elements for which calling <function> returned false
 * 
 * @param {Array} arr: The collection over which to iterate.
 * @param {Function} func: The Function to be used to test if each element in the array is true or false
 * returns{array}:return a new array of elements for which calling <function> returned false
 */
 function reject(arr, func){
let newArray = [];
for(let i = 0; i < arr.length; i++){
 if(func(arr[i], i, arr) === false){
  newArray.push(arr[i]);
 }
}

return newArray;
}
module.exports.reject = reject;


/**
 * partition: Return an array that is made up of 2 sub arrays:
 *       0) An array that contains all the values for which <function> returned something truthy
 *       1) An array that contains all the values for which <function> returned something falsy
 * 
 * @param {Array} arr: The collection over which to iterate.
 * @param {Function} func: The Function to be used to test if each element in the array is true or false
 * returns{array}:Return an array that is made up of 2 sub arrays:
 *       0) An array that contains all the values for which <function> returned something truthy
 *       1) An array that contains all the values for which <function> returned something falsy
 */
 
 function partition(arr,func){
    let array = [];
    let arrayTrue = [];
    let arrayFalse = []
    
    for(let i = 0; i < arr.length; i++){
     if(func(arr[i], [i], arr) === true){
      arrayTrue.push(arr[i]);
     }else if(func(arr[i], [i], arr) === false){
      arrayFalse.push(arr[i]);
     }
    }array.push(arrayTrue);
    array.push(arrayFalse);
    return array;
}
module.exports.partition = partition;



/**
 * map: call <function> for each element in <collection> passing the arguments:
 *        if <collection> is an array:
 *            the element, it's index, <collection>
 *        if <collection> is an object:
 *            the value, it's key, <collection>
 *   2) save the return value of each <function> call in a new array
 *   3) return the new array
 * 
 * @param {array or object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be used to test if each element in the array is true or false
 * returns{array}:Returns the new array
 */
 
  function map(collection,func){
 let newArray = [];
 for(let i = 0; i < collection.length; i++){
  if(func(collection[i],[i],collection) === true){
   newArray.push(collection[i]);
  };
 }for (let key in collection ){
  newArray.push(func(collection[key], [key], collection));
 }return newArray;
}
module.exports.map = map;


/**
 * pluck: c) Returns an array containing the value of <property> for every element in <array>
 *  
 * 
 * @param {array} array: An array of objects.
 * @param {property} property: The property whose value we want to return 
 * returns{array}:Returns an array containing the property values
 */
 function pluck(array,property){
  return map(array, function(obj) {
        return obj[property];
    });
}
module.exports.pluck = pluck;


/**
 * every: Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
 *  
 * 
 * @param {array or object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be used to test if each element in the array is true or false
 * returns{boolean}:Returns true or false
 */
  function every(collection, func){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (func === undefined){
                if (!collection[i]){
                    return false;
                }
            } else if (func(collection[i], i, collection) !== true){
                return false;
            }
        }
    } else if (collection instanceof Object){
        for (var key in collection){
            if (func === undefined){
                if (!collection[key]){
                    return false;
                }
            } else if (func(collection[key], key, collection) !== true){;
                return false;
            }
        }
    } return true;
}
module.exports.every = every;

/**
 * some: 1) Call <function> for every element of <collection> with the paramaters:
 *       if <collection> is an array:
 *        current element, it's index, <collection>
 *       if <collection> is an object:
 *        current value, current key, <collection>
 *   2) If the return value of calling <function> is true for at least one element, return true
 *   3) If it is false for all elements, return false
 *   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
 *  
 * 
 * @param {array or object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be used to test if each element in the array is true or false
 * returns{boolean}:Returns true or false
 */
 function some (collection, func){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (func === undefined){
                if (collection[i]){
                    return true;
                }
            } else if (func(collection[i], i, collection) === true){
                return true;
            }
        }
    } else if (collection instanceof Object){
        for (var key in collection){
            if (func === undefined){
                if (collection[key]){
                    return true;
                }
            } else if (func(collection[key], key, collection) === true){;
                return true;
            }
        }
    } return false;
}
module.exports.some = some;

/**
 * reduce: 1) Call <function> for every element in <collection> passing the arguments:
 *         previous result, element, index
 *   2) Use the return value of <function> as the "previous result"
 *      for the next iteration
 *   3) On the very first iteration, use <seed> as the "previous result"
 *   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
 *   5) After the last iteration, return the return value of the final <function> call
 *  
 * 
 * @param {array} arr: The collection over which to iterate.
 * @param {Function} func: The Function to be used to test if each element in the array is true or false
 * @param {number}seed:the initial number 
 * returns{value}:After the last iteration, return the return value of the final <function> call
 */
function reduce (arr, func, seed) {
    let accumulatedValue = seed || seed === undefined;
    
    for(let i = 0; i < arr.length; i++) {
     
        accumulatedValue = func(
            accumulatedValue,
            arr[i],
            i,
            arr
        );
    }
    
    return accumulatedValue;
}
 module.exports.reduce = reduce;
 
 /**
 * extend: 1) Copy properties from <object 2> to <object 1>
 *   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
 *   3) Return the update <object 1>
 *  
 * 
 * @param {object} obj: The collection over which to iterate.
 *
 * returns{object}:Returns updated object
 */
 
function extend(obj) {
    each(arguments, function(extendObj) {
        for (var key in extendObj)
            obj[key] = extendObj[key];
    });
    return obj;
};
 module.exports.extend = extend;