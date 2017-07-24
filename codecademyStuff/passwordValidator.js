
  

  function hasUppercase(input){
    for(var i=0; i<input.length; i++){
      if(input[i]===input[i].toUpperCase()){
        return true;
      }
    }
  }
 
  function hasLowercase(input){
    for(var i=0; i<input.length; i++){
			if(input[i]===input[i].toLowerCase()){
        return true;
      }
    }
  }
  function isLongEnough(input){
    if(input.length>=8){
      return true;
    }
  }
	function hasSpecialCharacter(input){
    var specialCharacters= ['!', '@', '#', '$', '%', '^', '&', '*'];
    for(var i=0; i<input.length; i++){
      for(var j=0; j<specialCharacters.length; j++){
        if(input[i]===specialCharacters[j]){
          return true;
        }
      }
    }
  }
  
function isPasswordValid(input){

  if(!hasUppercase(input)){
    console.log('You need an uppercase letter');
  }

  if(!hasLowercase(input)){
    console.log('You need a lowercase letter');
  }
 
  if(!isLongEnough(input)){
    console.log('You need a longer password');
  }
  if(!hasSpecialCharacter(input)){
    console.log('You need a special character in your password');
  }
  if(hasUppercase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacter(input)){
    console.log('Valid password');
  }
}
isPasswordValid('F*ckoff');