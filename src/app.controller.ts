import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
 
  @Get()
  @Render('index')
  home() {
    return { message: 'Hello world!' };
  }
}