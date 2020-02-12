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
      //reverse sequence practice 
      const reverseSeq = n => { 
        let arr = [];
        for(let i = n; i > 0; i--){
        arr.push(i);
        }
        return arr;
      };
      //count number of divisors for any number
      function getDivisorsCnt(n){
        let i = 1;
        let numOfDiv = 0;
        while(i <=n){
          if(n%i==0){
          numOfDiv++;
          }
          i++;
        }
        return numOfDiv;
    }
    //function for pokemon attacks
    function calculateDamage(yourType, opponentType, attack, defense){
      let effective = 0;
      if(yourType == "fire"){
        if(opponentType == "fire" || opponentType == "water"){
          effective = 0.5;
        }else if(opponentType == "electric"){
          effective = 1;
        }else if(opponentType == "grass"){
          effective = 2;
        }
      }else if(yourType == "water"){
        if(opponentType == "grass" || opponentType == "water" || opponentType == "electric"){
          effective = 0.5;
        }else if(opponentType == "fire"){
          effective = 2;
        }
      }else if(yourType == "grass"){
        if(opponentType == "grass" || opponentType == "fire"){
          effective = 0.5;
        }else if(opponentType == "electric"){
          effective = 1;
        }else if(opponentType == "water"){
          effective = 2;
        }
      }else if(yourType == "electric"){
        if(opponentType == "electric"){
          effective = 0.5;
        }else if(opponentType == "fire"|| opponentType == "grass"){
          effective = 1;
        }else if(opponentType == "water"){
          effective = 2;
        }
      }
      return 50 * (attack/defense) * effective;
    }

    // parses data with keys to Return the output array, and ignore all non-op characters
function parse( data )
{
  let arr = data.split("");
  let num = 0;
  let finished = [];
  for(let i = 0; i < arr.length; i++){
  if(arr[i] == 'i'){
  num++;
  }else if(arr[i] == 'd'){
  num--;
  }else if(arr[i] == 's'){
  num*=num;
  }else if(arr[i]=='o'){
  finished.push(num);
  }
  }
  return finished;
}
//gradebook - easy 
function getGrade (s1, s2, s3) {
  let avg = (s1+s2+s3)/3;
  if(avg>= 90){
    return 'A';
  }else if(avg>=80){
    return 'B';
  }else if(avg>=70){
    return 'C';
  }else if(avg>=60){
    return 'D'
  }
  return 'F';
 }
 //figure out if sum of array is odd/even
 function oddOrEven(array) {
  if(array == []|| array == [0]){
    return "even";
  }
  let val = array.reduce((a,b)=>{
    return a + b;
  },0)
  if(val%2 == 0){
       return "even";
  }
  return "odd";
}
//find population infected by disease given a map
function infected(s) {
  let safe = 0;
  let infected = 0;
    let arr = s.split('X');
    arr.forEach((e)=>{
    if(e.includes('1')){
      infected += e.length;
    }else if(e != ''){
      safe += e.length;
    }
    })
    if(infected == 0){
    return 0;
    }
    return 100 * (infected/(infected+safe));
  }
  //find DNA compliment (shorthand two lines)
  function DNAStrand(dna){
    let comp = {'A':'T','T':'A','C':'G','G':'C'}
    return dna.split('').map((e,i)=>{return comp[dna[i]]}).join('');
   }
   //find content of an odd triangle given the row number 
   function oddRow(n) {
    let val =n * (n-1) +1;
    let arr = [];
    for(let i = 0; i < n; i++){
    arr.push(val);
    val+=2;
    }
    return arr;
  }
//check if number is tidy (in non-decreasing order)
function tidyNumber(n){
  let arr = ("" + n).split('');
  for(let i = 0; i < arr.length; i++){
    if(i != arr.length-1 && arr[i] > arr[i+1]){
      return false;
    }
  }
  return true;
}
//check if number is disarium
function disariumNumber(n){
  let arr = (""+n).split('');
  let num = 0;
  arr.forEach((e,i)=>{
  num += Math.pow(Number(e),(i+1));
  });
  if(num == n){
  return "Disarium !!";
  }
  return "Not !!";
}
//check if number is automorphic
function automorphic(n){
  let s = "" + n;
  n = n*n;
  let r = "" + n;
  if(r.slice(r.length-s.length,n.length) == s){
    return "Automorphic"
  }
  return "Not!!"


}
//find smallest number possible with list of numbers given (non-repeating)
function minValue(values){
  values = values.sort();
  let obj = {};
  let val = "";
  values.forEach((e)=>{
  if(e in obj){
   
  }else{
   val += "" + e;
    obj[e] = true;
  }
  })
  return Number(val);
}


