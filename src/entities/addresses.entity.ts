import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import RealEstate from "./realEstate.entity";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 8 })
  zipCode: string;

  @Column({ type: "varchar", length: 7, unique: true })
  number: string;

  @Column({ type: "varchar", length: 20, unique: true })
  city: string;

  @Column({ type: "varchar", length: 2, unique: true })
  state: string;

  @OneToOne(() => RealEstate, (realEstate) => realEstate.address)
  realEstate: RealEstate;
}

export default Address;
