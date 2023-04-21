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
	channels: ["80bsaget"]
	
};

var client = new tmi.client(options);
client.connect();


client.on("subscription", (channel, username, method, message, userstate) => {
    client.action("80bsaget", "x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe")
    ;
});

client.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    client.action("80bsaget", "x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe")
    ;    
    let senderCount = ~~userstate["msg-param-sender-count"];
});

client.on("submysterygift", (channel, username, numbOfSubs, methods, userstate) => {
    client.action("80bsaget", "x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe")
    ; 
    let senderCount = ~~userstate["msg-param-sender-count"];
});

client.on("giftpaidupgrade", (channel, username, sender, userstate) => {
     client.action("80bsaget", "x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe")
    ; 
});

client.on("resub", (channel, username, months, message, userstate, methods) => {
     client.action("80bsaget", "x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe x80bEvil x80bLyfe")
    ; 
    let cumulativeMonths = ~~userstate["msg-param-cumulative-months"];
});


















