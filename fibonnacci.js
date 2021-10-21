console.log("Fibonacci Series");
let n1=-1,n2=1,n3=0,count=15;
for(let i=0;i<count;i++)
{
    n3=n1+n2;
    console.log(n3);
    n1=n2;
    n2=n3;
}