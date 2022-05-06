const arr = [];

function addArray(number) {
    if(number > 0) {
        const insertingValue = prompt('Enter string');
        arr.push(insertingValue);
        addArray(number - 1)
    };
} //Задача на рекурсию для добавления в массив
