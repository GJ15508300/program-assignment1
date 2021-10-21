console.log("Add two array of elemnts");
let a=[5,6,7,8,9,10];
let b=[10,20,30,40,50,60];
let c=[];
for(let i=0;i<=a.length-1;i++)
{
    c[i]=a[i]+b[i];
}
for(let i=0;i<=a.length-1;i++)
{
    console.log(c[i]);
}