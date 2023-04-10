import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { CorsMiddleware } from './middlewares/cors.middleware';
// import { User } from './users/user.entity';
// import { UsersModule } from './users/users.module';
import { Article } from './articles/article.entity';
import { ArticlesModule } from './articles/articles.module';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'db',
        port: 3306,
        username: 'root',
        password: 'docker123',
        database: 'nest',
        entities: [Article],
        synchronize: true,
    }), ArticlesModule],
    controllers: [AppController],
    providers: [AppService],
})
// export class AppModule {
//     constructor(private dataSource: DataSource) { }
// }
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CorsMiddleware).forRoutes('*');
    }
}
