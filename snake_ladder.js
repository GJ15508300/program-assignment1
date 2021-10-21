var readlineSync = require('readline-sync')
console.log("Head(1) OR Tails(0)");
// console.log("Head = 1 then player  Name 1 sater the Game");
// console.log("OR tails = 0 then player  Name 0 (computer) sater the Game");
var tos=Math.floor(Math.random() * 2)
let b=[23,34,45,56,67,78];
let c=[66,11,44,88,22,55];
let top=[];

for(let j=0;j<2;j++)
    top[j]=0;
console.log("Tos = ",tos);
let dum=tos;
if(tos==1)
    {
     console.log("Player Name ",tos," win the tos");        
    }
else
    {
     console.log("Player Name ",tos," win the tos");      
    }
    let comp;
    if(dum==1)
    {
        console.log("Player name 0 is a computer");
        comp=0;
        console.log("Ur's assgin NAME is 'Player name 1'");
    }
    else{
        console.log("Player name 1 is a computer");
        comp=1;
        console.log("Ur's assgin NAME is 'Player name 0' ");
    }

    
let dice,w,i=0,j=0;
let count=0; 
let k=tos;
let inc=tos; 
let bb=0;

 while(top[k]<100 && top[comp]<100)
{   
    
    console.log(top[0],top[1],"k",k,"comp",comp);

    console.log("\n");
    console.log("YOURS TURN");
    console.log("Roll the Dics plz enter ");    
    w = readlineSync.question(' ');
        
    start_pos: while(bb<2)
   {   
            dice=Math.floor(Math.random() * 7)
            count++;
            console.log("Player Name",k);
            console.log("DICE FACE",dice);
        if(top[k] <= 94)
        {
            top[k]=top[k]+dice;
            process.stdout.write("player Name  -->  ");            
            console.log(k,"Move onto ```  position --> ",top[k]);
            console.log("----------------------------------");
            for(let m=0;m<=100;m++)
                {
                if(top[k] == b[m])
                    {
                        process.stdout.write("Player stand on ladder SO Run forward upto 7 Steps-->  ");
                        top[k]=top[k]+7;
                        process.stdout.write("player Name  ");            
                        console.log(k," --> Move onto ```  position = ",top[k]);
                        console.log("Now u will get extra one move");
                        continue start_pos;
                    }
                if(top[k] == c[m])
                    {
                        process.stdout.write("Player stand on snake Run backward upto 6 steps-->  ");
                        top[k]=top[k]-6;
                        process.stdout.write("player Name  ");            
                        console.log(k," --> Move onto ```  position = ",top[k]);
                    }
                }
            }
        else if( (100-top[k]) >= dice )
            {
            top[k]=top[k]+dice;
            process.stdout.write("player Name --> ");
            console.log(k,"Move onto ```  position",top[k]);
            }
        else
            {
                process.stdout.write("Player Name --> ");
                console.log(k, "position ",top[k]);
                console.log("Dice",dice,"Invalid Move");
                console.log("**************************");
            }
        if(inc==1)
            {
                k=0;
                inc=0;
                bb++;
            }
        else
            {
                k=1;
                inc=inc+1;    
                bb++;                      
            }
        }
        bb=0;
            console.log("\n");
}
if(top[0]==100)
{
    k=0;
}
else if(top[1]==100)
{
    k=1;
}
console.log("player Name",k);
console.log("U win the game now go OUT........");
console.log("Player stand on the Position ",top[k]);
console.log("Number of times Dice rolled  ",count);