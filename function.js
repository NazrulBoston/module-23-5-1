//arguments only available inside the function. joto gulo khusi tumi parameter die call
// karba arugumetns console karle sobgulo dekhabe 

function add(num1, num2){
    console.log(num1, num2); 
    console.log(arguments)

}


add(12,13,65, 45, 34, 22)

// 12 13
// [Arguments] { '0': 12, '1': 13, '2': 65, '3': 45, '4': 34, '5': 22 } 

// atake 100% array bola jabe na. ata hosse array like object. atar index ase
// (arguments[4]) aivab index ber kara jabe but array ar moto push, pop kara jabe na


// but for of use kare arguments ar upor kaj kara jabe