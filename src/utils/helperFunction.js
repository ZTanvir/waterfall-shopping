// get a random items from an array
function getRandomItems(itemList = []) {
  const size = itemList.length;
  const randomNumber = size > 0 ? Math.floor(Math.random() * size) : null;
  return itemList[randomNumber];
}

export default {
  getRandomItems,
};
