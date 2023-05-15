// complete the given function

function palindrome(str){
	let lowerStr = str.toLowerCase();
	// let is_palindrome = true;
	let i=0, j=lowerStr.length-1;
	while(i<=j ){
		// if(lowerStr[i]  != lowerStr[j]){
		if(lowerStr[i] !== lowerStr[j]){
				return false;
				break;
		}
		i++;
		j--;			
	}
return true;
// console.log(is_palindrome ? "Palindrome" : "Not a Palindrome");
}


module.exports = palindrome
