var readlineSync = require('readline-sync')
 console.log("LETS START THE GAME");
 

var tos=Math.floor(Math.random() * 2)
console.log("choose Head(1) OR Tails(0)");
let dum=readlineSync.question(' ');
console.log("Tos = ",tos);
let computer;
let empty=0;
let letter;
let j=0;
let comvar,usevar;

let block;
let board=[];
for(let i=0;i<9;i++)
board.push("_");

console.log("----------------Play Board----------------");
print(); 
let playagain=1;
while(playagain==1)
{
let win=0;
let k=0;
if(dum==tos)
{
    console.log("You Win a tos");
    computer=0;
    console.log("when your turn may enter,...then choose letter 'X' or letter 'O' ");
    letter=readlineSync.question(' ');    
    console.log("2rd Player is a computer");
}
else
{
    console.log("You loss a tos");
    console.log("1st Player is a computer");    
    computer=1;    
    empty=3
    letter='o';   
}

if(letter=='x')
{ 
    block='o'; 
    comvar='o'  
    usevar='x'
}      
else
{  
    block='x';
    comvar='o'  
    usevar='x'
    if(empty==3){    
  comvar='x'
  usevar='x'   }            
}




while(win<5)
{
    console.log("computer val",computer);
     if(computer==0)
    {  
        computer=1;
        k=readlineSync.question('enter position______');
        cellcheck(k)
        
    }
    else
    {   
        console.log("Computer Move",block);  
        computer=0;
        blocking()
        win++;
    }
print();
console.log("\n");
let checkwin=check();
console.log(checkwin);
if(checkwin==true)
{
    console.log("win the game");
    if(block==comvar)
    {
        console.log("By computer ");
    }
    else{
        console.log("By User ");
    }
    win=10;
    break;
}
else if(checkwin==false){
    console.log("O V E R ");
    break
}

}
console.log("If U want restart the game enter 1");
let t=readlineSync.question(' ');
playagain=10
if(t==1)
{
    empty=3
    reload();
    playagain=1;
   
}
print()
j=0;
}



function print()
{
    console.log(board[0] + " | " + board[1] + " | " + board[2])
    console.log("----------")
    console.log(board[3] + " | " + board[4] + " | " + board[5])
    console.log("----------")
    console.log(board[6] + " | " + board[7] + " | " + board[8])
}

function reload()
{
    board=["_","_","_","_","_","_","_","_","_",];    
}

function cellcheck(cell)
{    
    if(board[cell]==="_")
    {     
        board[cell]=letter;
        return cell
    }
    else
    {            
        console.log("Invalid move"); 
        console.log("Try Again");                          
        return computer=0; 
     }
    
}





function check()
{
let che=["o","x"];
// che[0]='o'
// che[1]='x'
let i=0;    
while(i<3)
    {    
    if ((board[0] == che[i])&& (board[1] == che[i]) && (board[2] == che[i] )) 
    {      
    return true         
    }
    else if ((board[3] == che[i]) && (board[4] == che[i]) && (board[5] == che[i]))
    {      
    return true           
    }
    else if ((board[6] == che[i]) && (board[7] == che[i]) && (board[8] == che[i] )) 
    {    
    return true  
    }
    else if ((board[0] == che[i]) && (board[3] == che[i]) && (board[6] == che[i] ))
    {    
    return true  
    }
    else if ((board[1] == che[i]) && (board[4] == che[i]) && (board[7] == che[i]))
    {    
    return true  
    }
    else if ((board[2] == che[i]) && (board[5] == che[i]) && (board[8] == che[i]))
    {    
    return true  
    }
    else if ((board[0] == che[i]) && (board[4] == che[i]) && (board[8] == che[i]))
    {    
    return true  
    }
    else if ((board[2] == che[i]) && (board[4] == che[i]) && (board[6] == che[i]))
    {    
    return true  
    }
    //else if (board[0]!==board[1] && board[6]!==board[7] && board[2]!==board[1] && board[8]!==board[7] && board[4]!==board[5] 
     //       &&board[5]!==board[6] && board[6]!==board[2] && board[7]!==board[8] )
    //{
     //       console.log("---------------------MATCH TIE------------------");
     //       return false
    //}
i++;
    }
}

