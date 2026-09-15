let name = "A man, a plan, a canal: Panama"
name = name.replaceAll(" ","")
name = name.replace(/[^a-zA-Z0-9]/g, '');
name = name.toLowerCase();
console.log(name);

let left = 0;
let right = name.length - 1;
for(let i = 0; i < name.length; i++){
    if(name[left]==name[right]){
        console.log("Match");
        left ++;
        right --;
    }
    else{
        return console.log("Not match")
    }
}
