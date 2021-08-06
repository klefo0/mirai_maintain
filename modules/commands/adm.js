module.exports.config = {
	name: "adm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Minh Quân",
	description: "Thông tin người điều hành bot",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Thông tin người điều hành bot:
Facebook: Nguyễn Minh Quân ( Klefo )
Username: @Klefo018
Giới tính: ( ͡° ͜ʖ ͡°)

Github: https://github.com/Klefo0`, event.threadID, event.messageID);