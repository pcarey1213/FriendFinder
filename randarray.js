var numArray=[1,2,3,4,5,1,2,3,4,5];

function makeRand(){
    var randArray=[]
    for (var i=0;i<numArray.length;i++){
    randArray.push(numArray[Math.floor(Math.random()*numArray.length)])
    };
    console.log(randArray)
}

makeRand()