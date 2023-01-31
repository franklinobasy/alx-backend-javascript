export default function updateUniqueItems(map) {
  if (!map || !(map instanceof Map)) {
    return new Error('Cannot process');
  }

  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}
