var tmi = require('tmi.js');

var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect:true
	},
	identity: {
		username: "Fatality_RL",
		password: "oauth:8aw4skigxms09il879u1cn0sj8g9uf"
	},
	channels: ["dasMEHDI"]
	
};

var client = new tmi.client(options);
client.connect();





client.on("subscription", (channel, username, method, message, userstate) => {
    client.action("dasMEHDI", "mehdiH mehdiH mehdiH mehdiH")
    ;
});

client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    client.action("dasMEHDI", "mehdiH mehdiH mehdiH mehdiH")
    ;    
    let senderCount = ~~userstate["msg-param-sender-count"];
});

client.on("submysterygift", (channel, username, numbOfSubs, methods, userstate) => {
    client.action("dasMEHDI", "mehdiH mehdiH mehdiH mehdiH")
    ; 
    let senderCount = ~~userstate["msg-param-sender-count"];
});

client.on("giftpaidupgrade", (channel, username, sender, userstate) => {
     client.action("dasMEHDI", "mehdiH mehdiH mehdiH mehdiH")
    ; 
});

client.on("resub", (channel, username, months, message, userstate, methods) => {
     client.action("dasMEHDI", "mehdiH mehdiH mehdiH mehdiH")
    ; 
    let cumulativeMonths = ~~userstate["msg-param-cumulative-months"];
});


















