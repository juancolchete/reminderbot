const cron = require('node-cron');
const axios = require('axios');
var data = {
        content: 'Serviço reminder bot iniciado',
    };
axios.post('https://discord.com/api/webhooks/900718418506965012/H33v3Y3ysTF3lqYhmajud6dEnC2ixLV2eaPMN5j1tTAYeJhljtWrytIamZjRsTBUMBUz', data)
        .then((res) => {
            console.log(`Status: ${res.status}`);
            console.log('Body: ', res.data);
        }).catch((err) => {
            console.error(err);
        });

console.log("=========================");
console.log("TOTVS Bot");
console.log("=========================");

cron.schedule('0 11 * * 1-5', function() {
    console.log('Aviso da daily');
    data = {
        content: 'A daily já vai começar @everyone',
    };
    
    axios.post('https://discord.com/api/webhooks/900450969903566908/z3xKQc4GqI7KgNqdVle1WIqosJHwI3STpXIqq2KCUo5XCv1BtlAGUhVtewNk1IrNWDOe', data)
        .then((res) => {
            console.log(`Status: ${res.status}`);
            console.log('Body: ', res.data);
        }).catch((err) => {
            console.error(err);
        });
  });

