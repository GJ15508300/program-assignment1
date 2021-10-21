console.log("Sort an array of element withouut using temp");
let a=[3,6,21,9,0,2,7];
let i,j,n=a.length;
for(i=0;i<n;i++)
{
    for(j=1+i;j<n;j++)
    {
        if(a[j]>a[i])
        {
        
        a[i]=a[i]+a[j];
        a[j]=a[i]-a[j];
        a[i]=a[i]-a[j];
            
        }
    }
}
console.log("1st max Number",a[0]);
console.log("1st min Number",a[n-1]);
console.log("sort");
for(i=0;i<n;i++)
console.log(a[i]);