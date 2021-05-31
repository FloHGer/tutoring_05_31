function processInput(){
    let name = document.getElementById("input").value;                                      // WRITE THE VALUE OF THE ELEMENT WITH THE ID "INPUT" TO THE VARIABLE "NAME"
    if(name == "andrew"){                                                                   // CHECK IF THE INPUT IS "ANDREW"
        document.getElementById("output").innerHTML = "Hi Andrew, good to see you again";   // IF THE INPUT IS "ANDREW", WRITE THE TEXT TO THE ELEMENT WITH THE ID "OUTPUT"
    }else{                                                                                  // IN EVERY OTHER CASE (NOT "ANDREW")
        document.getElementById("output").innerHTML = "Welcome " + name;                    // IF THE INPUT IS NOT "ANDREW", WRITE THE TEXT AND THE VARIABLE "NAME" TO THE ELEMENT WITH THE ID "OUTPUT"
    }
}