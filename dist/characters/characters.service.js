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
exports.CharactersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const character_entity_1 = require("./entities/character.entity");
let CharactersService = class CharactersService {
    constructor(characterRepository) {
        this.characterRepository = characterRepository;
    }
    async create(createCharacterDto) {
        try {
            this.characterRepository.insert(createCharacterDto);
        }
        catch (error) {
            throw new common_1.ServiceUnavailableException('I fuck up, Morty');
        }
    }
    async findAll() {
        return await this.characterRepository.find();
    }
    async findOne(id) {
        return await this.characterRepository.findOne(id);
    }
    async update(id, updateCharacterDto) {
        try {
            await this.characterRepository.update(id, updateCharacterDto);
        }
        catch (error) {
            throw new common_1.NotFoundException("I don't know that shit, Morty");
        }
    }
    async remove(id) {
        try {
            await this.characterRepository.delete(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('Wubba lubba dub dub');
        }
    }
};
CharactersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(character_entity_1.Character)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CharactersService);
exports.CharactersService = CharactersService;
//# sourceMappingURL=characters.service.js.map