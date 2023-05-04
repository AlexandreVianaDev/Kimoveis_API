import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import RealEstate from "./realEstate.entity";
import User from "./users.entity";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date | string;

  @Column({ type: "time" })
  hour: Date | string;

  @ManyToOne(() => User, (user) => user.schedule)
  user: User;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedule)
  realEstate: RealEstate;
}

export default Schedule;
