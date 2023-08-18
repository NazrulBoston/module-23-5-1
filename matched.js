
/** Part --> 1
 *  akhane products name akta array nea hoese and array vitore kisu object ase. akta function
 * declare kara hoese and for of die array k acces kara hoese and print kara hoese but niche undefined
 * dekhasse bcx amra akhono retun karini. 
 */

// const products = [
//     {id : 1, name: 'phone one night', price: 34445},
//     {id : 2, name: 'iphone ', price: 70005},
//     {id : 3, name: 'mac book air laptop', price: 34445},
//     {id : 4, name: 'samsun Phone', price: 34433},
//     {id : 5, name: 'Nokia phone', price: 34445},
//     {id : 6, name: 'LG laptop', price: 34445},
//     {id : 7, name: 'city cell phone', price: 34445},

// ];


// function matchedProducts(products, search){
//     for(const product of products){
//         console.log(product)
//     }
// }

// const result = matchedProducts(products, 'phone');
// console.log(result)


/**Part --->2
 * akhon amra function k return  karbo and akta empty array nibo for of loop ar upore
 * akadhik item rakhar jonno array declare karte hoi, amra array declare karbo j matched item
 * thakbe
 * prottek ta product a loop kar pabar por product ar name ase oi name k includes karte hobe, kake includes
 * karte hobe je search take tumi khujteso if(product.name.includes(search)), taile ai product tare matched product hisebe push kare dibe matched.push(product) but tar age
 * jake khujbe and jare dara khujbe imean name ke and search ke toLowerCase kar niba
 * if(product.name.toLowerCase().includes(search.toLowerCase)){
 *    matched.push(product)
 * 
 * then most of the case tumi jokhon loop ar vitor theke kisu ber karba tokhon return karba loop ar baire
 * return matched;
 * }
 */

const products = [
    {id : 1, name: 'phone one night', price: 34445},
    {id : 2, name: 'iphone ', price: 70005},
    {id : 3, name: 'mac book air laptop', price: 34445},
    {id : 4, name: 'samsun Phone', price: 34433},
    {id : 5, name: 'Nokia phone', price: 34445},
    {id : 6, name: 'LG laptop', price: 34445},
    {id : 7, name: 'city cell phone', price: 34445},

];


function matchedProducts(products, search){
    const matched =[];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result)