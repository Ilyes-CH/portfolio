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
exports.ResumeController = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const fs = require("fs");
let ResumeController = class ResumeController {
    getResume(res) {
        const documentPath = path.join(__dirname, '../../assets/resume.pdf');
        if (fs.existsSync(documentPath)) {
            return res.sendFile(documentPath, (err) => {
                if (err) {
                    console.error('Error sending file:', err);
                    res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to send file' });
                }
            });
        }
        else {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({ message: 'File Not Found' });
        }
    }
};
exports.ResumeController = ResumeController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ResumeController.prototype, "getResume", null);
exports.ResumeController = ResumeController = __decorate([
    (0, common_1.Controller)('api/resume')
], ResumeController);
//# sourceMappingURL=resume.controller.js.map