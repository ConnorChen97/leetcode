const search = (height) => {
    let max = 0;
    for (let i = 0; i < height.length - 1; i ++) {
        for (let j = i + 1;j < height.length;j ++) {
            max = Math.max((Math.min(height[i], height[j]) * Math.abs(i - j)), max);
        }
    }
    return max;
}

const search2 = (height) => {
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    while (i < j) {
        max = Math.max(max, Math.abs(Math.abs(i - j) * Math.min(height[i], height[j])));
        height[i] < height[j] ? i++ : j--;
    }
    return max;
}

console.log(search([1, 1]));