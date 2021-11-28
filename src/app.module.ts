import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
// import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // This for development
      autoLoadEntities: true,
    }),
    UsersModule,
    AuthModule,
    // TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
