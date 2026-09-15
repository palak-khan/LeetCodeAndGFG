// Date: 15-09-2026
// Problem: 125. Valid Palindrome


var isPalindrome = function(name) {
 name = name.replaceAll(" ","")
name = name.replace(/[^a-zA-Z0-9]/g, '');
name = name.toLowerCase();
let left = 0;
let right = name.length - 1;
for(let i = 0; i < name.length; i++){
    if(name[left]==name[right]){
        left ++;
        right --;
    }
    else{
        return false;
    }
 
}
   return true
};
isPalindrome("A man, a plan, a canal: Panama")