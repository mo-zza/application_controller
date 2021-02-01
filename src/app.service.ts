import { Injectable } from '@nestjs/common';
import { TestClass } from './dto/app.dto';
import { IsString } from 'class-validator'
import { json } from 'express';

@Injectable()
export class AppService {
  getHello(params: TestClass) {
    let test = { "kamal" : "zeeeu" }
    let result = Object.assign(test, params)
    // console.log(JSON.stringify(new ClassTest()))
    // return 'Hello World!';
    return JSON.stringify(result)
  }
}
