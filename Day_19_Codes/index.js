const jsConvert = require('js-convert-case');
const uuid = require('uuid');
let usersArray = [
    {uname :  "steve jobs", email :  "STevE@gmail.com",  cartId  :  ""},
    {uname :  "smith dahl", email :  "smith@gmail.com",  cartId  :  ""},
    {uname :  "jason", email :  "jason@gmail.com",  cartId  :  ""},
    {uname :  "scott", email :  "scott@gmail.com",  cartId  :  ""},
    {uname :  "carlson", email :  "STevE@gmail.com",  cartId  :  ""}
        ];
for(let item of usersArray){
    item.cartId = uuid.v4();
}
for(let item of usersArray)
{
    console.log("User Id : "+jsConvert.toHeaderCase(item.uname)+ " , Email : "+jsConvert.toLowerCase(item.email)+" ,Card Id : "+jsConvert.toUpperCase(item.cartId));
}