var readlineSync = require('readline-sync')
let a=[];
let low,high,count=0,middle=0;
let w=3;
for(let i=0;i<=100;i++)
{
    a[i]=i;
    count=count+1;
}
low=0;
high=count-1;
while(low<=high)
{
    if(w==0||w==1||w==3)
    {
        middle=low+Math.floor((high-low)/2);
        console.log("Your Number is Greater then OR Less then",middle);
        console.log("If its Greater Enter 1 OR Lesser Enter 0");
        console.log("Else IF Your Number Find Enter 2 to Exit");
        console.log("ANS",middle);
        w = readlineSync.question('enter');
        console.log(w);
        if(w==0)
        {
            high=middle;
        }
        else
        {
            low=middle;
        }
    }
    else{
        break
    }
}