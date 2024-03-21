// for(let i = 1; i <= 10 ; i++ ){
//     document.write(i + "<br>")
// }


// for(let i = 2; i <= 20 ; i+=2 ){
//     document.write(i + "<br>")
// }


// for(let i = 1; i <= 15 ; i+=2 ){
//     document.write(i + "<br>")
// }

// for(let i = 1; i <= 5 ; i++ ){
//     document.write(i*i + "<br>")
// }


// let a = 7
// for(let i = 1; i <= 10 ; i++ ){
//     document.write( a + " x " + i + " = " + a*i + "<br>" )
// }

// for(let i = 1; i <= 10 ; i++ ){
//         document.write(i*i + "<br>")
//     }



let numbers = [3,4,5,6,7]
let smallnum = [0]
for(i=1;i<numbers.length;i++){
    if(numbers[i]<smallnum){
        smallnum = numbers[i]

    }
}

document.write(smallnum)




