// alert("hello");

// // Strings + common string methods //

// let firstname = 'Abid';
// let lastname = 'Khan';
// let fullname = firstname + '  ' +  lastname ;
// console.log (fullname);

// // getting characters
// console.log(fullname[3]);

// // string length
// console.log(fullname.length);

// // strings methods
// console.log(fullname.toUpperCase());
// let result = (fullname.toLowerCase());
// console.log(result);

// // index
// let index = fullname.indexOf('h');
// console.log(index);

// let email = 'mohammadabid1978004@gmail.com';
// //let result1 = email.lastIndexOf(0);

// // let result1 = email.slice(0,8);

// // let result1 = email.substring(2,17);

// // let result1 = email.replace ('m', 'a');

// console.log(result1);

///*****  Numbers     *****/
// let radius = 10;
// const pi = 3.14;
// // math operators +, -, /, ++, %
// console.log ( 10/2 );
// console.log ( radius % 3 );
// console.log ( pi * radius ** 2 );

// // Order of BIDMAS

// console.log(5 * (10-3) ** 2);

// let likes = 10;
// // likes = likes + 1;
// // likes ++;
// // likes += 10;
// // likes -=5;
// // likes *=3;
// //  console.log(likes);

// // NAN - Not a Number
// console.log(5/'hello');
// console.log(5* 'hello');

// let result = 'the blog has ' + likes + '  ' +pp 'Likes';
// console.log (result);

//***    Trmplate String        ***/

// const title = 'Best reads of 2029';
// const Author = 'Abid';
// const likes = 30;

// // Concatenation way
// // let result = 'The Blog has title' + title + 'by' + 'author' + 'has' + likes + 'Likes';
// // console.log(result);

// // Template string way
// // let result = `The Blog called ${title} by ${Author} has ${likes} likes`
// // console.log(result);

// //Creating HTML templates
// let html = `
// <h1>${title}</h1>
// <p>${Author}</p>
// <span>This blog has ${likes} likes</span>
// `
// console.log(html);

//***    ARRAYS       ***/
//
// ninjas [1] = 'ken';
// console.log(ninjas[1]);

// let ages = [12,13,14];
// console.log(ages[2]);

// let random = [12,13, 'Abid', 'Khan'];
// console.log(random);

// Array Method //
// let result = ninjas.join('--');
// let result = ninjas.indexOf('KHAN');

// let result = ninjas.concat(['BRAY','WYATT']);
// result = ninjas.push('DELL');
// // result = ninjas.pop('DELL');
// console.log(result);

//*** Boolean and comparisons ***//
// console.log(true,false, 'true','false');

//methods can return booleans//

// let email = 'khan@gmail.com';
// let result = email.includes('@');
// let names = ['this', 'that', 'those'];
// let result = names.includes('that');
// console.log(result);

//Comparison operators//

// let age = 23;
// console.log(age == 23);
// console.log(age == 21);
// console.log(age != 21);
// console.log(age > 21);
// console.log(age < 23);
// console.log(age <= 23);
// console.log(age >= 23);

// let name = 'shaun';
// console.log(name ==  'shaun');
// console.log(name ==  'Shaun');
// console.log(name >  'chaun');
// console.log(name >  'Shaun'); // lowercase letters are greater than uppercase
// console.log(name >  'chaun');

//  let age = 25;
// loose comparison (Different types can be still equal)
// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

//strict comparison operator //
// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

/***  Type Conversion ***/

// let score = '100';
// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// console.log(result);

// let result = String(50);
// let result = Boolean(23);
// let result = Boolean('0');
// console.log(result, typeof result);

// let result1 = Boolean ('0');
// console.log(result1, typeof result);

/** CONTROL FLOW  **/
// FOR LOOP//
// for(let i = 0; i < 5; i++ ){
//     console.log('in loop', i);
// }
// console.log('Loop ended');

// const names = ['This', 'That', 'Them'];
// for (let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// // WHILE LOOP//
// const names = ['This', 'That', 'Them'];
// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++
// }

