inlets = 1;
outlets = 1;

//functions can be called by messages sent to the js object.
//either send message "compile" to js object or "autowatch 1" for auto-save-reload
//Arguments:
//  "*After supplying a filename after the word js, you can type in additional arguments; these are available to your script’s global code or any function in an array property called jsarguments[]. jsarguments[0] is the filename of your script, jsarguments[1] is the first typed-in argument. jsarguments.length is the number of typed-in arguments plus one. In other words, if there are no typed-in arguments, the value of jsarguments.length will be 1.*"
//"*To define a function to respond to a number, you need to name the function msg_int or msg_float.*"
//"*To handle Max lists, i.e., a message that begins with a number, call your function list. In implementing a list function, you’ll probably want to use the Javascript arguments property, since otherwise you couldn’t handle input of varying length.*"
// To invoke a function when a patcher file containing the js or jsui object is loaded, define a function called loadbang(). This function will not be called when you instantiate a new js or jsui object and add it to a patcher; it will only be called when a pre-existing patcher file containing a js object is loaded - in other words, at the same time that loadbang objects in a patcher are sending out bangs. 

post(jsarguments[0] + " hello k");


function msg_int(a) {
    post("something");
}

function loadbang() {
    post("duh");
}

function list(a) {
    post("something");
}