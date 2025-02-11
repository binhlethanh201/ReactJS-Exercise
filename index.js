//exercise 1: Find composite number < 100
function isComposite(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) return true;
    } return false;
}
console.log("Composite number < 100 are:");
let arr3= [];
for (let i = 2; i < 100; i++) {
    if (isComposite(i)) {
        arr3.push(i);
    }
}
console.log(arr3.join(" "));


//exercise 2: Find 10 second prime numbers
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("10 second prime numbers are: ")
let arr0 = [];
for (let i = 1; i < 200; i++) {
    if (isPrime(i)) {
        arr0.push(i);
    }
}

console.log(arr0.slice(10, 20).join(" "));


//exercise 3: Find the development of prime numbers N
let N = 36;
let ele = [];
let counts = [];
console.log("The development of prime numbers N are:");
for (let i = 2; i <= N; i++) {
  let count = 0;
  while (N % i === 0) {
    count++;
    N /= i;
  }
  if (count > 0) {
    ele.push(i); 
    counts.push(count); 
  }
}

let output = [];
for (let i = 0; i < ele.length; i++) {
  if (counts[i] > 1) {
    output.push(`${ele[i]}^${counts[i]}`);
  } else {
    output.push(`${ele[i]}`);
  }
}
console.log(output.join("*"));


//exercise 4: Delete odd elements in an array
let arr =[1,2,3,4,5,6]
    let newArr = arr.filter((element,index) => index %2 == 0);
    console.log("array with odd elements deleted:" +newArr);

//exercise 5: Convert string
let S = "hello342q5hh999";
let S1 = S.replace(/\d/g,"$");
console.log("Convert S: " +S1);

//exercise 6: Find the longest string
let arr1 =["hello","arigato","xinchao","byebye"];
let longest = arr1.reduce((x,y) => x.length > y.length ? x:y,"");
console.log("Longest string: " +longest);



