var moment = require('moment');

var date = moment();
console.log(date.format('MMM Do, YYYY'));

var createdAt = 1234;
var date2 = moment(createdAt);
console.log(date2.format('h:mm a'));
