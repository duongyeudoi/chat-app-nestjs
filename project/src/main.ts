import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
async function bootstrap() {
  const { PORT } = process.env;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  try {
    await app.listen(PORT, () => console.log(`Running on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
