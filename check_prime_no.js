console.log("To check Given number is Prime or NOT");
let n=24,count=0,i=2;
while(i<=n/2)
{
    if(n%2==1)
    {
        count=1;
        break;
    }
    i++;
}
if(count==0)
{
    console.log("Given number is prime nunmber");
}
else{
    console.log("Given number is NOT prime nunmber");
}