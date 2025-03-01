let testData = {
    col1: 'data1',
    col2: 'data2',
    col3: 'data3',
};

const testData1 = {
    col4: 'data4',
    col5: 'data5',
    col3: 'data33',
};

// 방법 1: Object.assign() 사용
const mergedData1 = Object.assign({}, testData, testData1);
console.log(mergedData1);

// 방법 2: 스프레드 연산자(...) 사용
const mergedData2 = { ...testData, ...testData1 };
console.log(mergedData2);
