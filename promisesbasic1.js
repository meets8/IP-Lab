const bag = {
    books: 5,
    pens: 10,
    tiffin: 2
};
const bagContents = (resolve,reject) => {
    if(bag.books > 0){
        resolve('I have enough books');
        // bag.books = bag.books -1;
    } else {
        reject('I dont have any books left');
    }
}
const bookPerLecture = () => {
    return new Promise(bagContents);
}

let checkBooks = bookPerLecture();
console.log(checkBooks);

