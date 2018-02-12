// IIFE - Immediately Invoked Function Expression
// sometimes called a self-excuting anonymous function
(function(){
    let name = "Pedro";
    let otherName = "Ash";


    function Start() {
        console.log("application starting");

        console.log(`The guy in not in this class is ${name}`);
        console.log(`The girl bound to do well in this class somehow is ${otherName}`);
        Main();
    }

    function Main() {
        console.log("App Started");
    }

    window.onload = Start;
})();