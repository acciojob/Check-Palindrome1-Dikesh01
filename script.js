// complete the given function

function palindrome(str){
	let lowerStr = str.toLowerCase();
	let is_palindrome = true;
	let i=0, j=lowerStr.length-1;
	while(i<=j  && is_palindrome){
		if(lowerStr[i]  != lowerStr[j]){
			is_palindrome= false;
			break;
		}
		i++;
		j--;
	}
console.log(is_palindrome ? "Palindrome" : "Not a Palindrome");
}
palindrome(str)

module.exports = palindrome
