var request= new XMLHttpRequest();
request.open("GET"," https://restcountries.com/v2/all");
request.send();
request.onload=function(){
  var result=JSON.parse(request.response);
  
  //a.Get all the countries from the Asia continent /region using the Filter function
  
var res1=result.filter((ele)=>ele.region=="Asia");
console.log(res1.map((ele)=>{return ele.population}));

//b.Get all the countries with a population of less than 2 lakhs using Filter function

var res2=result.filter((ele)=>ele.population<200000);
console.log(res2.map((ele)=>{return ele.name}));

//c.Print the following details name, capital, flag using forEach function

 result.forEach((country)=>{
    console.log("Name:" +country.name);
    console.log("capital:" +country.capital);
    console.log("flag:" +country.flag);

  });

//d.Print the total population of countries using reduce function

 var res3=result.reduce((a,b)=>a+b.population,0);
 console.log(res3);

//e.Print the country which uses US Dollars as currency

var res4=[];
 result.filter((ele)=>{
    for(let temp in ele.currencies){
        if(ele.currencies[temp].code=="USD"){
            res4.push(ele.name);

        }
    }
 });
 console.log(res4);
}