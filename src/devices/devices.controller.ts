import { Controller,Post,Body } from '@nestjs/common';
import { CreateDeviceDto } from 'src/Type/dto/createdevice.dto';
import { DevicesService } from './devices.service';

@Controller('devices')
export class DevicesController {

  constructor(private readonly devicesService:DevicesService){}

@Post()
create(@Body() dto:CreateDeviceDto){
return this.devicesService.create(dto);
}

}
