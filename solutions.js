//Permute a Palindrome
function permuteAPalindrome (input) { 
    let obj = {};
    for(let i = 0; i < input.length; i++){
    let currChar = input.charAt(i);
    if(currChar in obj){
      obj[currChar]++;
    }else{
    obj[currChar] = 1;
    }
    }
    let oddCounter = 0;
    for(e in obj){
      if(obj[e] % 2 != 0){
        oddCounter++;
    }
    }
    if(oddCounter > 1){
    return false;
    }
    return true;
    
  }
  //Balanced braces with non brace characters
  function isBalanced(string) {
    let obj = {'(' : ')', '{': '}', '[': ']'};
    let numBalanced = 0;
    let arr = [')','}',']'];
    let numLeft = 0;
    let stack = [];
    let bal = true;
    for(let i = 0; i < string.length; i++){
    if(string.charAt(i) in obj){
    stack.push(string.charAt(i));
    }else{
    if(obj[stack[stack.length-1]] == string.charAt(i)){
    stack.pop();
    numBalanced++;
    }else if(arr.indexOf(string.charAt(i)) !== -1){
    stack.push(string.charAt(i));
    numLeft++;
    bal = false;
    }
    }
    }
    if(stack.length > 0){
    bal = false;
    }
    return [bal,numBalanced,stack.length];
  }
  //Magic the Gathering
  class Magic{
    constructor(){
    this.spells = [];
    }
    spellStack(obj){
    if(obj == undefined){
    if(this.spells.length == 0){
    throw new Error('Exception message');
    }else{
    return this.spells.pop();
    }
    }else{
    if(obj.type == "sorcery" && this.spells.length > 0){
    throw new Error('Exception message');
    }else{
    this.spells.push(obj);
    }
    }
    return this.spells.length;
    }
    }
    //get middle character
    function getMiddle(s)
    {
      if(s.length %2 == 0){
        return "" + s.charAt(s.length/2-1) + s.charAt((s.length/2));
      }else{
       return "" + s.charAt(Math.floor(s.length/2));
    }
}
    //sums digits of number
    function sumDigits(number) {
      let arr = ("" + number).split('');
      let sum = 0;
      let curr = 0;
      for(let i = 0; i < arr.length; i++){
        if(arr[i] == '-'){
        i++;
      }
        curr += arr[i];
        sum += Number(curr);
        curr = "";
      }
      return sum;
      }
    //get character count
    function letterFrequency(text){
        let obj = {};
        for(let i = 0; i < text.length; i++){
        if(text.charAt(i).match(/[a-zA-Z]/)){
          if(text.charAt(i).toLowerCase() in obj){
            obj[text.charAt(i).toLowerCase()]++;
          }else{
              obj[text.charAt(i).toLowerCase()] = 1;
          }
        }
        }
        let arr = [];
        for(e in obj){
        arr.push([e,obj[e]]);
        }
        arr.sort((a,b)=>{
        if(a[1] > b[1]){
        return -1;
        }
        if(a[1] < b[1]){
        return 1
        }
        if(a[0] > b[0]){
        return 1;
        }
        if(a[0] < b[0]){
        return -1
        }
        return 0;
        });
        return arr;
      }
      //find winning number in lottery draw 
      function lottery(str){
        let s = "";
        for(let i = 0; i < str.length; i++){
          if(!s.includes(str.charAt(i)) && str.charAt(i).match((/[0-9]/))){
            s+= str.charAt(i);
          }
        }
        if(s == ""){
          return "One more run!";
        }
         return s;
      }