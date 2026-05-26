import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevicesModule } from './devices/devices.module';
import { RoomsModule } from './rooms/rooms.module';
import { AutomationModule } from './automation/automation.module';


@Module({
  imports: [DevicesModule, RoomsModule, AutomationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
