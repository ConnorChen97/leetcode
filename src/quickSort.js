const quick_sort = (arr) => {
    if(arr.length < 2) return arr;
    const index = Math.floor(arr.length / 2);
    const pivot = arr[index];
    const lessArr = [];
    const greeterArr = [];
    [...arr.slice(0, index), ...arr.slice(index + 1)].forEach(_ => {
        _ > pivot ? greeterArr.push(_) : lessArr.push(_);
    });
    return [...quick_sort(lessArr), pivot, ...quick_sort(greeterArr)];
}

const arr = [12,3,4,563,45,6,78];
console.log(quick_sort(arr));