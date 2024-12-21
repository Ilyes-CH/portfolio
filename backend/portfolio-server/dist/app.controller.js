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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const node_fetch_1 = require("node-fetch");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
let AppController = class AppController {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER ?? 'ilyes.leo.ch@gmail.com',
                pass: process.env.EMAIL_PASS ?? 'phaomlsaadlusrtg',
            },
        });
    }
    setMailOptions(email, subject, message, name) {
        return {
            from: `"${name}" "${email}" <${process.env.EMAIL_USER ?? 'ilyes.leo.ch@gmail.com'}>`,
            to: process.env.EMAIL_USER ?? 'ilyes.leo.ch@gmail.com',
            subject: subject,
            text: message,
            html: `<h1>Message From: ${name} | ${email}</h1>
            <h4>Message Body: ${message} </h4>    
      `,
        };
    }
    async sendEmails(emailData, res) {
        if (!emailData.from ||
            !emailData.subject ||
            !emailData.message ||
            !emailData.name ||
            !emailData['g-recaptcha-response']) {
            throw new common_1.HttpException({ message: 'Missing required fields' }, common_1.HttpStatus.BAD_REQUEST);
        }
        const recaptchaURL = `https://www.google.com/recaptcha/api/siteverify`;
        const recaptchaResponse = await (0, node_fetch_1.default)(recaptchaURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                secret: process.env.CAPTCHA_SECRET_KEY,
                response: emailData['g-recaptcha-response'],
            }),
        });
        const recaptchaResult = await recaptchaResponse.json();
        console.log(recaptchaResult);
        if (!recaptchaResult['success']) {
            console.log('Error with captcha');
            return res.status(400).send('CAPTCHA verification failed.');
        }
        try {
            const info = await this.transporter.sendMail(this.setMailOptions(emailData.from, emailData.subject, emailData.message, emailData.name));
            console.log('Email Sent With Success');
            return res.status(200).json({ message: 'Email sent successfully' });
        }
        catch (err) {
            console.error('Error sending email:', err);
            return res
                .status(common_1.HttpStatus.BAD_REQUEST)
                .json({ message: 'Failed to send email' });
        }
    }
    hello() {
        return 'hey';
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "sendEmails", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "hello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('api/email_box')
], AppController);
//# sourceMappingURL=app.controller.js.map