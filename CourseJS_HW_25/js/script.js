"use strict";


/*
  const arr = [1, 2, 3, 4, 5];
  const indexOf = (arr, search, index) => {
	index = 0;
	  for (let i = index; i < arr.length; i += 1) {
		  if (arr[i] === search) 
		  return i;
	  }
	  return -1;
  }
  console.log(indexOf(arr, 3));
*/
/*
const arr = [1, 2, 3, 4, 5];
const lastIndexOf = (arr, search, index) => {
    if (!index) index = arr.length - 1;
    for (let i = index; i >= 0; i -= 1) {
        if (arr[i] === search)
		return i;
    };
    return -1;
};
console.log(lastIndexOf(arr, 4));
*/

/*
const arr = [1, 2, 3, 4, 5, 6];
const find = (arr, search) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === search) {
      return arr[i]
    };
  };

  return undefined
};
console.log(find(arr, 5));
*/
  
/*
const arr = [1, 2, 3, 4, 5, 6]
function findIndex(arr, callback) {
	for (let i = 0; i < arr.length; i += 1) {
	  if (callback(arr[i], i, arr)) {
		return i
	  };
	};
	return -1
  };
  function index(element) {
	return element === 3
  };
  console.log(findIndex(arr, index));
  */
/*
  const arr = ["js", "php", "c++", "java"];
  const includes = (arr, search, index) => {
	index = 0;
    for (let i = index; i < arr.length; i += 1) {
        if (arr[i] === search) 
		return true;
    };
    return false;
};
console.log(includes(arr, "js"));
*/
/*
const arr = ["js", "php", "c++", "java"];
const every = (arr, callback) => {
  for (let i = 0; i < arr.length; i += 1) {
      if (!callback(arr[i], i, arr)) 
      return false;
  }
  return true;
};
console.log(
  every(arr, (item) => {
      return item.length > 1;
  })
);
*/
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
const some = (arr, callback) => {
  for (let i = 0; i < arr.length; i += 1) {
      if (callback(arr[i], i, arr)) 
      return true;
  }
  return false;
};
console.log(
  some(arr, (item) => {
      return item > 2;
  })
);
*/
