inlets = 1;
outlets = 1;
myvalue = 0;

//functions can be called by messages sent to the js object.
//either send message "compile" to js object or "autowatch 1" for auto-save-reload
//Arguments:
//  "*After supplying a filename after the word js, you can type in additional arguments; these are available to your script’s global code or any function in an array property called jsarguments[]. jsarguments[0] is the filename of your script, jsarguments[1] is the first typed-in argument. jsarguments.length is the number of typed-in arguments plus one. In other words, if there are no typed-in arguments, the value of jsarguments.length will be 1.*"
//"*To define a function to respond to a number, you need to name the function msg_int or msg_float.*"
//"*To handle Max lists, i.e., a message that begins with a number, call your function list. In implementing a list function, you’ll probably want to use the Javascript arguments property, since otherwise you couldn’t handle input of varying length.*"
// To invoke a function when a patcher file containing the js or jsui object is loaded, define a function called loadbang(). This function will not be called when you instantiate a new js or jsui object and add it to a patcher; it will only be called when a pre-existing patcher file containing a js object is loaded - in other words, at the same time that loadbang objects in a patcher are sending out bangs. 
//"*Defining a function called getvalueof() permits pattr and related objects to attach to and query an object's current value. The value of an object returned can be a Number, a String, a Dict, or an Array of numbers and/or Strings.*"

post(jsarguments[0] + " hello k");

var counter = 0;


function getvalueof() {
    return myvalue; //change later...
}

function setvalueof(a) {
    myvalue = a;
}

function bang() {
    outlet(0, counter++);
    //post(max.getattrnames);
    var testLet = patcher;
    //post(patcher.firstobject.apppath);
    imageCreator("abkv.jpeg");
}

function list(a) {
    post("something");
}

function loadbang() {
    post("duh");
}

function msg_int(a) {
    post("something");
}

privateFunction.local = 1;
function privateFunction() {
    post("this function is private because I set local to 1");
}

 function save() {
    //embedmessage(funcName, data);
    //can functionally "save" data by calling save and embedding certain messages...

}

function globalMethods() {
    //calling every globla method....
    //cpost is system console, not max window
    cpost("where does this go compared to post?");
    error("can write your own errors...");
    //Sends a message to the named Max object. A named Max object is an object associated with a global symbol (not an object with a patcher-specific name). For example, Max receive objects are bound to global symbols.
    messnamed("flower", "bang");
    post("posts to max window");
}

function jsThisProperties() {
    //setting every jsthis property...
    // autowatch 1 sets the object to look after changes and recompile when they are made.
    //
    this.autowatch = 1;
    //Edit font size in textediting window
    this.editfontsize = 200;
    //reports inlet that triggered function
    var i = inlet;
    //set inlets count
    inlets = 5;
    //set insepector to 1 if you want max to look for inspector patch, whcih will be name of script (without .js) and plus -insp.pat.
    inspector = 1;
    //access to arguments including file
    var arg = jsarguments[1];
    // Lets you send any message to the object that controls the Max application. In addition, the max object has js-specific properties listed in the section on js Max Object Properties.***************** IMPORTANT************************
    //********************* */
    //see "Documentation: The Max Object"
    //time, properties, cmdkeydown,ctrlkeydown, optionkeydown, shiftkeydown, getattrnames, getattr, setattr
    //messagename, if calling in anything function, or if need messagename for ANY REASON
    //patcher object...****** IMPORTANT
    //********************see PATCHER OBJECT */
    outlets = 5;

}

function jsthismethods() {
    //arrayfromargs necessary for extracting variable arguments and also for conversion of the arguments to be converted to an Array
    var a = arrayfromargs(messagename,arguments);
    a.sort();
	outlet(0,a);
    //assist stuff for assist strings are detailed here ("jshis methods")

    // default getter/setter
    // var foo=2;
    // declareattribute("foo"); //simple

    // // default getter/setter and embed on save
    // declareattribute("foo",null,null,1);

    // // explicit getter/setter
    // declareattribute("foo","getfoo","setfoo");

    // function setfoo(v)
    // {
    // foo = v;
    // }

    // function getfoo()
    // {
    // return foo;
    // }

    // function bang()
    // {
    // outlet(0,foo);
    // }
    
    //setinletassist and setoutletassist
}

function patcherStuff() {
    //patcher's properties, methods, etc...
    var p = this.patcher;
    //this use of the "box" property could be used to traverse up to the top-level patcher
    var prev = 0;
    var owner = this.patcher.box;
    while (owner) {
        prev = owner;
        owner = owner.patcher.box;
    }
    if (prev)
    post("top patcher is",prev.patcher.name);
    //count is number of objects in patcher
    var num = p.count;

}

function imageCreator(a) {
    myimg = new Image(a);
}