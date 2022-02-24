// chanllenge -1
let age = 20
 if(age<=21)
 {
     console.log("You can not entre the club  ")
 }
 else{
     console.log("Welcome!")

 }

 //challenge -2

 let Age=100

 if(Age < 100)
 {
     console.log("Not elegible")
 }
else if(Age == 100)
{
    console.log("Here is your birthday card from the king!")
}
else{
    console.log("Not elegible, you have already gotten one ")
}


console.log(4 === 3) //false
console.log(5 > 2)    //true
console.log(12 > 12)  //false
console.log(3 < 0)  //false
console.log(3>=3)   //true
console.log(11 <= 11) //true
console.log(3 <= 2) // false



//Arrays
 let cards=[7,4]

 cards.push(6)
 
  let message =["hii","shivali ","barbie"]
  
  let newmessage ="good morning!"
  message.push(newmessage)
console.log(message)
message.pop(newmessage)
console.log(message)



// For loop

for(let count=1;count<21;count+=2)
{
    console.log(count)
}
for (let count=10;count<101;count+=5)
{
    console.log(count)
}

// for loop + arrays

let arr=["apple","banana","grapes","gauva","lemon"]
for (let i=0;i<5;i++)
{
    console.log(arr[i])
}

// for loop + array + DoM
 let sentence=["hello","Welcome","to","my","home"]
 let greetingEl=document.getElementById("greeting-el")
 for(let i=0;i<sentence.length;i++)
 {
     greetingEl.textContent+=sentence[i] + " "
    //  console.log(greetingEl)
 }

 //returning value to funtion
  
 let playertime1 = 102
 let playertime2 = 107
 function getfastracetime()
 {
if(playertime1 < playertime2)
{
    return playertime1
}else if(playertime2 < playertime1)
{
    return playertime2
} else{
    return playertime1
}

 }

 let fastestrace =getfastracetime()
 console.log(fastestrace)


 // challenge -3
 function totalracetime()
 {
     return playertime1+playertime2
 }
 let Abc = totalracetime()
 console.log(Abc)
    
    
    //math function

    // let randomnumber = Math.floor(Math.random()* 6) +1
    // console.log(randomnumber)

    //floor() -  removes decimal
    //random() -return no.s between 0.000 - 0.999



//dice game 

function rolldice()
{
    let randomnumber = Math.floor(Math.random()* 6) +1
    return randomnumber

}
console.log(rolldice())

// logical AND operator  &&
// if both statments are true then  return true
// other wise false 

let hascompletdcourse= true
let givecertificate = true

if(hascompletdcourse === true && givecertificate === true)
{
    generatecertificate()

}
function generatecertificate()
{
    console.log("Genrating certificate ....... ")
}

// challenge -3

let hassolvedchallenges = true
let hashintleft = false
if(hassolvedchallenges === false && hashintleft === false)
{
    showsolution()
}

function showsolution()
{
    console.log("showing the solution ")
}

// logical OR operator ||

// from both any is true then return true 

let likesdocumentaries = false
let likesStartups = false

if(likesStartups === true || likesStartups === true)
{
    recommendmovies()
}
 function recommendmovies()
 {
     console.log("Hey , check out this new file we think you will like !")


 }


 // Creating an object 

 let course ={

    title:" learn css , HTML , C++, C" ,
    lessons : 16,
    creator :" shivali umbarkar" ,
    length :63,
    level :2,
    isfree:true,
    tags:["html","css"]
 }
 console.log(course.length)
 console.log(course .tags)
 
 // creating of object

 let castle={
     title : "Live likea king in my castle",
     price: 190,
     issuperhost: true

 }
 console.log(castle.price)
 console.log(castle.issuperhost)


 //practice time
 //challenge -1

 let person ={
     name:"shivali umbarkar",
     age:23,
     country:"India"

 }
 function logdata()
 {
     console.log(person.name +"is "+person.age +"years old "+ "and lives in "+person.country)
 }

 logdata()


 //challenge -2

 let AGE=75
 if(AGE <6)
 {
     console.log("free to travel")
 }else if(AGE <18)
 {
     console.log("child have discount")
 }
 else if(AGE <27)
 {
     console.log("student discount")
 }
 else if(AGE< 67)
 {
     console.log("full price")
 }
 else{
     console.log("senior citizen discount")
 }

 //challenge -3 
 //array +loops

 let largecountries =["INDIA","America","Japan","UAE","Russcia"]

 for(let i=0;i<5;i++)
 {
     console.log("-  "+largecountries[i])
 }

 //challenge -4
 
 let largecountry =["tokeyo","America","Japan","UAE","Monoco"]

 largecountry.pop("monoco")
 largecountry.push("Russcia")
