import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  // func สำหรับเพิ่ม message เข้าไปใน messages
  add(message: string) {
    this.messages.push(message);
  }

  // func สำหรับ clear messages
  clear() {
    this.messages = [];
  }

  constructor() {
    // กำหนดค่าเริ่มต้นให้กับ messsages = array()
    this.messages = [];
  }

}
