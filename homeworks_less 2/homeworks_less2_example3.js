<!DOCTYPE html>
<script>
"use strict";

let myInfo = {
    firstName:  'Майя',
    lastName: 'Борисевич',
    middleName: 'Константиновна',
    yearOfBearth: '1996',
    currentYear: new Date().getFullYear(),
    age: 0,
    studying: true,
    working: false,
  
};

let key = prompt("What do you want to know about a person?", "firstName");

let key = prompt("What do you want to know about a person?", "lastName");

let key = prompt("What do you want to know about a person?", "middleName");

let key = prompt("What do you want to know about a person?", "yearOfBearth");



alert( myInfo[key] );
alert( myInfo[key] );


</script>

