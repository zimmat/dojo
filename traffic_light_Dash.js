var trafficlights = "There are 9 traffic lights on my way to work. On my way in 3 were red, 2 were green.";
  if (trafficlights[trafficlights.length-1] === ".")
    trafficlights = trafficlights.slice(0,-1);

var newlights = trafficlights
    .replace("There are ", "")
    .replace("on my way to work", "")
    .replace("On my way in", "")
    .replace("were","")
    .replace("were","")
    .replace(".",",");;
console.log(newlights);
var trimmedLights = newlights.trim();
console.log(trimmedLights);


var lights = trimmedLights.split(',');
// var traffic = [];
// lights.forEach(function(newlights){
//   traffic.push(newlights.split('were'));
//
// });
console.log(lights);
 lights.forEach(function(trimmedLights){
   var number = newlights.split(',')[0]
   var red = trafficlights.split(',')[1];
    var green = trafficlights.split(',')[1];
 });
 if  (products[productName] === undefined){
     products[productName] = productsQuantity;
   } else {
           products[productName] += productsQuantity;
   }
//   console.log(traffic);
