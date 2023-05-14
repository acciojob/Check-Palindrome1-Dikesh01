// complete the given function
let str = "racecar";
function palindrome(str){
	let is_palindrome = true;
	let i=0, j=str.length-1;
	while(i<=j  && is_palindrome){
		if(str[i]  != str[j]){
			is_palindrome= false;
			break;
		}
		i++;
		j--;
	}
console.log(is_palindrome ? "Palindrome" : "Not a Palindrome");
}
// module.exports = palindrome
