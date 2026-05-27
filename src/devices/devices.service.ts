import { Injectable } from '@nestjs/common';
import { Device } from 'src/Type/types/device.type';

@Injectable()
export class DevicesService {
  private devices :Device[]=[];

}
