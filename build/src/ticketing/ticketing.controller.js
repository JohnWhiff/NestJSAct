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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingController = void 0;
var common_1 = require("@nestjs/common");
var create_ticket_dto_1 = require("../../dtos/create-ticket-dto");
var ticketing_service_1 = require("./ticketing.service");
var update_details_dto_1 = require("../../dtos/update-details-dto");
var change_status_dto_1 = require("../../dtos/change-status-dto");
var common_2 = require("@nestjs/common");
var common_3 = require("@nestjs/common");
var TicketingController = /** @class */ (function () {
    function TicketingController(ticketService) {
        this.ticketService = ticketService;
    }
    TicketingController.prototype.createTicket = function (body) {
        this.ticketService.create(body.subject, body.body);
    };
    TicketingController.prototype.selectAll = function () {
        return this.ticketService.selectAll();
    };
    TicketingController.prototype.selectOne = function (ticketnumber) {
        return __awaiter(this, void 0, void 0, function () {
            var ticket;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ticketService.selectOne(parseInt(ticketnumber))];
                    case 1:
                        ticket = _a.sent();
                        if (!ticket) {
                            throw new common_1.NotFoundException('ticket not found');
                        }
                        return [2 /*return*/, ticket];
                }
            });
        });
    };
    TicketingController.prototype.updateDetails = function (ticketnumber, body) {
        return this.ticketService.update(parseInt(ticketnumber), body);
    };
    TicketingController.prototype.updateChangeRequest = function (ticketnumber, body) {
        return this.ticketService.update(parseInt(ticketnumber), body);
    };
    __decorate([
        (0, common_1.Post)('/create'),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_ticket_dto_1.CreateTicketDto]),
        __metadata("design:returntype", void 0)
    ], TicketingController.prototype, "createTicket", null);
    __decorate([
        (0, common_2.UseInterceptors)(common_3.ClassSerializerInterceptor),
        (0, common_1.Get)('/selectAll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TicketingController.prototype, "selectAll", null);
    __decorate([
        (0, common_2.UseInterceptors)(common_3.ClassSerializerInterceptor),
        (0, common_1.Get)('/:ticketnumber'),
        __param(0, (0, common_1.Param)('ticketnumber')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], TicketingController.prototype, "selectOne", null);
    __decorate([
        (0, common_1.Post)('updateDetails/:ticketnumber'),
        __param(0, (0, common_1.Param)('ticketnumber')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_details_dto_1.updateDetailsDto]),
        __metadata("design:returntype", void 0)
    ], TicketingController.prototype, "updateDetails", null);
    __decorate([
        (0, common_1.Post)('changeStatus/:ticketnumber'),
        __param(0, (0, common_1.Param)('ticketnumber')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, change_status_dto_1.changeStatusDto]),
        __metadata("design:returntype", void 0)
    ], TicketingController.prototype, "updateChangeRequest", null);
    TicketingController = __decorate([
        (0, common_1.Controller)('ticketing'),
        __metadata("design:paramtypes", [ticketing_service_1.TicketingService])
    ], TicketingController);
    return TicketingController;
}());
exports.TicketingController = TicketingController;
//# sourceMappingURL=ticketing.controller.js.map