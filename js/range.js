/**
 * Created by abrain on 2016/12/29.
 */
function range(from,to){
    this.from = from;
    this.to = to;
}
range.prototype = {
    constructor:range,
    includes:function (x) {
        return this.from <= x && x<= this.to;
    },
    foreach:function (f) {
        for(var x = Math.ceil(this.from); x <= this.to; x++)
            f(x);
    },
    toString:function () {
        return '(' + this.from + '...' + this.to + ')';
    }
};