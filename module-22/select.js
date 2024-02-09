function booksQulaty(history , mathmatics, english){
    const perBooksHistory = 5;
    const perBooksMathmatics = 10;
    const perBooksEnglish = 15;

    const totalHistory = perBooksHistory * history;
    const totalMathmatics = perBooksMathmatics * mathmatics;
    const perTotalEnglish = perBooksEnglish * english;

    const totalBooks = totalHistory + totalMathmatics + perTotalEnglish;
    return totalBooks
}
const book = booksQulaty(2,5,0);
console.log(book)