// for (var i = 0; i < finances.length; i++) {
//     console.log(finances[i]);
// };

// for (var i = 0; i < finances.length; i++) {
//     console.log(finances.length);
//    // console.log(finances[85][1]);

// };
// let profitLosses = 0;

// console.log(finances[0][1] + finances[1][1]);

// let array2D = [[1,2,3], [4,5,6]];

// console.log(array2D[0][1]);



//let total = 0;

//finances.forEach(item => {
//    total += item.price;
//})

//console.log("TOTAL: ", total);



console.log( `Total months:${finances.length}`);

let totalMonths = finances.length; 

//for (let i = 0; i < totalMonths; i++) {
//  console.log(finances[1]);
//  console.log(finances[1][0]);
//};

var totalProfitLose = 0;
var increase = 0; 
var decrease = Infinity;

var previousMonth = 0;

var greatestMonth;
var leastMonth;
var totalChangeValues = 0;

for (var i = 0; i < finances.length; i++) {

totalProfitLose = totalProfitLose + finances[i][1]
totalChangeValues += (finances[i][1] - previousMonth)

if( decrease > (finances[i][1] - previousMonth) ){
     leastMonth = {
        month : finances[i][0],
        amount: finances[i][1],
        change: finances[i][1] - previousMonth
     }
     decrease = finances[i][1] - previousMonth
}

if ( increase < (finances[i][1] - previousMonth)) {
    greatestMonth = {
        month : finances [i][0],
        amount : finances [i][1],
        change : finances[i][1] - previousMonth
    }
    increase = finances[i][1] - previousMonth
}
previousMonth = finances[i][1]
};

console.log(`Greatest increase in profit is during ${greatestMonth.month} with $${greatestMonth.amount} with $${greatestMonth.change}. `);
console.log(`Greatest decrease in profit is during ${leastMonth.month} with $${leastMonth.amount} $${leastMonth.change}`);
let avg = Math.round( (totalProfitLose/totalMonths) * 100) /100
console.log(`Total Profit and Lostt: $${totalProfitLose}`);

console.log(`Average Profit/Loss : $${avg}`);

console.log(`Average Change of values: $${Math.round((totalChangeValues / totalMonths)*100)/100}`);