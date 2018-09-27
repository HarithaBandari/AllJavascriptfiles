var sales='Toyota';
function carTypes(name){
    if(name=='Honda'){
        return name;
            }
            else{
                return "sorry,don't sell"+name + ".";

            }
}
var car={myCar:'Saturn' , getCar:carTypes('Honda'),special:sales};
console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);