import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { Schedule } from ".";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "boolean", nullable: true, default: false })
  admin: boolean | undefined | null;

  @Column({ type: "varchar", length: 120 })
  password: number;

  @CreateDateColumn({ type: "date" })
  createdAt: Date | string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date | string;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: Date | string;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedule: Schedule;
}

export default User;
