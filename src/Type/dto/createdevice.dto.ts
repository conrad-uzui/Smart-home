import { DeviceType } from "../enums/device-type.enum";

export class CreateDeviceDto {
  name:string;
  room:string;
  type:DeviceType;
}