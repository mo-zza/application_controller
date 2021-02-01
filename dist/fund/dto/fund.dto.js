"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundSimpleDto = exports.FundBalanceDto = exports.FundCumReturnDto = exports.FundDefaultDto = exports.MoneyFlowHisotryDto = void 0;
const class_validator_1 = require("class-validator");
class MoneyFlowHisotryDto {
    constructor() {
        this.interval = '1d';
    }
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MoneyFlowHisotryDto.prototype, "fund_name", void 0);
exports.MoneyFlowHisotryDto = MoneyFlowHisotryDto;
class FundDefaultDto {
    constructor() {
        this.interval = '1d';
    }
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], FundDefaultDto.prototype, "fund_name", void 0);
exports.FundDefaultDto = FundDefaultDto;
class FundCumReturnDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], FundCumReturnDto.prototype, "fund_name", void 0);
exports.FundCumReturnDto = FundCumReturnDto;
class FundBalanceDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], FundBalanceDto.prototype, "user_email", void 0);
exports.FundBalanceDto = FundBalanceDto;
class FundSimpleDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], FundSimpleDto.prototype, "fund_name", void 0);
exports.FundSimpleDto = FundSimpleDto;
//# sourceMappingURL=fund.dto.js.map