function game(){
var i = 0, a = 0, r;
var mainNum;


do {
    number();
    
    console.log(mainNum);
  }while(i !== 1 );


i = 0;

do {
    if (r !== 3){
  count();
    } else {
        i = 1;
    }
}while(i !== 1 );


function count(){
    var Num = prompt("Guess the number");    
    if (Num == null) {
        alert('GoodBye!');
        r = 3;
    }
    Num = Number(Num);
    if (Num > mainNum){
        alert("Your one is more");
        a = a + 1;
        
    } else if (Num < mainNum){
        alert("Your one is less");
        a = a + 1;
        
    }else {
        a = a + 1;
        alert("You won! You tried: " + a + " times");
        i = 1;
        return a;
    }
   }
   function number(){
    mainNum = prompt("Write number or click OK and program will choose");
    console.log(mainNum);
    if (mainNum == null) {
        alert('GoodBye!');
        r = 3;
    }
    mainNum = Number(mainNum);
    console.log(mainNum);
    if (mainNum == 0) {

        mainNum = Math.floor(Math.random() * 101);
            i = 1;
    }else{
        i = 1;
    }
    
}
}
game();
