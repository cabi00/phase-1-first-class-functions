function receivesAFunction(salsa) {
    salsa(); 
}    

function returnsANamedFunction(){
    function L(){

    }
    return L;
}

function returnsAnAnonymousFunction(){
    
    return function(){};
}
/*
dance(salsa);
const tropicalDance = receivesAFunction (dance);
const spin = salsa(tropicalDance);
        receivesAFunction(spin);
        spin();

exerciseRoutine(function ()) {
    console.log("Stretch! Work that core!");
*/