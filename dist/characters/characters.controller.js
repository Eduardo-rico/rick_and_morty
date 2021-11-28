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
exports.CharactersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const role_model_1 = require("../auth/models/role.model");
const characters_service_1 = require("./characters.service");
const create_character_dto_1 = require("./dto/create-character.dto");
const update_character_dto_1 = require("./dto/update-character.dto");
let CharactersController = class CharactersController {
    constructor(charactersService) {
        this.charactersService = charactersService;
    }
    create(createCharacterDto) {
        return this.charactersService.create(createCharacterDto);
    }
    findAll() {
        return this.charactersService.findAll();
    }
    findOne(id) {
        return this.charactersService.findOne(+id);
    }
    update(id, updateCharacterDto) {
        return this.charactersService.update(+id, updateCharacterDto);
    }
    remove(id) {
        return this.charactersService.remove(+id);
    }
};
__decorate([
    (0, roles_decorator_1.Roles)(role_model_1.Role.RICK),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: "Create new character ofcourse only if you're Rick",
    }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_character_dto_1.CreateCharacterDto]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_model_1.Role.RICK, role_model_1.Role.MORTY, role_model_1.Role.SUMMER),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all characters.' }),
    openapi.ApiResponse({ status: 200, type: [require("./dto/create-character.dto").CreateCharacterDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_model_1.Role.RICK, role_model_1.Role.MORTY, role_model_1.Role.SUMMER),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get one character by id.' }),
    openapi.ApiResponse({ status: 200, type: require("./dto/create-character.dto").CreateCharacterDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_model_1.Role.RICK),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: "Update a character by id, ofcourse only if you're Rick.",
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_character_dto_1.UpdateCharacterDto]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_model_1.Role.RICK),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: "Delete a character by id, ofcourse only if you're Rick.",
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CharactersController.prototype, "remove", null);
CharactersController = __decorate([
    (0, swagger_1.ApiTags)('Characters'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('characters'),
    __metadata("design:paramtypes", [characters_service_1.CharactersService])
], CharactersController);
exports.CharactersController = CharactersController;
//# sourceMappingURL=characters.controller.js.map