"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const Artist_1 = require("../entities/Artist");
const artist_controller_1 = require("./artist.controller");
const artist_service_1 = require("./artist.service");
const artist_repository_1 = require("./artist.repository");
let ArtistModule = class ArtistModule {
};
exports.ArtistModule = ArtistModule;
exports.ArtistModule = ArtistModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: Artist_1.Artist.name, schema: Artist_1.ArtistSchema }])],
        controllers: [artist_controller_1.ArtistController],
        providers: [artist_service_1.AristService, artist_repository_1.ArtistRepository]
    })
], ArtistModule);
//# sourceMappingURL=artist.module.js.map