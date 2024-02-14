const inputBox = document.getElementById("input-box");
const listItems = document.getElementById("list-items");
const histData=document.getElementById("hist-data");
function addTask()
{
    if(inputBox.value ==='')
    {
        alert("Enter Your Task");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listItems.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
        saveData();
        historyData();
    }

    inputBox.value='';

}

listItems.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked") ; 
        saveData(); 
        historyData();
        
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function historyData()
{
    localStorage.setItem("history",listItems.innerHTML);
}
function saveData()
{
    localStorage.setItem("data",listItems.innerHTML);
}

function showData()
{
    listItems.innerHTML=localStorage.getItem("data");
}

function showHistory()
{
    histData.innerHTML=localStorage.getItem("history");
}

showHistory();
showData();

