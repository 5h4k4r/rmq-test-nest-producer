import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('GREETING_SERVICE') private client: ClientProxy
  ) { }

  async getHello() {
    const message = await firstValueFrom(this.client.send<string, string>('greeting-async', 'Progressive Coder'));
    Logger.log('message sent to queue');
    return message;
  }
}
