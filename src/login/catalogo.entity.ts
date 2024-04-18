import { Column, Double, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Genero } from "./genero.entity";

@Entity()
export class Catalogo {
    @PrimaryGeneratedColumn()
    id_catalogo: number

    @OneToOne(() => Genero) @JoinColumn()
    id_genero: string;

    @Column({ length: 40 })
    descricao: string;

    @Column({ length: 100 })
    iamgem: string;

    @Column({ length: 7, precision: 2 })
    preco_unitario: Double;

    @Column({ length: 7, precision: 2 })
    disopnivel: number;

    @Column({ length: 1 })
    vendido: number;

}

// id_catalogo int [pk]
//   id_genero int [ref: > Genero.id_genero]
//   descricao varchar(40)
//   imagem varchar(100)
// preco_unitario numeric(7,2)
//       disponivel int
//       vendido int