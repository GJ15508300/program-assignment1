console.log("Calander to print Month and Date");
let month=["jan","feb","mar","apr","may","jun","july","aug","sept","oct","nov","dec"];
let date=29;
let mon=2;
;
if(mon<=12)
{
    if(mon==2)
    {
        if(date>=1 && date<=28)
        {
        console.log(date,month[mon-1]);
        }
      else
        {
        console.log("Invalid");
        }           
    }
   else if((mon>=1) && (mon<=7) && (mon%2==0) && (mon!=2) )
    {
        if(date>=1 && date<=31)
        {
            console.log(date,month[mon-1]);
        }
        else
        {
        console.log("Invalid");
        }           
    }
    else if((mon>=1) && (mon<=7) && (mon%2!=0) && (mon!=2) )
    {
        if(date>=1 && date<=30)
        {
            console.log(date,month[mon-1]);
        }
        else
        {
        console.log("Invalid");
        }           
    }
    else if((mon>=8) && (mon<=12) && (mon%2==0))
    {
        if(date>=1 && date<=31)
        {
            console.log(date,month[mon-1]);
        }
        else
        {
        console.log("Invalid");
        }           
    }
    else if((mon>=8) && (mon<=12) && (mon%2!=0))
    {
        if(date>=1 && date<=30)
        {
            console.log(date,month[mon-1]);
        }
        else
        {
        console.log("Invalid");
        }           
    }
}
else{
    console.log("-----INVALID MONTH-----");
}