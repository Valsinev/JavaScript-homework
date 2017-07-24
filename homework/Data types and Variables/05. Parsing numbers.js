// Try parsing the following strings to numbers using parseInt, parseFloat, Number, + and | 0. Fill the answers for yourself in the table below.
//
// str	             parseInt(str)	parseFloat(str)	Number(str)	+str	str | 0
// '1234'	                 ?	            ?	             ?	      ?      	?
// '1238abc'	             ?	            ?	             ?	      ?      	?
// '0.15'	                 ?              ?	             ?	      ?      	?
// '3.14ivan'	             ?	            ?	             ?	      ?      	?
// 'Infinity'	             ?	            ?	             ?	      ?      	?
// '99999999999999999999'	 ?	            ?	             ?	      ?      	?


var oneToFour = '1234';
var intAndText = '1238abc';
var float = '0.15';
var floatAndText = '3.14ivan';
var inf = 'Infinity';
var bigOne = '99999999999999999999';

console.log('parseInt:');
console.log(parseInt(oneToFour));
console.log(parseInt(intAndText));
console.log(parseInt(float));
console.log(parseInt(floatAndText));
console.log(parseInt(inf));
console.log(parseInt(bigOne));
console.log('parseFloat:');
console.log(parseFloat(oneToFour));
console.log(parseFloat(intAndText));
console.log(parseFloat(float));
console.log(parseFloat(floatAndText));
console.log(parseFloat(inf));
console.log(parseFloat(bigOne));
console.log('Number(str):');
console.log(Number(oneToFour));
console.log(Number(intAndText));
console.log(Number(float));
console.log(Number(floatAndText));
console.log(Number(inf));
console.log(Number(bigOne));
console.log('str | 0:');
console.log(oneToFour | 0);
console.log(intAndText | 0);
console.log(float | 0);
console.log(floatAndText | 0);
console.log(inf | 0);
console.log(bigOne | 0);
