var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(cantVidasA, nombreA) {
        var _this = _super.call(this, nombreA) || this;
        _this.cantVidasA = cantVidasA;
        _this.nombreA = nombreA;
        _this.cantVidas = cantVidasA;
        return _this;
    }
    return Gato;
}(Mascota));
