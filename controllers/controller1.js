
const appURL ='http://127.0.0.1:8000/api';

$(document).ready(function (){
    if($(location).attr('href').endsWith('update-book.php')){
        gatUpdatableData();
    }else{
        displayBooks();
    }
})

function createCard(obj){
    const parent = document.getElementById('parent');
    var card = document.createElement("div");
    card.setAttribute("class","col-3 card");
    var cardContent = document.createElement("div");
    cardContent.setAttribute("class","col-12 card-content");
    var btnPane = document.createElement("div");
    btnPane.setAttribute("class"," col-12 card-btn-pane");
    cardContent.innerHTML ='<span class="book-title">'+obj.name+'</span><br>'+'<span>ISBN:</span><span>'+obj.isbn+'</span><br><span>Author:</span><span>'+obj.authors[0]+'</span><br><span>Country<span>'+obj.country+'</span><br><span>Number Of Pages:</span><span>'+obj.number_of_pages+'</span><br><span>Publisher:</span><span>'+obj.publisher+'</span><br><span>Release Date</span><span>'+obj.release_date+'</span>';
    card.appendChild(cardContent);
    btnPane.innerHTML='<button onclick="showUpdateForm('+obj.id+')">Update</button><button style="float: right" id="delete-book" onclick="deleteBook('+obj.id+')">Delete</button>';
    card.appendChild(btnPane);
    parent.appendChild(card);
}

function displayBooks(){
    $.ajax({
        type: 'get',
        url: appURL+'/v1/books',
        beforeSend: function (xhr){
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.setRequestHeader('Accept','application/json');
        },
        data:{},
        success: function (data){
            if (data.status_code === 200 && data.status === 'success'){
                for (let i = 0; i<10; i++){
                   createCard(data.data[i]);
                }
            }
        },
        error:function (xhr,status,error){
            console.log(JSON.parse(xhr.responseText));
        }
    })
}

function showUpdateForm(id){
    console.log(id);
    localStorage.setItem('bookId',id);
    window.location.href ='views/update-book.php';
}

function  updateForm(obj){
    document.getElementById('book-title').value = obj.bookTitle;
    document.getElementById('isbn').value = obj.isbn;
    document.getElementById('author').value = obj.authors;
    document.getElementById('country').value = obj.country;
    document.getElementById('pages').value = obj.pages;
    document.getElementById('publisher').value = obj.publisher;
    document.getElementById('release-date').value = obj.releaseDate;

}

function gatUpdatableData(){
    const formData = {
        bookTitle: "",
        isbn: "",
        authors: "",
        country: "",
        pages: "",
        publisher: "",
        releaseDate: ""
    }

    $.ajax({
        type:'get',
        url:appURL+'/v1/books/'+localStorage.getItem('bookId'),
        beforeSend: function (xhr){
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.setRequestHeader('Accept','application/json');
        },
        data:{},
        success: function (response){
            if(response.status_code === 200 || response.status === 'success'){
                formData.bookTitle = response.data[0].name;
                formData.isbn = response.data[0].isbn;
                formData.authors = response.data[0].authors[0];
                formData.country = response.data[0].country;
                formData.pages = response.data[0].number_of_pages;
                formData.publisher = response.data[0].publisher;
                formData.releaseDate = response.data[0].release_date;
            }
            updateForm(formData);
        },

        error: function (xhr, status, error){
            alert(JSON.parse(xhr.responseText).error);
        }
    })
}

function updateBook(){
    const formData = {
        name: document.getElementById('book-title').value,
        isbn: document.getElementById('isbn').value,
        authors: document.getElementById('author').value,
        country: document.getElementById('country').value,
        pages: document.getElementById('pages').value,
        publisher: document.getElementById('publisher').value,
        release_date: document.getElementById('release-date').value
    };
    $.ajax({
        type:'patch',
        url:appURL+'/v1/books/'+localStorage.getItem('bookId'),
        beforeSend: function (xhr){
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.setRequestHeader('Accept','application/json');
        },
        data:JSON.stringify(formData),
        success: function (response){
            if(response.status_code === 200 || response.status === 'success'){
                alert(response.message);
                window.location.href = "../index.php";
            }
        },
        error: function (xhr, status, error){
            alert(JSON.parse(xhr.responseText).error);
        }
    })
}

function deleteBook(id){
    $.ajax({
        type:'delete',
        url:appURL+'/v1/books/'+id,
        beforeSend: function (xhr){
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.setRequestHeader('Accept','application/json');
        },
        data:{},
        success: function (response){
            if(response.status_code === 204 || response.status === 'success'){
                alert(response.message);
                window.location.href = "index.php";
            }
        },
        error: function (xhr, status, error){
            alert(JSON.parse(xhr.responseText).error);
        }
    })
}