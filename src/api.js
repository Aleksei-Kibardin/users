const getRes = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  const json = await response.json();
  return json;
};

export const getUsers = () => {
  return getRes("https://jsonplaceholder.typicode.com/users");
};

export const getPosts = (id) => {
  return getRes(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
};

export const getPhotos = () => {
  return getRes(`https://jsonplaceholder.typicode.com/photos`);
};

function findPairWithMinSum(array) {
  if (array.length < 2) {
    console.log("массив не удволетворяет требованиям");
    return;
  } else {
    let min1 = array[0];
    let min2 = array[1];
    for (let i = 2; i < array.length; i++) {
      if (!Number.isInteger(min1) && Number.isInteger(array[i]) || array[i] < min1 && Number.isInteger(array[i])) {
        min1 = array[i];
      } else if(!Number.isInteger(min2) && Number.isInteger(array[i]) || array[i] < min2 && array[i] >= min1 && Number.isInteger(array[i])) {
        min2 = array[i];
      }
      console.log(array[i])
    }
    if (!Number.isInteger(min1 + min2)) {
      console.log("массив не удволетворяет требованиям");
      return;
    }
    console.log("Пара чисел с наименьшей суммой:", min1, min2);
    console.log("Сумма:", min1 + min2);
  }
}

const array = [10, 2];
findPairWithMinSum(array);

function findNextPowerOfTwo(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);

  let powerOfTwo;

  if (sum > 0) powerOfTwo = Math.log2(sum);
  else console.log("по условиям задачи подойдет: 0");

  return Math.ceil(powerOfTwo);
}

const numbers = [0, 0, 0, 0, 0];
console.log(findNextPowerOfTwo(numbers));
