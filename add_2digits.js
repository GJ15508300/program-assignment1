console.log("Add only two Digit numbers");
var a=1000,c=0,sum=0;
var dum=0,ext=0;
while(a>0)
{
    c=a%100;
    if(c>9 && c<100)
    {
        sum=sum+c;
    }
    else{
        ext=ext+c;
    }
    a=a/100;
}
console.log("sum of two digit is =",sum);
console.log("extra number is =",ext);
