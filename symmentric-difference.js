function sym(args) {
    const finalResult = [];
    const argu = [...arguments];
    function findUniq(arr1, arr2) {
      const uniq1 = arr1.filter((element) => arr2.indexOf(element) === -1);
  
      const uniq2 = arr2.filter((element) => arr1.indexOf(element) === -1);
  
      return [...uniq1, ...uniq2];
    }
  
    let some = argu.reduce(findUniq);
  
    for (const element of some) {
      if (!finalResult.includes(element)) {
        finalResult.push(element);
      }
    }
    finalResult.sort();
  
    return finalResult;
  }
  
  //sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
  //sym([1, 2, 3], [5, 2, 1, 4]);
  
  //sym([1, 2, 3], [5, 2, 1, 4]);
  
  //sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
  //sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
  
  
  /* for (let i = 0; i < argu.length - 1; i++) {
    let arrSet1 = firstArg;
    const arrSet2 = argu[i + 1];
    const funcResult = findUniq(arrSet1, arrSet2);
  
    mostDiff = [...mostDiff, ...funcResult];
    firstArg = [...mostDiff]
    
  
    arrSet1 = [...firstArg];
   */
  
  /*   for (let i = 1; i < arguments.length; i++) {
      for (const element of arguments[i]) {
        if (!firstArg.includes(element)) {
          uniq.push(element);
        }
      }
      firstArg = [...uniq];
      uniq = [...firstArg];
      console.log(firstArg);
      console.log(uniq);
    }
  
    uniq.forEach((element) => {
      if (!result.includes(element)) {
        result.push(element);
      }
    }); */
  
  /* function sym(args) {
    let creatorArr = [];
    let targetArr = [];
    let result = [];
    let currentValue = 0;
  
    function finder(arr, target) {
      arr = arr.flat();
      let container = [];
  
      target.forEach((element) => {
        if (!arr.includes(element)) {
          container.push(element);
        }
      });
  
      return container;
    }
  
    for (let z = 0; z < arguments.length; z++) {
      for (let i = 0; i < arguments.length; i++) {
        if (i !== currentValue) {
          creatorArr.push(arguments[i]);
        } else {
          targetArr = [...arguments[i]];
        }
  
        if (i === arguments.length - 1) {
          let resultFunc = finder(creatorArr, targetArr);
  
          result = [...result, ...resultFunc];
  
          creatorArr = [];
          targetArr = [];
  
          currentValue++;
        }
      }
    }
  
    console.log(creatorArr);
    console.log(targetArr);
  
    console.log(result);
    return result;
  } */
  