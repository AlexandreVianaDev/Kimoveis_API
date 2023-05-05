import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import Address from "./addresses.entity";
import Category from "./categories.entity";
import Schedule from "./schedules.entity";

@Entity("realEstates")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "boolean", nullable: true, default: false })
  sold: boolean | undefined | null;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: Date | string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date | string;

  @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
  schedule: Schedule[];

  @ManyToOne(() => Category, (category) => category.realEstate)
  category: Category;

  @OneToOne(() => Address, (address) => address.realEstate)
  @JoinColumn()
  address: Address;
}

export default RealEstate;
