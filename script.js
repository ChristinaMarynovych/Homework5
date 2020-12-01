// function 2
const numbers2 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const moda = (numbers2) => {
  const frequencyTable = {};
  numbers2.forEach(elem => frequencyTable[elem] = frequencyTable[elem] + 1 || 1);
  
  let modas = [];
  let maxFrequency = 0;
  for(const key in frequencyTable) {
    if(frequencyTable[key] > maxFrequency) {
      modas = [Number(key)];
      maxFrequency = frequencyTable[key];
    } else if(frequencyTable[key] === maxFrequency) {
      modas.push(Number(key));
    }
  }
  if(modas.length === Object.keys(frequencyTable).Length) modas = [];
  return modas;
}
 console.log(moda(numbers2));
 // function 3
const numbers3 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const getAverage = (numbers3) => {
  const total = numbers3.reduce((total, number) => {
    return total + number;
  }, 0);
  return total / numbers3.length;
}
console.log(getAverage(numbers3));
// function 4
const numbers4 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const median = (numbers4) => {
  const arrSorted = numbers4.sort((a, b) => a - b);
  return arrSorted.length % 2 === 0 ? (arrSorted[arrSorted.length/2 - 1] + arrSorte[arrSorted.length/2]) / 2 : arrSorted[Math.floor(arrSorted.length/2)];
}
  console.log(median(numbers4));
// function 5
const numbers5 = [1, 2, 3, 4, 5, 6];
const filterEvenNumbers = (numbers5) => {
  return numbers5.filter(x => !(x % 2 == 1));
}
 console.log(filterEvenNumbers(numbers5));
// function 6
const numbers6 = [1, -2, 3, -4, -5, 6];
const countPositiveNumbers = (numbers6) => {
return (numbers6.filter(x => x > 0)).length;
};
console.log(countPositiveNumbers(numbers6));
// function 7
const numbers7 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const getDividedByFive = (numbers7) => {
  return numbers7.filter(x => x % 5 == 0);
}
console.log(getDividedByFive(numbers7));