"use strict";
//exports.__esModule = true;
var Books = /** @class */ (function () {
    function Books(id, bookName, rating, price, authorName) {
        this.id = id;
        this.bookName = bookName;
        this.rating = rating;
        this.price = price;
        this.authorName = authorName;
    }
    return Books;
}());
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.arr = [];
    }
    BookManager.prototype.display = function (arr) {
        var template1 = "\n            <tr>\n                <td><center></center></td>\n                <td><center></center></td>\n                <td><center></center></td>\n                <td><center></center></td>\n                <td><center></center></td>\n                <td><center></center></td>\n            </tr>";
        document.getElementById("entries").innerHTML = template1;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != null) {
                var id = arr[i].id;
                var bname = arr[i].bookName;
                var rating = arr[i].rating;
                var price = arr[i].price;
                var aname = arr[i].authorName;
                var template = "\n            <tr>\n                <td><center>" + id + "</center></td>\n                <td><center>" + bname + "</center></td>\n                <td><center>" + rating + "</center></td>\n                <td><center>" + price + "</center></td>\n                <td><center>" + aname + "</center></td>\n                <td><center><Button onclick=\"deleteRecord(" + id + ")\">Delete</Button></center></td>\n            </tr>";
                document.getElementById("entries").innerHTML += template;
            }
        }
    };
    BookManager.prototype.searchById = function (arr, searchValue) {
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            if (searchValue == arr[i].id) {
                res[i] = arr[i];
            }
        }
        this.display(res);
    };
    BookManager.prototype.searchByName = function (arr, searchValue) {
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].bookName.toLowerCase().includes(searchValue.toLowerCase())) {
                res[i] = arr[i];
            }
        }
        this.display(res);
    };
    BookManager.prototype.searchByRating = function (arr, searchValue) {
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            if (searchValue == arr[i].rating) {
                res[i] = arr[i];
            }
        }
        this.display(res);
    };
    BookManager.prototype.searchByPrice = function (arr, searchValue) {
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            if (searchValue == arr[i].price) {
                res[i] = arr[i];
            }
        }
        this.display(res);
    };
    BookManager.prototype.searchByAuthor = function (arr, searchValue) {
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].authorName.toLowerCase().includes(searchValue.toLowerCase())) {
                res[i] = arr[i];
            }
        }
        this.display(res);
    };
    return BookManager;
}());
var arr = [{ id: "1", bookName: "World War 1", rating: "3", price: "300", authorName: "Jonathan Boff" },
    { id: "2", bookName: "World War 2", rating: "4", price: "450", authorName: "Antony Beevor" },
    { id: "3", bookName: "American History", rating: "4", price: "500", authorName: "Brent Glass" },
    { id: "4", bookName: "The Enlightenment", rating: "3", price: "360", authorName: "Jonathan Israel" },
    { id: "5", bookName: "Napoleon", rating: "4", price: "200", authorName: "Andrew Roberts" }];
var Manager = new BookManager;
Manager.display(getLocalStorage());
function select() {
    var selectValue = document.getElementById("select").value;
    return selectValue;
}
function search() {
    count = 0;
    var selectValue1 = select();
    var searchValue = document.getElementById("Particulars").value;
    var updatedBook = getLocalStorage();
    switch (selectValue1) {
        case "BookId":
            Manager.searchById(updatedBook, searchValue);
            break;
        case "BookName":
            Manager.searchByName(updatedBook, searchValue);
            break;
        case "Rating":
            Manager.searchByRating(updatedBook, searchValue);
            break;
        case "price":
            Manager.searchByPrice(updatedBook, searchValue);
            break;
        case "AuthorName":
            Manager.searchByAuthor(updatedBook, searchValue);
            break;
    }
}
var count = 0;
function show() {
    Manager.display(getLocalStorage());
}
function addBook() {
    var bookId = document.getElementById("id").value;
    var bookName = document.getElementById("name").value;
    var rating = document.getElementById("rating").value;
    var price = document.getElementById("price").value;
    var authorName = document.getElementById("author").value;
    var existingBookList = getLocalStorage();
    existingBookList.push(new Books(bookId, bookName, rating, price, authorName));
    updateLocalStorage(existingBookList);
}
function updateLocalStorage(arr) {
    localStorage.setItem('item', JSON.stringify(arr));
}
function getLocalStorage() {
    return (JSON.parse(localStorage.getItem('item')));
}
function clear123() {
    updateLocalStorage(arr);
}
function deleteRecord(id) {
    alert("success");
    var dle = getLocalStorage();
    for (var i = 0; i < dle.length; i++) {
        if (dle[i] != null) {
            if (id == dle[i].id) {
                dle[i] = null;
            }
        }
    }
    updateLocalStorage(dle);
    show();
}
