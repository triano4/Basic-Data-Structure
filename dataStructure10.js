function quickCheck(arr, elem) {
     // change code below this line
    return arr.indexOf(elem) != -1;
    // change code above this line
    return arr.indexOf(elem) >= 0 ? true : false;
  }
  // change code here to test different cases:
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
