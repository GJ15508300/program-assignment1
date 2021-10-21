console.log("Print Star Pattern ");
let n=10;
for(let i=0;i<n;i++)
{
    for(let j=0;j<n;j++)
    {
        if(j<n-i)
        {
            process.stdout.write(" ");
        }
        else{
            process.stdout.write("* ");
        }
    }
    console.log("");
}