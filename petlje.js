//Task1 - prepakovati stari arr u novi arr

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (i=0; i<dataOld.length; i++){
	dataNew[i] = dataOld[i]
}

console.log (dataNew)

//Task2 - prepakovati stari arr u novi arr, i pritom preokrenuti sadzaj

var dataOld = [34, true, "Peter", 1992];
var dataNew = []
dataOld.reverse()

for (i=0; i<dataOld.length; i++){
	dataNew = dataOld
}
console.log(dataNew)

//Task3 - prepakovati stari arr u novi, ali da arr pocinje novim elementima reja

var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];

for(i=0; i<dataOld.length; i++){
	
    dataNew[dataNew.length] = dataOld[i]
}

console.log(dataNew) 

//Task4 - novi arr sa elementima prethodnih arr, pocetak novog arr elementima arr a (neuspesno)

var a = [12,56,32,44,69];
var b = [88,7,13];
var c = [];

for(i=0; i<a.length; i++){
	b [b.length] = a[i];
	c = b

}
console.log(c)

//Task5 - novi arr koji treba da sadrzi elemente oba arr u operaciji alternacije

var a = [12,56,32,44];
var b = [88, 7, 13];
var c = [];

for (i=0; i<a.length; i++){

 c.push(a[i],b[i]);
}

console.log(c)





