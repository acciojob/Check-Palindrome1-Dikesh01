// complete the given function

function palindrome(str){
	let is_palindrome = true;
	let i=0, j=str.length-1;
	while(i<=j){
		if(str.charAt(i) !=str.charAt(j)){
			is_palindrome= false;
			break;
		}
		i++;
		j--;
	}
	is_palindrome ? console.log("palindrome")  : console.log("not a palindrome")
	
}
module.exports = palindrome
