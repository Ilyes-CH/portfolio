import { Response } from 'express';
interface Email {
    name: string;
    from: string;
    subject: string;
    message: string;
    'g-recaptcha-response': any;
}
export declare class AppController {
    private transporter;
    private setMailOptions;
    sendEmails(emailData: Email, res: Response): Promise<Response<any, Record<string, any>>>;
    hello(): string;
}
export {};
