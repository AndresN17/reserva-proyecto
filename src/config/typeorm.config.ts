import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'andresn17',
  password: 'emily5578',
  database: 'reserva',
  autoLoadEntities: true,
  synchronize: true,
};