// // DO WHILE LOOP//
// let i = 5;
// do{
//     console.log('loop in progress', i);
//     i++;
// }
// while(i < 10);

// // IF STATEMENT //
// const age = 25;
// if (age > 23){
//     console.log('your age is 25');
// }
// const group = ['this','that','him'];
// if(group.length > 2){
//     console.log('Array acquired');
// }

// const password = 'password';
// if(password.length >= 5){
//     console.log('That password is long enough');
// }

// // ELSE IF STATEMENT //
// const password = 'Target_acquired'
// if (password.length >= 19){
//     console.log('Your Password is strong');
// }
// else if (password.length >= 20){
//     console.log('Your Password is not strong');
// }
// else {
//     console.log('Make your password strong');
// }

// Logical Operators //

// const password = 'Target_acquired'
// if (password.length >= 29 && password.includes('_')){
//     console.log('Your Password is strong');
// }
// else if (password.length >= 20 || password.includes('_') && password.length >= 50 ){
//     console.log('Your Password is not strong');
// }
// else {
//     console.log('Make your password strong');
// }

// Logical Not//

// let user = false;

// if(!user){
//     console.log("You must go ");

// }
// console.log(!true);
// console.log(!false);

/// BREAK AND CONTINUE ////

// let user = ["This", "That", "They", "Them", "Here", "Where", "There"];
//     for (let  i = 0; i < user.length; i++) {

//         if(user[i] === "That" ){
//             continue;  // Continue Will Just Break out Of the current Loop
//         }
//         console.log("These are Objectives",user[i]);

//         if(user[i] === "They"){
//         console.log("You Got It")
//         break; // Break will Completely Break out the whole loop
//         }
//     }

/// Switch Statement ///

// let grade = 70;

// switch (grade) {
//     case 10:
//         console.log('Grade A');
//          break;
//     case 20:
//         console.log('Grade B');
//          break;
//     case 30:
//         console.log('Grade C');
//          break;
//     case 40:
//         console.log('Grade D');
//          break;
//     case 50:
//         console.log('Grade E');
//          break;
//     case 60:
//         console.log('Grade F');
//          break;
//     case 70:
//         console.log('Grade G');
//          break;

//     default:
//         console.log('Not a Good Grade');

// }

/// Variable AND Block Scope ///

/// Note VAR keyword Doesnot Follow The Local or golbal variables rules once its
/// declared it is accessed everywhere while the CONST and LET and follow Global and LOcal VARiables Rules.
// let age = 30;
// // let age = 34; // In the same scope you cant redifine a variable value

// if(true){
//     let age = 45;
//     const name = 'Shan';
//     console.log("inside the 1st codeblock", age, name);

//     if(true){
//         let age = 34;
//         console.log("inside the 2nd codeblock", age);
//     }
// }

// console.log("outside the codeblock", age);

//////////************ FUNCTIONS ***************///////////////////////
////////////////////// CHAPTER 4 ///////////////////////////////////////
// Hoisting Works in Function declration but it doesnt work in functions expression

//Function Declration
// function weekend(){
//     console.log('Hey its Sunday');
// }
// weekend();

// //Function Expression
// const Sports = function weekend(){
//     console.log('hey its Sunday');
// }
// weekend();
// console.log(Sport);

