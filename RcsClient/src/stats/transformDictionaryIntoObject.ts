export default function transformDictionaryIntoObject(obj: Object): Object[] {
  const arr: Object[] = []
  for (const playerData in obj) {
    arr.push(obj[playerData])
  }

  return arr
}