/**
 * Created by abrain on 2016/12/29.
 */
function range(from,to){
    var r = inherit(range.methods);
    r.from = from;
    r.to = to;
    return r;
}
range.methods = {
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