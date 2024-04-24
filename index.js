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


