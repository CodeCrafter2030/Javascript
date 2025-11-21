class human {

    age =20;
    height=180;
    #weight=10;

    constructor(num, height, weight){
        this.age=num;
        this.height=height;
        this.#weight=weight;

    }
    

    walking(){
        console.log("i am walking ");
    }

    running(){
        console.log("I am runing");
    }

    get fetchWeight(){
        console.log(this.#weight);
    }

    set setWeight(value){
        this.#weight=value;
    }
}

let obj = new human(22,45,60);
console.log(obj.fetchWeight);

obj.setWeight=120;
console.log(obj.fetchWeight);
console.log(obj.walking());

