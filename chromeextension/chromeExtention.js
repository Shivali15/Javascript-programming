// function button()
// {
//     console.log("Button  clicked")
// }


// chrome://extensions/


/*
//using `  ` symbols we can make array to string 
let myleads =`["www.awesome.com"]`

//turn the myleads string into array
// myleads=JSON.parse(myleads)

// push new value into the array
myleads.push("www.flower.com")

//turn array into a string again
myleads=JSON.stringify(myleads)

//console.log the string using typeof to verify that its a string 
console.log(typeof myleads)
*/

let myleads=[]
let oldleads=[]
// differnce between let n const is that const (constant) 
// change not be reassign or change remains constant
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")


// localStorage.setItem("myname","shivali umbarkar")
// let name=localStorage.getItem("myname")
// console.log(name)
// localStorage.getItem("set-el")
// localStorage.clear()


// console.log (localStorage.getItem("myleads"))  // pervious inserted data will  store and get in console 

//get the leads from the localstorage - JSON.parse
// store it in a variable ,leadsfromlocalstorage
const leadsfromlocalstorage= JSON.parse(localStorage.getItem("myleads"))
console.log(leadsfromlocalstorage)
//check if leadsfromlocalstorage is truthy
//is so, set myleads to its value and call renderleads()

if(leadsfromlocalstorage)
{
    myleads=leadsfromlocalstorage
    render(myleads)
}

// const tabs=[
//     {
//     url:"https://www.linkedin.com/feed/"}
// ]
tabBtn.addEventListener("click",function(){
//grab the Urlof the current tab!
// chrome.tabs.query({active:true,currentWindow:true},function(tabs){
// let activeTab =tabs[0]
// let activeTabId = activeTab.id
// })

chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myleads.push(tabs[0].url)
    localStorage.setItem("myleads",JSON.stringify( myleads ) )
    render(myleads)
})

    //save url instead of logging it out
    // console.log(tabs[0].url)
  

})

function render(leads)
{
   let listitems= ""
  for(let i=0;i<leads.length;i++)
   {
       //wrap the lead in an anchor tag <a> inside the <li>
       //can you make the link open in new tab  

    //  listitems += `<li><a target='_blank' href='"+ myleads[i]+ "'> " + myleads[i] +"</a> </li>`

     listitems += `<li>
     <a target='_blank' href='${leads[i]}'> 
     ${leads[i]}
     </a> 
     
     </li>`

   }
    ulEl.innerHTML =listitems
}
//listen for double click on th delete button 
//when clicked ,clear localstorage ,myleads and DOM

deleteBtn.addEventListener("dblclick",function(){
    console.log("double clicked ")
    localStorage.clear()
    myleads=[]
    render(myleads)
})

// log out that variable
console.log(leadsfromlocalstorage)

inputBtn.addEventListener("click",function()
{
 
    myleads.push(inputEl.value)
    //clear  out input field 
    inputEl.value=""
    localStorage.setItem("myleads",JSON.stringify(myleads))

    render(myleads)

    console.log(localStorage.getItem("myleads"))
})
