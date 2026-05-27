import { DeviceType } from "../enums/device-type.enum";
import { IsString, IsNotEmpty, IsEnum} from 'class-validator';

export class CreateDeviceDto {
  @IsString()
  @IsNotEmpty()
  name:string;

  @IsString()
  @IsNotEmpty()
  room:string;

  @IsEnum(DeviceType)
  type:DeviceType;
}