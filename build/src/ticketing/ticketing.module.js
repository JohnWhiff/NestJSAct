"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingModule = void 0;
var common_1 = require("@nestjs/common");
var ticketing_controller_1 = require("./ticketing.controller");
var ticketing_service_1 = require("./ticketing.service");
var typeorm_1 = require("@nestjs/typeorm");
var ticketing_entity_1 = require("./ticketing.entity");
var TicketingModule = /** @class */ (function () {
    function TicketingModule() {
    }
    TicketingModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([ticketing_entity_1.Ticket])],
            controllers: [ticketing_controller_1.TicketingController],
            providers: [ticketing_service_1.TicketingService]
        })
    ], TicketingModule);
    return TicketingModule;
}());
exports.TicketingModule = TicketingModule;
//# sourceMappingURL=ticketing.module.js.map