export {} 
class Books {
    id: string;
    bookName: string;
    rating: string;
    price: string;
    authorName: string;
    constructor(id: string, bookName: string, rating: string, price:string,authorName: string) {
        this.id = id;
        this.bookName = bookName;
        this.rating = rating;
        this.price = price;
        this.authorName = authorName;
    }
}
class BookManager {
    arr: Books[] = []
    display(arr: Books[]) {
        let template1 = `
            <tr>
                <td><center></center></td>
                <td><center></center></td>
                <td><center></center></td>
                <td><center></center></td>
                <td><center></center></td>
                <td><center></center></td>
            </tr>`;
        document.getElementById("entries").innerHTML = template1;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]!=null){
            let id = arr[i].id;
            let bname = arr[i].bookName;
            let rating = arr[i].rating;
            let price = arr[i].price;
            let aname = arr[i].authorName;

            let template = `
            <tr>
                <td><center>${id}</center></td>
                <td><center>${bname}</center></td>
                <td><center>${rating}</center></td>
                <td><center>${price}</center></td>
                <td><center>${aname}</center></td>
                <td><center><Button onclick="deleteRecord(${id})">Delete</Button></center></td>
            </tr>`;
            document.getElementById("entries").innerHTML += template;}
        }
    }
    searchById(arr, searchValue) {
        let res:Books[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (searchValue == arr[i].id) {
            res[i] = arr[i];
            }
        }
        this.display(res);
    }
    searchByName(arr, searchValue) {
        let res:Books[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].bookName.toLowerCase().includes(searchValue.toLowerCase())) {
            res[i] = arr[i];
        }
    }
        this.display(res);
    }
    searchByRating(arr, searchValue) {  
        let res:Books[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (searchValue == arr[i].rating) {
            res[i] = arr[i];
            }
        }
        this.display(res);
    }
    searchByPrice(arr, searchValue) {
        let res:Books[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (searchValue == arr[i].price) {
            res[i] = arr[i];
            }
        }
        this.display(res);
    }
    searchByAuthor(arr, searchValue) {
        let res:Books[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].authorName.toLowerCase().includes(searchValue.toLowerCase())){
            res[i] = arr[i];
            }
        }
        this.display(res);
    }
}
let arr: Books[] = [{ id: "1", bookName: "World War 1", rating: "3",price:"300", authorName: "Jonathan Boff" },
{ id: "2", bookName: "World War 2", rating: "4", price:"450",authorName: "Antony Beevor" },
{ id: "3", bookName: "American History", rating: "4",price:"500", authorName: "Brent Glass" },
{ id: "4", bookName: "The Enlightenment", rating: "3", price:"360",authorName: "Jonathan Israel" },
{ id: "5", bookName: "Napoleon", rating: "4",price:"200", authorName: "Andrew Roberts" }]
let Manager = new BookManager;
Manager.display(getLocalStorage());

function select() {
    var selectValue = (<HTMLInputElement>document.getElementById("select")).value;
    return selectValue;
}
function search() {
    count=0;
    var selectValue1 = select();
    var searchValue = (<HTMLInputElement>document.getElementById("Particulars")).value;
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
let count=0;
function show() {
        Manager.display(getLocalStorage());
}
function addBook() {
    let bookId = (<HTMLInputElement>document.getElementById("id")).value;
    let bookName = (<HTMLInputElement>document.getElementById("name")).value;
    let rating = (<HTMLInputElement>document.getElementById("rating")).value;
    let price = (<HTMLInputElement>document.getElementById("price")).value;
    let authorName = (<HTMLInputElement>document.getElementById("author")).value;
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
    let dle = getLocalStorage();
    for(let i=0;i<dle.length;i++){
        if(dle[i]!=null){   
        if(id==dle[i].id)
        {
            dle[i] = null;
        }
        }
    }
    updateLocalStorage(dle);
    show();
}