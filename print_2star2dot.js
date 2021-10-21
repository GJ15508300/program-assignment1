console.log("When input is 4 then print 4Rows 1st is star(*) and 2rd is(.) and repet...");
let count=0,i=1;
let n=6;
while(i<n)
{
    if(count==0)
    {
        for(let m=0;m<3;m++)
        process.stdout.write("* ");
        count++;
    }
    else{
        for(let m=0;m<3;m++)
        process.stdout.write(". ");
        count=0;
    }
    console.log(" ");
    i=i+1;
}