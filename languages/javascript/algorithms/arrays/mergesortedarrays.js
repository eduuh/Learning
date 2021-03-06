const mergeSortedArray = (first, second) => {
  if (!Array.isArray(first) || !Array.isArray(second)) {
    return "Value not array"
  }

  const sorted = []
  let firstitem = first[0]
  let seconditem = second[0]
  let i = 1
  let j = 1

  // let handle empty case
  if (first.length === 0) {
    return second
  }

  if (second.length === 0) {
    return first
  }

  while (firstitem || seconditem) {
    if (!seconditem || firstitem < seconditem) {
      sorted.push(firstitem)
      firstitem = first[i]
      i++
    } else {
      sorted.push(seconditem)
      seconditem = second[j]
      j++
    }
  }
  return sorted
}

console.log(mergeSortedArray([1, 3, 4, 30], [1, 4, 8]))
