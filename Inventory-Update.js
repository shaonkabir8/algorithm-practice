function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  
    let finalCurv = [];
  
    const finalOutput = [];
  
    //Check if the item has in the first arr
  
    arr2.forEach((element) => {
      const finding = arr1.find((element1) => {
        return element1[1] === element[1];
      });
      if (finding) {
        finding[0] = finding[0] + element[0];
        finalCurv.push(finding);
      } else {
        finalCurv.push(element);
      }
    });
    // if has than i have to update this number by using plus operator .
  
    // if not have . than i have to add this item to the first arr.
  
    const rest = arr1.filter((element) => {
      return !finalCurv.includes(element);
    });
  
    finalCurv = [...finalCurv, ...rest];
  
    finalCurv.sort((a, b) => {
      a = a[1];
      b = b[1];
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
  
    return finalCurv;
  }
  
  // Example inventory lists
  var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ];
  
  var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ];
  
  updateInventory(curInv, newInv);
  