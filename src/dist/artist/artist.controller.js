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
exports.ArtistController = void 0;
const common_1 = require("@nestjs/common");
const artist_service_1 = require("./artist.service");
const create_artist_dto_1 = require("./dto/create-artist.dto");
const JWTAuth_guard_1 = require("../auth/guards/JWTAuth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
const roles_enum_1 = require("../auth/roles.enum");
let ArtistController = class ArtistController {
    constructor(artistService) {
        this.artistService = artistService;
    }
    findAllArtist() {
        this.artistService.findAllArtist();
    }
    async createArtist(artist) {
        const response = await this.artistService.createArtist(artist);
        return {
            message: "success",
            artist: response
        };
    }
    async updateArtist(artist, id) {
        const response = await this.artistService.updateArtist(id, artist);
        return {
            message: "success",
            artist: response
        };
    }
    async getArtistById(id) {
        const response = await this.artistService.getArtistById(id);
        return {
            message: "success",
            artist: response
        };
    }
    async deleteArtist(id) {
        const response = await this.artistService.deleteArtist(id);
        return {
            message: "success",
            artist: response
        };
    }
};
exports.ArtistController = ArtistController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(JWTAuth_guard_1.JWTAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArtistController.prototype, "findAllArtist", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(JWTAuth_guard_1.JWTAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_artist_dto_1.ArtistDTO]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "createArtist", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(JWTAuth_guard_1.JWTAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_artist_dto_1.ArtistDTO, String]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "updateArtist", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(JWTAuth_guard_1.JWTAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "getArtistById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(JWTAuth_guard_1.JWTAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "deleteArtist", null);
exports.ArtistController = ArtistController = __decorate([
    (0, common_1.Controller)('artist'),
    __metadata("design:paramtypes", [artist_service_1.AristService])
], ArtistController);
//# sourceMappingURL=artist.controller.js.map