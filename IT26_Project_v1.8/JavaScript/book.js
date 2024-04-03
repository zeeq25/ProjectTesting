function u_getBookValues(x){




//for getting the ID# to the textbox
    var textbox1 = document.getElementById("book-id");
    var textbox2 = document.getElementById("book-title");

    textbox1.value = x.cells[0].innerHTML;
    textbox2.value = x.cells[1].innerHTML;


//for Alert // not that important
    var col1;
    var col2; 
    var col3; 
    var col4; 
    var col5;
    var col6;
    var col7;
    var col8;

    col1 = x.cells[0].innerHTML;
    col2 = x.cells[1].innerHTML;
    col3 = x.cells[2].innerHTML;
    col4 = x.cells[3].innerHTML;
    col5 = x.cells[4].innerHTML;
    col6 = x.cells[5].innerHTML;
    col7 = x.cells[6].innerHTML;
    col8 = x.cells[7].innerHTML;

    var Data = col1 + " " + col2 + " " + col3 + " " + col4 + " " + col5 + " " + col6 + " " + col7 + " " + col8;
    alert(Data);


}


function reserve(){

 var ID = document.getElementById("book-id");
 var Title = document.getElementById("book-title");
 
 alert("Borrowing Book-ID " + ID.value + " - " + Title.value);


    
}



 

//for admin
function a_getBookValues(x){

    //for getting the ID# to the textbox
        var textbox1 = document.getElementById("book-id");
        var textbox2 = document.getElementById("book-title");
        var textbox3 = document.getElementById("book-author");
        var textbox4 = document.getElementById("book-published-date");
        var textbox5 = document.getElementById("book-ddc-class");
        var textbox6 = document.getElementById("book-class-number");
        var textbox7 = document.getElementById("book-available");
        var textbox8 = document.getElementById("book-copies");
    
        textbox1.value = x.cells[0].innerHTML;
        textbox2.value = x.cells[1].innerHTML;
        textbox3.value = x.cells[2].innerHTML;
        textbox4.value = x.cells[3].innerHTML;
        textbox5.value = x.cells[4].innerHTML;
        textbox6.value = x.cells[5].innerHTML;
        textbox7.value = x.cells[6].innerHTML;
        textbox8.value = x.cells[7].innerHTML;
    
    
    //for Alert // not that important
        var col1;
        var col2; 
        var col3; 
        var col4; 
        var col5;
        var col6;
        var col7;
        var col8;
    
        col1 = textbox1.value;
        col2 = textbox2.value;
        col3 = textbox3.value;
        col4 = textbox4.value;
        col5 = textbox5.value;
        col6 = textbox6.value;
        col7 = textbox7.value;
        col8 = textbox8.value;
    
        var Data = col1 + " " + col2 + " " + col3 + " " + col4 + " " + col5 + " " + col6 + " " + col7 + " " + col8;
        alert(Data);

    
    }