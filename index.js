// document.getElementById("count-el").innerText=5 
// let firstBatch=5
// let secondBatch=20
// let count =firstBatch + secondBatch

// console.log(count)

// // let myAge =22
// //  console.log(myAge)
// let myage =22
// let humanDogRatio =7
// let myDogAge=myage*humanDogRatio
// console.log(myDogAge)


// let count =5
 
// count = count +1  // 5 + 1
// count = count +10
// count = count -1
// console.log(count)

// let bonusPoints=50
// console.log(bonusPoints)
// bonusPoints=bonusPoints+50
// console.log(bonusPoints)
// bonusPoints=bonusPoints-75
// console.log(bonusPoints)
// bonusPoints=bonusPoints+45
// console.log(bonusPoints)



//chanllenge -0
function increments()
{
    console.log("The button was clicked")
}
increments()

function countdown()
{ 
    let n =1
     n++
    console.log(n)
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)

    
}
countdown()
countdown()

//chanllenge -1
function mylogger()
{
    console.log(42)
}
mylogger()

//chanllenge -2
let lap1 =34
let lap2 =33
let lap3 =36

function loglaptime()
{
    // let totaltime =lap1+lap2+lap3
    console.log(lap1+lap2+lap3)
}
loglaptime()

//challenge 3
let lapcompleted =0
 function addinglap()
 {
   lapcompleted=lapcompleted+1

 }
 addinglap()
 addinglap()
 addinglap()
 console.log(lapcompleted)








// people enteries module 




 //challenge -4


// document.getElementById("count-el").innerText=5 
// part-1:   document.getElementById("count-el")     asking element frome html file 
//  part-2:    .innerText=5                        modifying/  incrementing that element value



let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
// console.log(countEl)
 let count =0
 function increment()
 {
    //  count =count + 1
     count += 1 
     countEl.innerText=count
    //  console.log(count)
     console.log("clicked")


 }

 function save()
 {
    let countstr = count + " - "  
    // saveEl.innerText +=countstr
    saveEl.textContent +=countstr
    countEl.textContent= 0
    count = 0
     console.log(count)
 }
 save()
























 // string :
let username ='per'
 let message ="You have three new notification"
 let messagetouser= message +" ,"+ username +"!" // concatenating two strings/varibales

console.log(messagetouser)

//challenge -5
let Name='shivali umbarkar'
let greeting ="Hi,my name is "
let mygreeting = greeting + Name
console.log(mygreeting)

//string vs number
let points =4
let bonuspoints ="10"
let totalpoints = points + bonuspoints
console.log(totalpoints)


console.log(4 + 5)  // 9
console.log("2"+"4") // 24
console.log("5"+ 1)  //51
console.log(100+"100")   //100100


//practice time 

// chanllenge - 6
let firstname= "shivali"
let lastname="umbarkar"
 let fullname = firstname + " .s " + lastname
  console.log(fullname)

  // chanllenge -7

  let Name1= "Aditya"
  let Greeting ="Hi there, "

  function ABC()
  {
      console.log(Greeting + Name + "!")
  }
  ABC()

  //challenge -8

  let myPoints =3
   function add3points()
   {
       myPoints = myPoints + 3

   }
   function remove1point()
   {
       myPoints =myPoints - 1
   }
   add3points()
   add3points()
   add3points()


   remove1point()
   remove1point()




// if want ans 10 then call add3point() function 3 time and remove1points 2 time then will get 10 output
   console.log(myPoints)


   //chanllenge -9  
   console.log("2"+2 )   // 22
   console.log(11 + 7 )  //18
   console.log(6 + "5")   // 65
   console.log("My Points :" + 5 + 9)   // My Points : 59
   console.log(2+2)   // 4
   console.log("11"+ "14")    //1114
   
