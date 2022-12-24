export default function destructuring(object) {
  const result = [];
  for (const item of object.special) {
    const {
      id,
      name,
      description = 'Описание недоступно',
      icon,
    } = item;
    result.push({
      id,
      name,
      description,
      icon,
    });
  }
  return result;
}
