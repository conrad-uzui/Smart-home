import { DeviceStatus } from "../enums/device-status.enum"
import { DeviceType } from "../enums/device-type.enum"

export type Device ={
  id:string,
  name:string,
  room:string,
  type:DeviceType,
  status:DeviceStatus
}