import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as express from 'express';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as helmet from 'helmet';

admin.initializeApp();
export const db = admin.firestore();
export const FieldValue = admin.firestore.FieldValue;
export const bucket = admin.storage().bucket();

const server = express();

export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  // ここにセキュリティについての設定を追加する
  // app.use(helmet());
  app.enableCors();

  if (process.env.FUNCTIONS_EMULATOR === 'true') {
    const config = new DocumentBuilder()
      .setTitle('Cats example')
      .setDescription('The cats API description')
      .setVersion('1.0')
      .addTag('cats')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }

  console.log('the server is starting @ firebase');
  return app.init();
};

createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch((err) => console.error('Nest broken', err));

export const api = functions.region('asia-northeast1').https.onRequest(server);
