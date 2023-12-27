"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library{
    #books = [];
    constructor(books){
        this.#books = books; 
    }

    get allBooks(){
        return this.#books;
    }

    addBooks(title){
        try{
            if (this.hasBook(title))
                throw new Error(`Книга "${title}" уже содержится в библиотеке!`)
            else 
                this.#books.push(title);
        }catch(e){
            console.log(e.message);
        }
    }

    removeBook(title){
        try{
            if (this.hasBook(title)){
                let index = this.allBooks.indexOf(title);
                if (index !== -1) this.allBooks.splice(index, 1);
            }else    
                throw new Error(`Книги "${title}" в библиотеке нету!`);
        }catch(e){
            console.log(e.message);
        }
    }

    hasBook(title){
        if (this.allBooks.includes(title)) return true; 
    }
}

function validateBooks(books){
    const temp = new Set();
    books.forEach(el => {
        temp.add(el);
    })
    if (temp.size !== books.length)
        return false;
    return true;
}

const books = ["Война и мир.", "Унисенные ветром."];
// const books = ["Война и мир.", "Унисенные ветром.", "Война и мир."];


try{
    if (!validateBooks(books)){
        throw new Error(`В библиотеке встречаются повторяющиеся книги!`)
    }else{
        const library = new Library(books);
        library.addBooks("Молчание ягнят.");
        // library.addBooks("Война и мир.");
        library.removeBook("Война и м.")
 
        console.log(library.allBooks);
    }
}catch(e){
    console.log(e.message);
}







