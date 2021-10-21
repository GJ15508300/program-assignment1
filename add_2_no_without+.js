console.log("Add two number without using '+' operator");
let x=5,y=2,carry=0;
while(y!=0)
{
    carry=x & y;
    x=x^y;
    y=carry<<1;
}
console.log("Sum of",x);
let a=5,b=10,c=0;
c=a-(-b);
console.log("Sum of a and b is =",c);