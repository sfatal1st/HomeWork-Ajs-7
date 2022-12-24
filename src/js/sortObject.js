export default function orderByProps(object, sortList) {
  const copyObject = Object.entries(object);
  const sortedList = [];
  const unsortedList = [];
  for (let i = 0; i < sortList.length; i += 1) {
    if (sortList[i] === copyObject[i][0]) {
      sortedList.push({ key: copyObject[i][0], value: copyObject[i][1] });
      copyObject.splice(i, 1);
    }
  }

  for (const [key, value] of copyObject) {
    unsortedList.push({ key, value });
  }

  unsortedList.sort((a, b) => (a.key > b.key ? 1 : -1));

  return sortedList.concat(unsortedList);
}
