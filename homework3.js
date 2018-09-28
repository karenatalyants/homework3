
const attrIndex = function (age, height, weight, headShape) {

  if (typeof headShape !== 'string') {
    alert('headShape must be string');
    return 0;
  }


  const heightIndex = (height - 160) * 3;
  const weightIndex = (100 - weight) * 3;
  let headIndex = 0;


  if (headShape === 'round') {
    headIndex = 1;
  }

  else if (headShape === 'oval') {
    headIndex = 3;
  }

  else if (headShape === 'long') {
      headIndex = 2;
    }

  const indexTot = age + heightIndex + weightIndex + headIndex;

  return indexTot

}

//console.log('your attractiveness index is' + ' ' + attrIndex (25, 178, 77, 'oval'));



const nothingButReturn = function () {


  return ('this function does not take anything but returns this dumb sentence');
};

//console.log(nothingButReturn());

//below is the function that takes arguments, does something but does not return anything haha
const doSomething = function (a,b) {
  const c = a * b;
}

//below is the function that takes three strings and returns the string that is the longest

const longestString = function (x,y,z) {
  if (typeof x !== 'string') {
    alert('ALL parameters must be string');
  }

  if (typeof y !== 'string') {
      alert('ALL parameters must be string');
    }

  if (typeof x !== 'string') {
          alert('ALL parameters must be string');
        }

  const lengthX = x.length;
  const lengthY = y.length;
  const lengthZ = z.length;

  if (lengthX > lengthY && lengthX > lengthZ) {
    return 'the length of the logest string is '+lengthX;
  } else if (lengthY > lengthX && lengthY > lengthZ) {
    return 'the length of the logest string is '+lengthY;
  } else if (lengthZ > lengthX && lengthZ > lengthY) {
    return 'the length of the logest string is '+lengthZ;
  }

  }
//console.log(longestString('awkjd','ww','ggg'));

const numbers = function (a,b) {
  if (typeof a !== 'number') {
    console.log('both parameters need to be numbers you dumbass');
  }
  if (typeof b !== 'number') {
    console.log('both parameters need to be numbers you dumbass');
  }

  if (a === b) {
    return 0;
  } else if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
}

console.log(numbers(2,5));

const multiplyy = function (a,b) {
  const c = a * b;
  return c;
};

console.log(multiplyy(3,4));

const dividool = function (a,b) {
  const c = a / b;
  return c;
};

//console.log(dividool(3,4));


const triangleArea = function(base, height) {
  const bh = multiplyy(base,height);
  const area = dividool(bh,2);
  return area;
};

//console.log(triangleArea(5,4));


const numLengt = function (numberr) {
  const numStr = ''+numberr;
  return numStr.length;
};

//console.log(numLengt(88877));

//function that takes two strings and a number, If the length of the two strings
//concatenated together is greater than the given number
//return 1, else return -1.

const numStrLenCompar = function (strinj1, strinj2, nump) {

//the two if's below check and ensure that we give two strings and a number
  if (typeof strinj1 !== 'string') {
    console.log('Error, strinj needs to be a string!!!');
    return alert('you just entered the Matrix. Stay still, we will come for you');

  };
  if (typeof strinj2 !== 'string') {
    console.log('Error, strinj needs to be a string!!!');
    return alert('you just entered the Matrix. Stay still, we will come for you');

  };
  if (typeof nump !== 'number') {
    console.log('Error, nump needs to be a string!!!');
    return alert('you just entered the Matrix. Stay still, we will come for you');
  };

  //here the actual process of concatenating and comparing starts
  const strinjConc = strinj1 + strinj2;
  const numpStr = nump + '';

  if (strinjConc.length > numpStr.length) {
    console.log('the two strings concatenated together are longer than the number, so we are returning 1')
    return 1;

  } else if (strinjConc.length < numpStr.length) {
    console.log('the two strings concatenated together are shorter than the number, so we are returning -1')
    return -1;
  } else if (strinjConc.length === numpStr.length) {
    console.log('what if they are equal? well, I decided to return 0 in this case')
    return 0;
  }
};

//console.log(numStrLenCompar('bong', 11, 33334444));


const runStuff = function (h,i,j) {

//below I make sure that there are two numbers and a string
if (typeof h !== 'number') {
  console.log('Error, the first parameter needs to be a number!!!');
  return alert('Error, the first parameter needs to be a number');
};
if (typeof i !== 'number') {
  console.log('Error, the second parameter needs to be a number!!!');
  return alert('Error, the second parameter needs to be a number');
};
if (typeof j !== 'string') {
  console.log('Error, the third parameter needs to be a string!!!');
  return alert('Error, the third parameter needs to be a string!');
};

//here starts the actual calculation

if (j === 'rectangle') {
  const rectArea = multiplyy (h,i);
  return rectArea;
}

if (j === 'triangle') {
  return triangleArea(h,i);
}

if (j !== 'rectangle' && j !== 'triangle') {
  return -1;
}

}

//console.log(runStuff(10,20, 'www'));
