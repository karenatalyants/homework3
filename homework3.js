
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

console.log('your attractiveness index is' + ' ' + attrIndex (25, 178, 77, 'oval'));



const nothingButReturn = function () {


  return ('this function does not take anything but returns this dumb sentence');
};

console.log(nothingButReturn());

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
console.log(longestString('awkjd','ww','ggg'));

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

console.log(dividool(3,4));


const triangleArea = function(base, height) {
  const area = multiplyy(base,height)/2;
  return area;
};

console.log(triangleArea(5,4));
