import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { RealEstate, User } from ".";

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
