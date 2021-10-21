console.log("Print the Number of Prime number available in 1 to 100");
let prino,n=1,count;
while(n<=100)
{
    count=0;
    prino=2;
    while(prino<=n/2)
    {
        if(n%prino==0)
        {
            count++;
            break;
        }
        prino++;
    }
    if(count==0 && n!=1)
    {
        console.log(n);
    }
    n++;
}