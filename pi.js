var lcdi2c = require('lcdi2c');
var lcd = new lcdi2c(1, 0x27, 16, 2);

var gpio = require('onoff').Gpio;
var pir = new gpio(12, 'in', 'both');
pir.watch(function(err, value) {
    if (value == 1) {
        sendMessage('Intruder alert');
    } else {
        sendMessage('Intruder gone');
    }
});

function sendMessage(message) {
    var currentTime = new Date();
    lcd.clear();
    lcd.println(currentTime.toTimeString().substring(0, 8), 1);
    lcd.println(message, 2);
}

sendMessage('It worked!');