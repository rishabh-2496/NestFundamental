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
exports.ArtistRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Artist_1 = require("../entities/Artist");
let ArtistRepository = class ArtistRepository {
    constructor(artistModel) {
        this.artistModel = artistModel;
    }
    findAllArtist() {
        return this.artistModel.find();
    }
    async createArtist(artist) {
        return await this.artistModel.create(artist);
    }
    async updateArtist(id, body) {
        return await this.artistModel.findByIdAndUpdate(id, body, { new: true });
    }
    async deleteArtist(id) {
        return await this.artistModel.findByIdAndDelete(id);
    }
    async getArtistById(id) {
        return await this.artistModel.findById(id);
    }
};
exports.ArtistRepository = ArtistRepository;
exports.ArtistRepository = ArtistRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Artist_1.Artist.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArtistRepository);
//# sourceMappingURL=artist.repository.js.map