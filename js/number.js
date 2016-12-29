/**
 * Created by abrain on 2016/12/29.
 */
Number.prototype.times = function (f) {
    var n = Number(this);
    for(var i=0;i<n;i++)
        f.call(this,i);
};