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
exports.AristService = void 0;
const common_1 = require("@nestjs/common");
const artist_repository_1 = require("./artist.repository");
let AristService = class AristService {
    constructor(artistRepository) {
        this.artistRepository = artistRepository;
    }
    findAllArtist() {
        return this.artistRepository.findAllArtist();
    }
    async createArtist(artist) {
        return await this.artistRepository.createArtist(artist);
    }
    async updateArtist(id, artist) {
        return await this.artistRepository.updateArtist(id, artist);
    }
    async getArtistById(id) {
        return await this.artistRepository.getArtistById(id);
    }
    async deleteArtist(id) {
        return await this.artistRepository.deleteArtist(id);
    }
};
exports.AristService = AristService;
exports.AristService = AristService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [artist_repository_1.ArtistRepository])
], AristService);
//# sourceMappingURL=artist.service.js.map