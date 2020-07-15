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
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(razaA, nombreA) {
        var _this = _super.call(this, nombreA) || this;
        _this.razaA = razaA;
        _this.nombreA = nombreA;
        _this.raza = razaA;
        return _this;
    }
    return Perro;
}(Mascota));
