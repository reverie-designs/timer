let args = process.argv;
args = args.slice(2);
let num = [];
const alarm = function(time){
  if (time === undefined){
    return;
  }
 setTimeout(() => {
   process.stdout.write('\x07');
   console.log('alarm rang', time);
 }, time*1000);
}
for (let letter of args){
 letter = Number(letter);
 if (letter >= 1 ) { 
  num.push(letter);
  console.log(typeof letter);
 }
}
// console.log(num);
const ringAlarm = function (array, callback, stop){
 for(let item of array){
   callback(item);
   // console.log('!!!!', item);
 }
}
ringAlarm(num,alarm,)