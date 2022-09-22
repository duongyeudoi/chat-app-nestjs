import { ISession } from 'connect-typeorm';
import {
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryColumn,
  Column,
} from 'typeorm';

@Entity({ name: 'sessions' })
export class Session implements ISession {
  @Index()
  @Column('bigint')
  expiredAt: number = Date.now();

  @PrimaryColumn('varchar', { length: 255 })
  id: string;

  @Column('text')
  json: string;

  @DeleteDateColumn()
  destroyedAt?: Date;
}
