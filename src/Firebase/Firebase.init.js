import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initializeAuthentication=()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication
// how i did 
// 1 initial setup firebaseconfig 2. initializeAuthentication
// 3. Enable Auth method 

// step 2 
// a login component
// b signup compo
// c router for login signup

// step 3
// a google signin 
// b authchanged
// c logout method 
//  d export  from firebase

// step 4 
// a. auth  context create 
// b. create auth provider
// c . use auth provider
//  d. use auth hook craete 

// step 5
// a . create  private route 
//  b. set      "         "

//  step 6 
// a redirect home  after login  