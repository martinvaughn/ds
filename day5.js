function merge(list1, list2) {
    let i1 = 0;
    let i2 = 0;
    const merged = [];
    while (i1 < list1.length && i2 < list2.length) {
        if (list1[i1] < list2[i2]) {
            merged.push(list1[i1])
            //
            list1
        }
        if (list2[i2] < list1[i1]) {
            merged.push(list2[i2])
        }

    }
}


const main = () => {
    list1 = [2, 10, 20]
    list2 = [1, 2, 3]
    merge(list1, list2);
}