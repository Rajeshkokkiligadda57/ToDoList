var text=document.getElementById("listtext");
var content=document.getElementById("listcontent");

function addTask()
{
    if(text.value === '')
    {
        alert("you must enter the value");
    }
    else
    {
        let li=document.createElement('li')
        li.innerHTML=text.value;
        content.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML='\u00d7'
        li.appendChild(span)
    }

    text.value=''
    saveData()
}

content.addEventListener("click", function(e){
    if(e.target.tagName === 'LI')
    {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === 'SPAN')
    {
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData()
{
    localStorage.setItem("d", content.innerHTML)
}

function showTask()
{
    content.innerHTML=localStorage.getItem("d");
}
showTask()
