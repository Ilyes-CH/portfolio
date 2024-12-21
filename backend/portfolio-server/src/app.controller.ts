import {
  Controller,
  Post,
  Body,
  Get,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import fetch from 'node-fetch';
import { Response } from 'express';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();
interface Email {
  name: string;
  from: string;
  subject: string;
  message: string;
  'g-recaptcha-response': any;
}

@Controller('api/email_box')
export class AppController {
  // Transporter setup
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER ?? 'ilyes.leo.ch@gmail.com',
      pass: process.env.EMAIL_PASS ?? 'phaomlsaadlusrtg',
    },
  });

  // Method to set mail options
  private setMailOptions(
    email: string,
    subject: string,
    message: string,
    name: string,
  ) {
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

  // Endpoint to send emails
  @Post()
  async sendEmails(@Body() emailData: Email, @Res() res: Response) {
    // Validate the incoming email data
    if (
      !emailData.from ||
      !emailData.subject ||
      !emailData.message ||
      !emailData.name ||
      !emailData['g-recaptcha-response']
    ) {
      throw new HttpException(
        { message: 'Missing required fields' },
        HttpStatus.BAD_REQUEST,
      );
    }
    const recaptchaURL = `https://www.google.com/recaptcha/api/siteverify`;
    const recaptchaResponse = await fetch(recaptchaURL, {
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const info = await this.transporter.sendMail(
        this.setMailOptions(
          emailData.from,
          emailData.subject,
          emailData.message,
          emailData.name,
        ),
      );
      console.log('Email Sent With Success');
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
      console.error('Error sending email:', err);
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'Failed to send email' });
    }
  }

  @Get()
  hello() {
    return 'hey';
  }
}
