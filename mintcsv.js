var mintcsv =function(number,name) {	

var csv = require('csv');
var fs = require('fs');
var uuid = require('node-uuid');

// var entry =uuid.v1;

console.log(number,name);
// console.log(entry);


var Mds=function MDSToken(account_id,device_id){
	return account_id+ device_id;
}



var oneL=function oneLine(){
	
 return	uuid()+","+uuid()+","+Mds(uuid(),uuid());
	
}

for (var i=0;i < number;++i ){
	
 console.log(oneL());
	
}

return "my firt node moudle :)"
}

module.exports = mintcsv;