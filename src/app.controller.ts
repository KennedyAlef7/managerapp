import { Controller, Get, Res,   Redirect, HttpStatus, } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';



@Controller('api/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('update')
  exampleRoute(@Res() res: Response): void {
    // Send a response (e.g., HTML)
    // const htmlResponse = '<h1>Hello, this is an example response!</h1>';
    // res.status(200).send(htmlResponse);

    // Redirect to another URL
    // Note: You can choose to redirect only if certain conditions are met
    return res.redirect('https://conecta-report-bucket.s3.amazonaws.com/1.0.0/');

   
  }
}
