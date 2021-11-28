"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCharacterDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateCharacterDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { characterName: { required: true, type: () => String }, description: { required: true, type: () => String }, location: { required: true, type: () => String }, multiverse: { required: true, type: () => String } };
    }
}
exports.CreateCharacterDto = CreateCharacterDto;
//# sourceMappingURL=create-character.dto.js.map