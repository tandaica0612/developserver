let spin  = require('./AngryBirdSlot/spin');
let bonus = require('./AngryBirdSlot/bonus');
let log   = require('./AngryBirdSlot/log');
let top   = require('./AngryBirdSlot/top');

module.exports = function(client, data){
	 if (!!data.bonus) {
		bonus(client, data.bonus)
	}
	if (!!data.spin) {
		console.log(data.spin);
		spin(client, data.spin)
	}
	if (!!data.log) {
		log(client, data.log)
	}
	if (void 0 !== data.top) {
		top(client)
	} 
};