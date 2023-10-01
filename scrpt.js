/* var fullName = "Promise Obioma"
var email = "Proekene16@gmail.com"
var password = "239494"
var confirmPassword = "9440394"
var isLoggedInFromGoogle = true;
console.log("Your full name is "+ fullName)
console.log("your email is "+ email)
console.log("congrats, you logged in from google:"+ isLoggedInFromGoogle) */
var email = true
var facebook = false
var google = false
// We make use of || (OR) to represent all the else and else if in the if condition loop statement
// if (email || facebook || google)
//     {console.log('login success')}

/* if(email)
{console.log('Login Success')}
if(facebook){console.log('login success')}
if(google){console.log('login success')}
else {console.log('Pls enter your correct details')} */

var authenticated = true;
/* if('authenticated'){
    console.log('show signout button')
}else{console.log('show login option')} */

authenticated ? console.log('signOut Button') : console.log('LOGIN')

/* Create an application with following roles using the switch and case rather than if :
admin: gets full access
subadmin: gets  access to create/delete courses 
user:gets access to consume the content */
var user = "user"
/* switch (user){
    case "admin":
        console.log('You get full access')
        break;
case "subadmin":
console.log('Access to delete courses')
break;
case "user":
console.log('Access to consume')
break;
default:
    console.log('trial user')
 break;
} */
/* function sayHello(name){
    console.log('Hello there, Hitesh');
    console.log('hello there,'+ name)
    console.log(`Hello there, ${name}. How are you?`)
}
sayHello('Hitesh')
sayHello("sammy") */
// function namstey(){
//     return "Hello in india"}
//     var greetings = namstey()
//     console.log(greetings)



/* Define a function that can answer the role of a user.replaceA user can be on following roles"
admin- with all access 
subadmin- with access to create/delete courses 
testprep- with access to create/delet texts 
user- consume all content  */
/* function getUserRole (name,role)
{
    switch (role){
        case "admin":
            return `${name} is admin with all access`
            break; // not needed when theres a return 
        case "subadmin":
            return `${name} is subadmin with access to create/delete courses`
        case "testprep":
            return `${name} is testprep with access to create and delete texts`
        default:
            return `${name} is a trial user with limited access to content`
    }
}
console.log(getUserRole('Promise')) */

function tipper(a){
    var bill = parseInt(a);
    console.log(bill+5)
}
tipper("8");
















































































































































































































































































































































































































