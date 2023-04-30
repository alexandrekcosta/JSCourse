var now = new Date()
var clock = now.getHours()

console.log("It is "+clock+" hours")

if(clock < 6){

    console.log("Good night!")

}else if(clock < 12){

    console.log("Good morning!")

}else if(clock < 18){

    console.log("Good afternoon!")

}else{

    console.log("Good evening!")

}
