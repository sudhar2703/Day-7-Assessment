 //1.Solving problems using array functions on the rest countries data (https://restcountries.com/v3.1/all).
 //a.Get all the countries from the Asia continent /region using the Filter function
 var xhr1 = new XMLHttpRequest();
 xhr1.open('GET', 'https://restcountries.com/v3.1/all');
 xhr1.responseType = 'json';

 xhr1.send();

 xhr1.onload = function () { 
  var responseObj = xhr1.response;
   var result1= responseObj.filter(function(item1){
     return item1.continents=='Asia';
   });

   console.log(result1.map((item1)=>{
    return item1.name.common;
   }))
 }


 //b.Get all the countries with a population of less than 2 lakhs using Filter function
 var xhr2 = new XMLHttpRequest();
 xhr2.open('GET', 'https://restcountries.com/v3.1/all');
 xhr2.responseType = 'json';

 xhr2.send();

 xhr2.onload = function () { 
  var responseObj1 = xhr2.response;

   var result= responseObj1.filter(function(item){
     return item.population < 200000;
   });
   
  console.log(result.map((item)=>{
    return item.name.common
   }))
 }

 // 3.Print the following details name, capital, flag using forEach function
 var xhr3 = new XMLHttpRequest();
 xhr3.open('GET', 'https://restcountries.com/v3.1/all');
 xhr3.responseType = 'json';

 xhr3.send();

 xhr3.onload = function () { 
 var responseObj2 = xhr3.response;
  
  responseObj2.forEach((item2) => {
       console.log(` ${item2.name.common} , ${item2.flag}, ${item2.capital}`)
       
 })
 }

 //4.Print the total population of countries using reduce function
 var xhr4 = new XMLHttpRequest();
 xhr4.open('GET', 'https://restcountries.com/v3.1/all');
 xhr4.responseType = 'json';

 xhr4.send();

 xhr4.onload = function () { 
  var responseObj3 = xhr4.response;
 var final=[];
 responseObj3.forEach((item) => {
       final.push(item.population)      
 })
 var red=final.reduce((a,b)=>{
    return a+b;
 })
 console.log(red);
 }

 //E.Print the country which uses US Dollars as currency.
   
 var xhr5 = new XMLHttpRequest();
 xhr5.open('GET', 'https://restcountries.com/v3.1/all');
 xhr5.responseType = 'json';

 xhr5.send();

 xhr5.onload = function () { 
  var responseObj5 = xhr5.response;
  let result5=responseObj5.filter((data)=>{
  for(key in data.currencies)
 if(data.currencies[key].name=='United States dollar'){
        return data        
    }
  })
  console.log(result5.map((dollar)=>{
    return dollar.name.common
  }))
 }
    

