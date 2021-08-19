class MyArray {
    constructor() {
        this.array = {};
        for (let i = 0; i < arguments.length; i++) {
            this.array[i] = arguments[i];
        }
        this.length = arguments.length;
    }

    shift() {  
        
        const first = this.array[0];
    
        for (let i = 0; i < this.length; i++) {
            this.array[i] = this.array[i + 1];
        }
    
        delete this.array[this.length - 1];
        this.length -= 1;
    
        return first;  
        
    }
    unshift() {
        
        for (let i = this.length; i > 0; i--) {
            this.array[i + arguments.length -1] = this.array[i - 1];
        }
        for (let i = 0; i < arguments.length; i++) {
            this.array[i] = arguments[i]
            this.length += 1;
        }
        
        return this.length
    }
    /**
    *
    * @param {Function} callbackfn Callback function to call for each cell
    */
    forEach(callbackfn) {
        if (typeof callbackfn !== "function") {
            throw new TypeError(callbackfn + " is not a function");
        }
        for (let index = 0; index < this.length; index++) {
            const element = this.array[index];
            if (element !== undefined) {
                callbackfn(element, index, this.array);
            }
        }
    }

    map(callbackfn) {
        if (typeof callbackfn !== "function") {
            throw new TypeError(callbackfn + " is not a function");
        }

        const newArray = new MyArray();

        for (let index = 0; index < this.length; index++) {
            const element = this.array[index];

            const result = callbackfn(element, index, this.array);

            newArray.push(result);
        }

        return newArray;
    }

    includes(searchValue) {
        for (let index = 0; index < this.length; index++) {
            if (searchValue === this.array[index]) {
                return true;
            }
        }
        return false;
    }

   

    push() {
        for (let i = 0; i < arguments.length; i++) {
            this.array[this.length + i] = arguments[i];
        }
        return this.array;
    } 

    pop() {
        const last = this.array[this.length - 1];
        delete this.array[this.length - 1];
        this.length -= 1;

        return last;
    }
    
    slice() {
        const newArraySlice = new MyArray();
        let ind = 0;
        
        for (let i = 0; i < this.length; i++) {

            if ((i >= arguments[0]) && (i < arguments[1])) {
                newArraySlice[ind] = this.array[i]
                ind += 1;
                length += 1;
                
            }
            
        } 
        
       
        return newArraySlice;
    }

    indexOf(searchElement, fromIndex) {
        
        if (typeof(fromIndex) === "undefined") {
            fromIndex = 0;
        }

        if (fromIndex < 0) {
            fromIndex = (this.length + fromIndex);
        }
        
        if ((fromIndex >= this.length) || (searchElement <= fromIndex)) {
            return -1;
        }
       
        for (let index = fromIndex; index < this.length; index++) {
            if (searchElement === this.array[index]) {
                return index;
            }
        }
        return false; 
    }

    find() {


        
    }




}

const myarray = new MyArray(1, 2, 3, 4, 5);
console.log(myarray);
//console.log(myarray.shift());
//console.log(myarray.unshift(0));
//console.log(myarray.forEach(alert));
//console.log(myarray.map());
//console.log(myarray.includes(5));
//console.log(myarray.push(6, 7, 8, 9, 10));
//console.log(myarray.pop());
////////console.log(myarray.slice(1, 4));
//console.log(myarray.indexOf(2, ));
console.log(myarray.find());