// Prime numbers
// function primeno(start, End) {
//   for (let i = start; i <= End; i++) {
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (i > 1 && isPrime == true) {
//       console.log(i);
//     }
//   }
// }
// primeno(1, 20);

////// Arguments And Parameters
///if we dont pass any values in the funcion the it will use default values in it

// const spot = function(name = 'Ali', time = 'Evening'){
//     console.log(`Good ${time} ${name}`);
// };
//  spot();
//  spot ('ABID', 'Morning');

//// Returnin Values To A Function

// {
// //     let area = 3.14 * radius**2 + height+5;
// //     return area;
// }
//     const calcarea = function (radius,height)
//           {
//             return  3.14 * radius**2 + height+5;

//           }
// const area = calcarea(2,1);
// console.log(area);

// const calvol = function(area, length){
//         return area * length * 2;
// }
// const vol = calvol (area,2 );
// console.log (vol);

////// Arrow Funtions ///////
// const area = (radius,length) =>  3.14* radius**2 + length*1;

// const area1 = area (5,1);
// console.log('area is',area1);

// const great = (Hello) => "hello";
// const result = great();
// console.log('This is ', result);

// /////// Functions VS Methods ////////
// const name1 = 'Abid';
// // Functions

// const greet = () => 'Hello';
// let resultone = greet();
// console.log (resultone);

// //Methods
// let resultTwo = name1.toLowerCase();
// console.log(resultTwo);

///// CallBack and For Each Method///////
// let people = ['Abrar','Babar','Ali'];
// people.forEach (person => {
//     console.log(person);
// });

////// Call BAck Functions in Actions///////////

// const ul = document.querySelector('.people');
// const people = ['Abrar', 'Khan', 'Ali', 'Khan'];
// let html = ``;
// people.forEach (person => {
//     html += `<li style = "colour: purple">${person}</li>`;

// });
// console.log(html);
// ul.innerhtml  = html;

//////////////////// OBJECTS //////////////////////////
// let user = {
//     name: 'Harry',
//     age: 25,
//     class: "8th WallFlower",
//     Blogs:['Hello Every Is there', 'Yeah All are there']

// };
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// user  ['name'] = 'Ali';
// console.log(user);
// console.log(typeof user);

/////////////// Adding methods to Objects //////////////////
// let user = {
//     name: 'Harry',
//     age: 25,
//     class: "8th WallFlower",
//     Blogs:['Hello Every Is there', 'Yeah All are there'],
//     login: function(){
//         console.log('The User has Logged in');
//     },
//     logout: function(){
//         console.log('The User logged out');
//     }, --> A method attached to our object

// };
// console.log(user);
// user.login();
// user.logout();

///////// This And Arrays of Objects ///////////////

// const video = {
//     title: 'a',
//     age: 23,
//     letters: ['a', 'b', 'c'],
//     showletters(){
//         this.letters.forEach(function(tags){
//             console.log(this.title, tags);
//         }, this);
//     }
//     // play (){
//     //     console.log(this);
//     // }
// };
// video.showletters();
// // function video1 (){
// //     this.title = this
// //     console.log(this);

// //     }
// // const v = new video1('title')
// // // video.play(this)

/////////  Arrays of Objects ///////////////

// const movie = {
//     blogs:[
//         {title: "Hello Cristie" , likes: 50},
//         {title: "Hello Holand" , likes: 60},

//     ]
// };
// console.log(movie.blogs);

///////////// Maths Funtion /////////////////
// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));

/////////////// Primitive And reference Values /////////////////
/// Primitive types (no, strings and booleans) are stored in the stack
// let scoreone = 50;
// let scoretwo = scoreone;
// console.log(`scoreone: ${scoreone}`, `scoretwo: ${scoretwo}` );

// scoreone = 100;
// console.log(`scoreone: ${scoreone}`, `scoretwo: ${scoretwo}` );

// //// Reference types ////
// // Reference types (All types of objects, Arrays and Functions)  are stored in heap and both the pointers from the stack target the same value in the heap so if updated one it change the other too
// const score1 = {name: 'Allen ' , age: 30 };
// const score2 = score1 ;
// console.log(score1 , score2);

// score1.age = 31;
// console.log(score1 , score2);

////////////// DOM /////////////////////

// const body = document.body
// // body.append("Hello World","Bye", 121);

// const div =  document.createElement('div')
// div.innerText = "HYE" // to put text in the div
// div.innerHTML = "<strong>Hello World 2</strong>"
// body.append(div)

// const div = document.querySelector("div")
//  console.log(div.textContent)
//  console.log(div.innerText)

// const body = document.body
// const div = document.querySelector("div")
// const spanHi = document.querySelector("#Hi")
// const spanBye = document.querySelector("#Bye")

// spanBye.remove()
// div.append(spanBye)
// div.remove()

// console.log(spanHi.getAttribute("id"))
// console.log(spanHi.setAttribute("title", "were"))
// console.log(spanHi.removeAttribute("title", "were"))
// console.log(spanHi.datatest)
// console.log(spanHi.setAttribute("datatest.longername" , "bbbb"))

// spanHi.dataset.newname = "qwer"
// spanHi.classList.add("new-class")
// spanHi.classList.toggle("hi4", true)

//////// Adding and changing Page Content
// spanHi.style.color = "yellow"
// spanHi.style.backgroundColor = "black"

// const para = document.querySelector("p")
// // console.log(para.innerText)
// // para.innerText +="Lolly";
// const paras = document.querySelectorAll("p")
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += 'Poppy';
// }
//     );

// const Content = document.querySelector(".content");
// // console.log(Content.innerHTML);
// // Content.innerHTML = '<h2>This is a new Content</h2>';

// const people = ["This", "That", "Thoses"];
// people.forEach((person) => {
//   Content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https//www.lollywood.com");
// link.innerText = "The webseries";

// const p = document.querySelectorAll("p");
// // p.setAttribute("class", "error");
// // p.setAttribute("style", "color: green");
// console.log(p[1].textContent);
// p[1].style.color = "Brown";

// const title = document.querySelector("p");
// // title.setAttribute("style", "margin: 50px");
// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = "50px";
// title.style.color = "blue";
// title.style.fontSize = "50px";
// title.style.margin = "";
// Most of the time that we Are ADDING or removing just a single style are used this way

//// Adding and removing Classes

// const content = document.querySelector("p");

// console.log(content.classList);
// content.classList.add("error");
// content.classList.add("error");
// const paras = document.querySelectorAll("p");
// paras.forEach((p) => {
//   if (p.textContent.includes("content")) {
//     p.classList.add("error");
//   }
// });

// const title = document.querySelector(".paper");

// title.classList.toggle("test");
// title.classList.toggle("test");

///////////// Parents, Children & Siblings //////////////

// const title = document.querySelector("div");
// // console.log(title.children);
// // console.log(Array.from(title.children));

// // Array.from(title.children).forEach((child) => {
// //   child.classList.add("article-element");
// // });

// const article = document.querySelector("h1");
// console.log(article.parentElement);
// console.log(article.nextElementSibling);
// console.log(article.parentElement.parentElement);

///////// Events Basics (Click evets) //////////////

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   console.log("You clicked this");
// });

// const ul = document.querySelector("ul");

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "something New to do";
//   ul.prepend(li);
//   //   ul.innerHTML += '<li> "Something New" </li>'; // 2nd method
// });

// // const items = document.querySelectorAll("li");
// // items.forEach((items) => {
// //   items.addEventListener("click", (e) => {
// //     // console.log("item is clicked");
// //     // console.log(e.target);
// //     // console.log(items);
// //     // e.target.style.textDecoration = "line-through";
// //     console.log("event in LI");
// //     e.stopPropagation();
// //     e.target.remove();
// //   });
// // });
// ul.addEventListener("click", (e) => {
//   // console.log("event in UL");
//   if (e.target.tagName === "LI") {
//     e.target.remove();
//   }
// });

////////////////// More DOM Events ////////////////////////////
// const copy = document.querySelector(".copy-me");
// copy.addEventListener("copy", () => {
//   console.log("Oh! My content is copyright");
// });

// const box = document.querySelector(".box");
// box.addEventListener("mousemove", (e) => {
//   // console.log(e);
//   // console.log(e.offsetX, e.offsetY);
//   box.textContent = `x pos - ${e.offsetX} y pos-${e.offsetY}`;
// });

/////////////////// Building a POP ////////////////////////////

const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

button.addEventListener("click", () => {
  popup.style.display = "block";
});
close.addEventListener("click", () => {
  popup.style.display = "none";
});
popup.addEventListener("click", () => {
  popup.style.display = "none";
});
