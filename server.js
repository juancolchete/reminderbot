const cron = require('node-cron');
const axios = require('axios');
var events = require('./events.json');
var data = {
    content: `Serviço reminder bot iniciado
              ${events}`,
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
events.forEach((element) => {
    cron.schedule(element.cron, function () {
        console.log('Aviso da daily');
        data = {
            content: element.content,
        };

        axios.post('https://discord.com/api/webhooks/900450969903566908/z3xKQc4GqI7KgNqdVle1WIqosJHwI3STpXIqq2KCUo5XCv1BtlAGUhVtewNk1IrNWDOe', data)
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data);
            }).catch((err) => {
                console.error(err);
            });
    });
})