//find out if a number is a "Jumping Number"
function jumpingNumber(n){
  if(n<10 && n>0){
    return "Jumping!!";
  }
  let s = "" + n;
  for(let i = 0; i < s.length-1; i++){
    if(Number(s.charAt(i)) ==( Number(s.charAt(i+1))-1) || Number(s.charAt(i)) ==( Number(s.charAt(i+1))+1)){   
    }else{
      return "Not!!";
    }
  }
  return "Jumping!!";
}
//zombie shooting game to see if player with ammo, range, and # of zombies can survive"
function zombie_shootout(zombies, range, ammo) {
  let killed = 0;
while (ammo > 0){
 ammo--;
 killed++;
 zombies--;
 range -= .5;
 if(zombies == 0){
   return "You shot all " + killed + " zombies."
 }else if(range == 0){
   return "You shot " + killed + " zombies before being eaten: overwhelmed."
 }else if(ammo == 0){
   return "You shot " + killed + " zombies before being eaten: ran out of ammo."
}
}
}
//find largest integer possible given numbers in a current integer
function superSize(num){
  return Number(("" + num).split('').sort().reverse().join(''))
}
//figure out possible words a priate may be saying
function grabscrab(anagram, dictionary) {
  let arr = [];
  let ana = anagram.split('').sort().join('');
  dictionary.forEach((e,i)=>{
  if(ana == e.split('').sort().join('')){
    arr.push(e);
  }
  })
  return arr;
}
//create an object wallet of least coins necessary to make change
const makeChange = (amount) => {
  console.log(amount);
   let wallet = {};
   if(amount >= 50){
     wallet.H = Math.floor(amount/50);
     amount -= (50 * wallet.H);
   }
   if(amount >= 25){
     wallet.Q = Math.floor(amount/25);
     amount -= (25 * wallet.Q);
   }
   if(amount >= 10){
     wallet.D = Math.floor(amount/10);
     amount -= (10 * wallet.D);
   }
   if(amount >= 5){
     wallet.N = Math.floor(amount/5);
     amount -= (5 * wallet.N);
   }
   if(amount > 0){
     wallet.P = amount;
    }
   return wallet;
  };

  //code to create Potion class for hogwarts with fucntion to mix to rgb colors and calvulate volume
  class Potion {
    constructor(colors, userVolume){
      this.color = colors,
      this.volume = userVolume
    }
    mix(otherPotion){
      let pot = new Potion([0,0,0],0);
      let vol = otherPotion.volume + this.volume;
      pot.volume = vol;
      let arr = [Math.ceil((otherPotion.color[0]*(otherPotion.volume/pot.volume))+(this.color[0]*(this.volume/pot.volume))),Math.ceil((otherPotion.color[1]*(otherPotion.volume/pot.volume))+(this.color[1]*(this.volume/pot.volume))),Math.ceil((otherPotion.color[2]*(otherPotion.volume/pot.volume))+(this.color[2]*(this.volume/pot.volume)))]
      pot.color = arr;
      return pot;
    }
  }
  //check which numbers in a given range are backwards-read primes
  function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num%i == 0){
        return false;
      }
    }
    return true;
    }
    
    function backwardsPrime(start, stop){
    let obj = {};
      let primes = [];
      for(let i = start; i <= stop; i++){
      let num = Number((""+i).split('').reverse().join(''));
      if(num==i){
        continue;
      }
      if(i in obj){
        primes.push(i);
        continue;
      }
        if(isPrime(i) && isPrime(num)){
          primes.push(i);
          obj.num = true;
        }
      }
        return primes;
    }
    //find the mine given a 2d map
    function mineLocation(field){
      for(let i = 0; i < field.length; i++){
        for(let j = 0; j < field[0].length; j++){
          if(field[i][j] == 1){
            return [i,j]
          }
        }
      }
    }
    //Bad vs Good battle (given race power and array of quantity of each)
    function goodVsEvil(good, evil){
      let good1 = [1,2,3,3,4,10]
      let bad1 = [1,2,2,2,3,5,10];
      let goodScore = 0;
      let badScore = 0;
      let goodArr = good.split(' ');
      let badArr = evil.split(' ');
      goodArr.forEach((e,i)=>{
        goodScore += (Number(e) * good1[i]);
      })
      badArr.forEach((e,i)=>{
        badScore += (Number(e) * bad1[i]);
      })
      if(goodScore > badScore){
        return "Battle Result: Good triumphs over Evil"
      }else if(badScore > goodScore){
        return "Battle Result: Evil eradicates all trace of Good"
      }else{
        return "Battle Result: No victor on this battle field"
      }
    }
    //return an array that contains the sums of each part of original array
    function partsSums(ls) {
      if(ls.length == 0){
      return [0];
      }
      let arr = [];
      arr.push(ls.reduce((a,b)=>{
        return a + b;
      },0))
      for(let i = 1; i < ls.length; i++){
        arr.push(arr[i-1]-ls[i-1]);
      }
      arr.push(0);
      return arr;
  }
  //challenge to see if you will be eaten by a shark
  function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin){
      sharkSpeed /= 2;
    }
    while(sharkDistance > 0){
      sharkDistance -= sharkSpeed;
      pontoonDistance -= youSpeed;
      if(pontoonDistance <= 0 && sharkDistance >0){
        return "Alive!";
      }
    }
    return "Shark Bait!"
  }
  //using regex expressions to find out how many letters or digits are in string
  function countLettersAndDigits(input) {
    let arr = input.split('');
    let lazy = arr.filter((e)=>{
    return e.match(/[A-Za-z0-9]/);
    });
    return lazy.length;
  }