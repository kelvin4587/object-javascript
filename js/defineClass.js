/**
 * Created by abrain on 2016/12/29.
 */
function defineClass(constructor,methods,statics){
    if(methods) extend(constructor.prototype,methods);
    if(statics) extend(constructor,statics);
    return constructor;
}