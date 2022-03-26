class SetDS extends Set{
    constructor(...elems){
        super(elems)
    }

}

var set=new SetDS(9,9,0,9,9)
// set.add([2,3,4,5])
// set.add(3)
// set.add(24)
// set.add(25)
console.log(set);

var d=new Set();
d.add([2,4,5])
console.log(d);