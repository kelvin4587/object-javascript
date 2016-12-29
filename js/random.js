/**
 * Created by kelvin on 16/12/28.
 */
var random = {
    $num:'',
    get octet() {return Math.floor(Math.random()*256);},
    set num(num) {this.$num=num},
    get num() {return this.$num}
};