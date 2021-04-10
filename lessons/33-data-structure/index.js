// quickSort
const partition = (arr, low, hight) => {
  const pivotPosition = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotPosition].order;
  while (hight >= low) {
    while (arr[hight].order > pivot) {
      hight--;
    }
    while (arr[low].order < pivot) {
      low++;
    }
    if (hight >= low) {
      const temp = arr[low];
      arr[low] = arr[hight];
      arr[hight] = temp;
      hight--;
      low++;
    }
  }
  return low;
};

const sort = (arr, low = 0, hight = arr.length - 1) => {
  if (low < hight) {
    const index = partition(arr, low, hight);
    sort(arr, low, index - 1);
    sort(arr, index, hight);
  }
  return arr;
};

const quickSort = (array) => {
  let sortedArray = [...array];
  sort(sortedArray);
  return sortedArray;
};

// toFloat
const toFlat = (array) => {
  const stack = [...array];
  const result = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  return result.reverse();
};

// binarySearch
const binarySearch = (array, searchValue) => {
  if (
    searchValue < array[0].amount ||
    searchValue > array[array.length - 1].amount
  ) {
    return;
  }
  let middle = Math.floor(array.length / 2);
  if (searchValue === array[middle].amount) {
    return array[middle];
  }
  if (searchValue < array[middle].amount) {
    return binarySearch(array.slice(0, middle), searchValue);
  }
  if (searchValue > array[middle].amount) {
    return binarySearch(array.slice(middle + 1), searchValue);
  }
};

//HashTanble
class HashTable {
  static getKeyByName(name) {
    return name.charCodeAt(0);
  }
  constructor() {
    this.map = new Map();
  }

  add(value) {
    const key = HashTable.getKeyByName(value.name);

    if (!this.map.has(key)) {
      this.map.set(key, new Map());
    }

    const ID = () => {
      return `${key}_${value.name}`;
    };

    this.map.get(key).set(ID(), value);
    return key;
  }

  find(name) {
    const key = HashTable.getKeyByName(name);
    const employeesMap = this.map.get(key);

    if (!employeesMap) {
      return;
    }

    return Array.from(employeesMap.values()).find((item) => item.name === name);
  }

  removeByName(name) {
    const key = HashTable.getKeyByName(name);
    const employees = Array.from(this.map.get(key));

    if (!employees) {
      return;
    }

    let employeesArr = employees.filter((item) => item.name !== name);
    this.map.set(key, employeesArr);
  }
}

module.exports = {
  quickSort,
  toFlat,
  binarySearch,
  HashTable,
};
