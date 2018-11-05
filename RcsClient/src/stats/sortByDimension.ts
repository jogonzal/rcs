export default function sortByDimension(arr: object[], dimension: string) {
  arr.sort((a, b) => {
    if (a[dimension] < b[dimension]) {
      return 1
    }
    if (a[dimension] > b[dimension]) {
      return -1
    }
    // a must be equal to b
    return 0
  })
}