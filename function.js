                                // Admin Panel

let userName = prompt("Who's there?", '');
if (userName == 'Admin') {

 
                                // Site passWord        
let passWord = prompt('Password?', '');
if (passWord == 'TheMaster') {
alert( 'Welcome!' );
} else if (passWord == 'Cancel' || passWord == null) {
alert( 'Canceled.' );
} else {
alert( 'Wrong password.' );
}
} else if (userName == 'Cancel' || userName == null) {
alert( 'Canceled.' );
} else {
alert( "I don't know you." );
}

