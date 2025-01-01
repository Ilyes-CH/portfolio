import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResumeController } from './resume/resume.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../assets'), // Adjust the path to point to your assets folder
      serveRoot: '/assets', // The route at which the assets are served (e.g., http://localhost:3000/assets)
    }),
  ],
  controllers: [AppController, ResumeController],
  providers: [AppService],
})
export class AppModule {}
