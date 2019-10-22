const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

//Worked on with @ Don Stevenson
stdin.on('data', (key) => {
 if (key === '\u0003') {
   console.log("thanks for using me, ciao");
   process.exit();
 }
 if (key === '\u0062'){
   process.stdout.write('\x07');
   console.log('alarm sounded at touch of b');
 }
 if (key <= '\u0039'&& key >'\u0030') {
   console.log('setting timer for', key);
   setTimeout(() => {
       process.stdout.write('\x07');
       console.log('alarm rang after', key, 'seconds');
     }, key*1000);
  }
});
console.log('Please press \'b\' to sound alarm, or set an alarm by pressing 1-9, to exit prest CTL + C');
