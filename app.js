let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt");
    let notes= localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
    notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);
    showNotes();
})
//function to show notes--//
function showNotes(){
    let notes= localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
    notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function (element,index){
        html+=`<div class=" notecard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Card title>Note ${index+1}</h5>
          <p class="card-text">${element
        }</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>`;
        
    });
    let notesElm=document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Nothig is there "Add a note" section above to add notes`
    }
}
//function to delete notes--
function deleteNote(index){
    console.log('You are deleting----',index);
    let notes= localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
    notesObj=JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}
//Searching elemeent .
/*let search=document.getElementById('searchTxt');
search.addEventListener("input",function(){

    let inputVal=search.value.toLowerCase();

html+=<form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" id="searchTxt" type="search" placeholder="Search" aria-label="Search" >
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>


    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none"; 
        }
       // console.log(cardTxt);

    })

})
*/