function blocking()
{   
        columnblock()
}


function columnblock()
{
    let columnvalue=0
    let count = 1
   let i=0;   
    while(count < 9)
    {
        let firstvalue = columnvalue
        let secondvalue = firstvalue + 3 
        let thirdvalue = secondvalue + 3        
       
        if ( board[firstvalue] === board[secondvalue] && (board[firstvalue] !=="_") && (board[secondvalue] !=="_") && (board[thirdvalue]==="_" ))
        {
            j=5;
            board[thirdvalue]=block;
            count += 1;
            break;
        }
        else if(board[secondvalue] == board[thirdvalue] && board[secondvalue] !="_" && board[thirdvalue] !="_" && board[firstvalue] =="_")
        {
            board[firstvalue]=block;
            j=5;
            count += 1;
            break;
        }
        else if(board[firstvalue] === board[thirdvalue] && board[firstvalue] !=="_" && board[thirdvalue] !=="_" && board[secondvalue]==="_")
        {
            board[secondvalue]=block;
            j=5;
            count += 1;
            break;
        }
        else{
            count += 1;
                      
        }

        columnvalue = thirdvalue - 5 ;
        count++;
       if(thirdvalue==8)
       {
        diagonalblock()  
       }
    } 
    
        
       

}



function diagonalblock()
{
        
    if(board[4] === board[8] && board[4]!=="_" && board[8]!=="_" && board[0]==="_")    
    {
        board[0]=block;       
    }
    else if(board[4] === board[0] && board[4]!=="_" && board[0]!=="_" && board[8]==="_")    
    {
        board[8]=block;
    }
    else if(board[0] === board[8] && board[0]!=="_" && board[8]!=="_" && board[4]==="_")
    {
        board[4]=block;
    }
    else if(board[4] === board[2] && board[4]!=="_" && board[2]!=="_" && board[6]==="_")
    {
        board[6]=block;
    }
    else if(board[2] === board[6] && board[2]!=="_" && board[6]!=="_" && board[4]==="_")
    {
        board[4]=block;
    }
    else if(board[6] === board[4] && board[6]!=="_" && board[4]!=="_" && board[2]==="_")
    {
        board[2]=block;
    }
    else
    {
      rowblock();
    }
}


function rowblock()
{
    let rowvalue=0;
    while(rowvalue<9)
    {
        let firstvalue = rowvalue;
        let secondvalue = firstvalue + 1 ;
        let thirdvalue = secondvalue + 1 ;
        if(board[firstvalue] === board[secondvalue] && board[firstvalue] !=="_" && board[secondvalue] !=="_" && board[thirdvalue]==="_")
        {
            board[thirdvalue]=block;
            j=5;
            break;
        }
        else if(board[secondvalue] === board[thirdvalue] && board[secondvalue] !=="_" && board[thirdvalue] !=="_" && board[firstvalue]==="_")
        {
            board[firstvalue]=block;
            j=5;
            break;
        }
        else if(board[firstvalue] === board[thirdvalue] && board[firstvalue] !=="_" && board[thirdvalue] !=="_" && board[secondvalue]==="_")
        {
            board[secondvalue]=block;
            j=5;
            break;
        }       
             
        rowvalue = thirdvalue + 1 
        if(thirdvalue==8)
        {
            if(board[firstvalue] !== board[thirdvalue] && board[firstvalue] !=="_" && board[thirdvalue] !=="_" && board[secondvalue]==="_"){
            board[secondvalue]=block;
            break;}

        }
    }  
    
        while(j<5)
        {     
            if(board[j]=='_')
            {   console.log("Match");
                board[j]=block;               
                             
                break;    
            }
        j++;  
        }  
        
    }   
    
