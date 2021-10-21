console.log("Number to words");
const number="9999";
let chno=number.split('');
console.log(chno);
let len=number.length;
if(len==0)
{
    console.log("Empty");
    
}
if(len>8)
{
    console.log("NOT Support");
}
let single=['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let double=['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens=['','ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let power=['hundred', 'thousand', 'lakhs'];
if(len==1)
{
    console.log(single[chno[0]-'0']);
}
let x=0;
while(x<number.length)
{
    if(len==7)
    {
        if(chno[x]-'0' != 0)
        {
            process.stdout.write(tens[chno[x]-'0']);
            process.stdout.write(" ");
        }
        --len;
    }
    else if(len==6)
    {
        if(chno[x]-'0' != 0)
        {        
            process.stdout.write(single[chno[x]-'0']);
            process.stdout.write(" ");
            process.stdout.write(power[len-4]);
            process.stdout.write(" ");
        }
        --len;
    }
    else if(len==5)
    {
        if(chno[x]-'0' != 0)
        {
            process.stdout.write(tens[chno[x]-'0']);
            process.stdout.write(" ");
        }
        --len;
    }
    else if(len==4)
    {
        if(chno[x]-'0' != 0)
        {        
            process.stdout.write(single[chno[x]-'0']);
            process.stdout.write(" ");
            process.stdout.write(power[len-3]);
            process.stdout.write(" ");
        }
        --len;
    }
    else if(len==3)
    {
        if(chno[x]-'0' != 0)
        {        
            process.stdout.write(single[chno[x]-'0']);
            process.stdout.write(" ");
            process.stdout.write(power[len-3]);
            process.stdout.write(" ");
        }
        --len;
    }
    else
    {
        let i=chno[x]-'0';
        if(i>0)
        {
            process.stdout.write(tens[i]);
            process.stdout.write(" ");
        }
        
        ++x;
        if(chno[x]-'0' != 0)
        {
            process.stdout.write(single[chno[x]-'0']);
        }
    }
    ++x;
}