function binarySearch(list, item) {
    var min = 0;
    var max = list.length - 1;
    var centralValue;
    while (min <= max) {
        centralValue = Math.floor((min + max) / 2);
 
        if (list[centralValue] === item) {
            return centralValue;
        }
        else {
            if (list[centralValue] < item) {
                min = centralValue + 1;
            }
            else {
                max = centralValue - 1;
            }
        }
    }
 
    return -1;
}

console.log(
binarySearch([2,6,7,90,103], 60)
)