console.log(largecountry)

largecountry.shift("tokeyo")
largecountry.unshift("INDIA")

console.log(largecountry)


//challenge -5
// logical AND

let dayofmonth=13
let weekday="friday"

if(dayofmonth===13 && weekday==="friday")
{
    console.log("####")
}

//challenge -6
// function return random item

let hands=["rock","paper","scissor"]

function  abc()
{
    let randomindex= Math.floor(Math.random(hands)*3)
    return hands[randomindex]
}
console.log(abc())

//challenege = fruits

let fruit =["Apple","Orange","Apple","Apple","Orange"]
let appleshelf=document.getElementById("apple-shelf")
let orangeshelf=document.getElementById("orange-shelf")


function sortfruit()
{
    for(let i=0;i<fruit.length;i++)
    {
        if(fruit[i]==="Apple")
        {
            appleshelf.textContent +="Apple " + " "
        }else if(fruit[i]==="Orange")
        {
            orangeshelf.textContent +="Orange  "+ " "

        }
    }
}
sortfruit()


// challenge :   const 
//constant : variable which can not reassign 

const baseprice= 520
const discount =120
let shippingcost = 12
let shippingtime="5-12 days"

shippingcost =15
shippingtime="7-14 days"


const fullprice = baseprice -discount+ shippingcost

console.log("Total cost:" + fullprice +". It will arrive in  " + shippingtime)


//chanllenge : innerHTML

const contain=document.getElementById("container")
  contain.innerHTML = "<button onclick='buy()'> BUY!  </button>"
function buy()
{
    contain.innerHTML += "<p>Thank you for buying !</p>"
}



//challenge  : template strings /literals

const recipient ="James"
const sender ="shivali umbarkar"

//refactor the email string to use template strings

const email =` Hey  ${recipient} !
               How is it going ? 
               Cheers ${sender} `
console.log(email)


// challenge : truthy  and falsy vallue 

console.log( Boolean("")   )  //false
console.log( Boolean("0")   )   //true
console.log( Boolean(100)   )   //true
console.log( Boolean(null)   )   //false
console.log( Boolean([0])   )  // true 
console.log( Boolean(-0)  )    //false   negative value


//challenge - parameterized function 

const welcomeEl=document.getElementById("welcome-el")

 function greetuser(name){
     welcomeEl.textContent="welcome back,"+name+"##"
 }

 greetuser("shivali")


 //challenge -2

 const WelcomeEl=document.getElementById("Welcome-el")

 function greetuser1(greeting,Name){
     WelcomeEl.textContent= greeting+","+Name
 }

 greetuser1("Thank you ","shivali umbarkar")

 //challenge -3  template literals

 
 const WELCOMEEl=document.getElementById("Welcome-El")

//              -----parameters------
 function Greetuser1(greeting,Name){
     WELCOMEEl.textContent= `${greeting } , ${Name}`
 }
//              --arguments---
 Greetuser1("Great ","shivali umbarkar")


 //challenge -4
//   add two numbers and return sum 

function Add(num1,num2)
{
//   let sum= num1+num2
//   console.log(sum)
return num1 + num2
}
console.log(Add(3,4))



//challenge -4   function passing array 

function  getfirstitem(arr)
    {
        return arr[1]
    }
    let firstitem=getfirstitem(["apple","banana","grapes"])
    console.log(firstitem)