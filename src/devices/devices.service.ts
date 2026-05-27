import { Injectable } from '@nestjs/common';
import { Device } from 'src/Type/types/device.type';
import { CreateDeviceDto } from 'src/Type/dto/createdevice.dto';
import { randomUUID } from 'crypto';
import { DeviceStatus } from 'src/Type/enums/device-status.enum';

@Injectable()
export class DevicesService {
  private devices :Device[]=[];

  create(createdevicedto:CreateDeviceDto){
  const newDevice ={
    id:randomUUID(),
    ...createdevicedto,
    status:DeviceStatus.OFF

  }
  
  this.devices.push(newDevice);
  return newDevice;
  }
}
