import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevicesModule } from './devices/devices.module';
import { RoomsModule } from './rooms/rooms.module';
import { AutomationModule } from './automation/automation.module';
import { DeviceController } from './device/device.controller';

@Module({
  imports: [DevicesModule, RoomsModule, AutomationModule],
  controllers: [AppController, DeviceController],
  providers: [AppService],
})
export class AppModule {}
