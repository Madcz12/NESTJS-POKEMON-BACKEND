import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, 
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      }
    })
  );

  const configService = app.get(ConfigService);
  const port = parseInt(configService.get('PORT') ?? '3000', 10);

  await app.listen(port);
  console.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
