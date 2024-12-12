
var RandomizedSet = function() {
    this.list = [];
    this.indexMap = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.indexMap.has(val)) return false;
    else {
        this.list.push(val);
        this.indexMap.set(val,this.list.length -1);
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.indexMap.has(val)) return false
    else {
        let index = this.indexMap.get(val); //빼야할 녀석의 인덱스
        let lastValue = this.list[this.list.length -1];
        
        this.list[index] = lastValue;
        this.indexMap.set(lastValue,index);
        this.list.pop();
        this.indexMap.delete(val)
        return true;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.list[Math.floor(Math.random() * this.list.length)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */