#!/usr/bin/env node

//var primes=new Array(100);
var primes=[2];
var countP=1;
var needle=2;
var checkPrimes=function(c){
  for (i=0; i<countP; i++)
	{
		if(c%primes[i]==0) {return 0;}
	}
	return 1;
}
var PrimeRun=function(){
	while(countP<100 && needle<1000)
	{
		needle+=1;
		if(checkPrimes(needle)){
			primes.push(needle);countP+=1;
		}
	}
	return primes;
}
var fs=require('fs');
var outfile="Primes.txt";
var out=PrimeRun().toString();
//turns array to csv 
console.log(out);
fs.writeFileSync(outfile,out);

//console.log("100 Primes");
//console.log(PrimeRun().toString());
