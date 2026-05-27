import { Controller,Post,Body,Get } from '@nestjs/common';
import { CreateDeviceDto } from 'src/Type/dto/createdevice.dto';
import { DevicesService } from './devices.service';

@Controller('devices')
export class DevicesController {

  constructor(private readonly devicesService:DevicesService){}

@Get()  
findAll(){
  return this.devicesService.findAll();
}

@Post()
create(@Body() dto:CreateDeviceDto){
return this.devicesService.create(dto);
}

}
