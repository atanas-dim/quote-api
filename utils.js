let idCounter = 13;

const getElementById = (id, elementList) => {
  return elementList.find((element) => {
    return element.id === Number(id);
  });
};

const getIndexById = (id, elementList) => {
  return elementList.findIndex((element) => {
    return element.id === Number(id);
  });
};

const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const createElement = (elementType, queryArguments) => {
  if (queryArguments.hasOwnProperty('quote') &&
      queryArguments.hasOwnProperty('person')) {
    idCounter += 1;
    let currentId = idCounter;
    return {
      'id':    currentId,
      'quote': queryArguments.quote,
      'person':  queryArguments.person,
    };
  } else {
    return false;
  }
};

const updateElement = (id, queryArguments, elementList) => {
  const elementIndex = getIndexById(id, elementList);
  if (elementIndex === -1) {
    throw new Error('updateElement must be called with a valid id parameter');
  }
  if (queryArguments.id) {
    queryArguments.id = Number(queryArguments.id);
  }
  Object.assign(elementList[elementIndex], queryArguments);
  return elementList[elementIndex];
};

module.exports = {
  getRandomElement,
  createElement,
  updateElement,
  getIndexById, 
  getElementById
};
