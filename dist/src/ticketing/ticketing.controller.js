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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingController = void 0;
const common_1 = require("@nestjs/common");
const create_ticket_dto_1 = require("../../dtos/create-ticket-dto");
const ticketing_service_1 = require("./ticketing.service");
const update_details_dto_1 = require("../../dtos/update-details-dto");
const change_status_dto_1 = require("../../dtos/change-status-dto");
let TicketingController = class TicketingController {
    constructor(ticketService) {
        this.ticketService = ticketService;
    }
    createTicket(body) {
        this.ticketService.create(body.subject, body.body);
    }
    selectAll() {
        return this.ticketService.selectAll();
    }
    async selectOne(id) {
        const ticket = await this.ticketService.selectOne(parseInt(id));
        if (!ticket) {
            throw new common_1.NotFoundException('ticket not found');
        }
        return ticket;
    }
    updateDetails(id, body) {
        return this.ticketService.update(parseInt(id), body);
    }
    updateChangeRequest(id, body) {
        return this.ticketService.update(parseInt(id), body);
    }
};
exports.TicketingController = TicketingController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ticket_dto_1.CreateTicketDto]),
    __metadata("design:returntype", void 0)
], TicketingController.prototype, "createTicket", null);
__decorate([
    (0, common_1.Get)('/selectAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TicketingController.prototype, "selectAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketingController.prototype, "selectOne", null);
__decorate([
    (0, common_1.Post)('updateDetails/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_details_dto_1.updateDetailsDto]),
    __metadata("design:returntype", void 0)
], TicketingController.prototype, "updateDetails", null);
__decorate([
    (0, common_1.Post)('changeStatus/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_status_dto_1.changeStatusDto]),
    __metadata("design:returntype", void 0)
], TicketingController.prototype, "updateChangeRequest", null);
exports.TicketingController = TicketingController = __decorate([
    (0, common_1.Controller)('ticketing'),
    __metadata("design:paramtypes", [ticketing_service_1.TicketingService])
], TicketingController);
//# sourceMappingURL=ticketing.controller.js.map