console.log("When input is 4 then print 5Rows 4colums but in colunm 2element is star(*) another 2element is(.)");
let count=0,i=0;
let n=3;
for(let j=0;j<n;j++)
{
while(i<n)
{
    if(count==0 )
    {
        for(let m=0;m<4;m++)
        process.stdout.write(" * ");
        count++;
    }
    else{
        for(let m=0;m<4;m++)
        process.stdout.write(" . ");
        console.log(" ");
        count=0;
    }
    console.log(" ");
    i=i+1;
}
i=0;
}