"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCharacterDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_character_dto_1 = require("./create-character.dto");
class UpdateCharacterDto extends (0, swagger_1.PartialType)(create_character_dto_1.CreateCharacterDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { description: { required: true, type: () => String }, location: { required: true, type: () => String }, multiverse: { required: true, type: () => String } };
    }
}
exports.UpdateCharacterDto = UpdateCharacterDto;
//# sourceMappingURL=update-character.dto.js.map