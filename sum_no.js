let a=12,c=0,sum=0;
while(a>0)
{
    c=a%10;
    sum=sum+c;
    a=a/10;
}
console.log("Sum of number is",sum);