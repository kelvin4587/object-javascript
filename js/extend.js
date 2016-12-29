/**
 * Created by abrain on 2016/12/29.
 */
function extend(o,p) {
    for(prop in p){
        o[prop]=p[prop];
    }
    return o;
}