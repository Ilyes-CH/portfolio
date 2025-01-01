import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

@Controller('api/resume')
export class ResumeController {
  @Get()
  getResume(@Res() res: Response) {
    const documentPath = path.join(__dirname,'../../assets/resume.pdf'); // Adjust path as needed

    if (fs.existsSync(documentPath)) {
      return res.sendFile(documentPath, (err) => {
        if (err) {
          console.error('Error sending file:', err);
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to send file' });
        }
      });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ message: 'File Not Found' });
    }
  }
}
