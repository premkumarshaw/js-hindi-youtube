const accountId = 144553 //the value can not be changed
let accountEmail = "prem@google.com" //this is the modern way 
var accountPassword = "12345" //nowadays var is not used.

accountCity = "Jaipur" //it is also possible but it is not a good way
let accountState;

// accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); //this is console table.


/*prefer not use var keyword
beacause of issue in block scope and functional scope
 */