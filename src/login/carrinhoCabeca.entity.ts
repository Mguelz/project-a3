import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Login } from "./login.entity";

@Entity()
export class CarrinhoCabeca {

    @OneToOne(() => Login) @JoinColumn()
    @PrimaryGeneratedColumn()
    id_carrinho: number;

    @OneToOne(() => Login)
    @JoinColumn()
    id_login: number;

    // terminamos aqui ///////////////////////////
    // @ManyToOne(() => CarrinhoCabeca) @JoinColumn()
    // id_carrinho: number;

}

// Table carrinhoCabeca {
//       id_carrinho int [pk, increment]
//       desconto numeric(7,2)
//       id_login int [ref: > login.id_login]
//     }