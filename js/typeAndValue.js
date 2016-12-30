/**
 * Created by abrain on 2016/12/30.
 */
function typeAndValue(x){
    if(x == null) return '' ;
    switch(x.constructor){
        case Number: return "Number:" + x;
        case String: return "String:" + x;
        case Date: return "Date:" + x;
        case RegExp: return "RegExp:" + x;
        case Complex: return "Complex:" + x;
    }
}