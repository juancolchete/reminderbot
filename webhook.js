const cron = require('node-cron');
const axios = require('axios');
var events = require('./events.json');

function startBot() {
    console.log("=========================");
    console.log("TOTVS Bot");
    console.log("=========================");
    var data = {
        content: 'Serviço reminder bot iniciado\n ```JSON\n'+JSON.stringify(events, null, "  ")+'\n```',
    };
    axios.post('https://discord.com/api/webhooks/900718418506965012/H33v3Y3ysTF3lqYhmajud6dEnC2ixLV2eaPMN5j1tTAYeJhljtWrytIamZjRsTBUMBUz', data)
        .then((res) => {
            console.log(`Status: ${res.status}`);
            console.log('Body: ', res.data);
        }).catch((err) => {
            console.error(err);
        });
}

function scheduleMeets() {
    events.forEach((element) => {
        cron.schedule(element.cron, function () {
            data = {
                content: `O evento ${element.name} já vai começar @everyone`,
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
}
module.exports = { startBot, scheduleMeets }