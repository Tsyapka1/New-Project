 const arr = [1,'test', true, null, {name: 'User'}];

 const numbers = [12, 34, 55, 667, 8, 8];

Array.isArray(arr);

const arrMap = arr.map((elem, index, arr) => {
    elem++;
    return index + Math.random();
});

arr.forEach((elem, index, arr) => {
    console.log(elem);
});


const arrFilter = arr.filter((elem, index, arr) => {
    return elem;
});

const arrReduce = arr.reduce((prevValue,currentValue, index, arr) => {  return prevValue * currentValue; }, 1);

const arrConcat = arr.concat(); //Приклеивает значения или что либо

const arrJoin = arr.join();

