/**
 * Created by abrain on 2016/12/30.
 */

function Car(brand) {
    this.brand=brand;
}
Car.prototype.start=function () {
    console.log(this.brand + 'is started');
};