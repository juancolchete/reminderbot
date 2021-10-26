const cron = require('node-cron');
const axios = require('axios');
var events = require('./events.json');
const fs = require('fs');
const fileName = './events.json';
const file = require(fileName);

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
    cron.schedule('10 * * * *', function () {
        axios.get('https://gist.githubusercontent.com/juanudk/1379e49d78d2f54c66396fa36f4ef2e7/raw/deaf900825d48748f8b1369c6a042bf193d12bd3/events.json').then((res) => {
            fs.writeFile(JSON.stringify(res.JSON));
        })
    })
}

function scheduleMeets() {
    events.forEach((element) => {
        cron.schedule(element.cron, function () {
            data = {
                content: `O evento ${element.name} já vai começar @everyone \n link: ${element.link}`,
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