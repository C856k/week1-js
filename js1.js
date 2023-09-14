console.log(formatString("basic math functions"))

function add(n1, n2){
  return n1 +n2;
}
const sub = function(n1,n2){
 return n1 - n2
}
const cb = function(n1, n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);

};


console.log(formatString("What will this print?"))
 console.log( add(1,2) )     // What will this print?
 console.log( add )          // What will it print and what does add represent?
 console.log( add(1,2,3) ) ; // What will it print
 console.log( add(1) );	  // What will it print 	
 console.log(cb(3,3,add) ); // What will it print
 console.log(cb(4,3,sub) ); // What will it print
 console.log(cb(3,3,add)); // What will it print (and what was the problem)
 console.log(cb(3,"hh",add)); // What will it print

console.log
function mul(n1,n2){
  return n1 * n2;
}

const resultMul = cb(5,8,mul);
console.log(resultMul);

const Div = cb(6,2, function(n1,n2){
return n1 / n2;
});
console.log(Div);





  
  const names1 = ["Lars", "Peter", "Jan", "Ian"];
  const result = createHTMLList(names1);
  console.log(result);
  

  function createHTMLList(names) {
    const listItems = names.map(name => `<li>${name}</li>`);
    const html = `<ul>\n${listItems.join('\n')}\n</ul>`;
    return html;
  };

const names = ["Lars","Jan","Peter","Bo","Frederik"]
const shortNames = names.filter(name => name.length <= 3);
console.log(shortNames);



 const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];
  
  const newestCar = cars.filter(car => car.year > 1999);
  console.log(newestCar);
  
  const allVolvos = cars.filter(car => car.make = 'Volvo');
  console.log(allVolvos);

  const lowestPrice = cars.filter(cars => cars.price < 5000);
  console.log(lowestPrice);


const msgPrinter = function(msg,delay){
  setTimeout(()=> console.log(msg),delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

const person = {
  name: "Lenosa Crimsonleaf",
  birthday: "November 9, 459",
  hobby: "Gardening and herbalism",
  email: "Leno@crimson"
};
console.log(person);

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {changeBy(1);},
    decrement: function() {changeBy(-1);},
    value: function() { return privateCounter;}
  }
};
var counter1 = makeCounter();
var counter2 = makeCounter();



function formatString(str) {
  const desiredLength = 66
  const paddingLength = Math.max(0, desiredLength - str.length);
  const leftPadding = '-'.repeat(Math.floor(paddingLength / 2));
  const rightPadding = '-'.repeat(Math.ceil(paddingLength / 2));

  return '\n' + leftPadding + ' ' + str + ' ' + rightPadding ;
}
  
 
 




