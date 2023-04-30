import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("categories")
class Category {
   @PrimaryColumn()
    id?: string;
    
    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(_name : string,
       _description: string,
       _created_at : Date) {
    if(!this.id) {
       this.id = uuidv4();
    }
    this.created_at = _created_at;
    this.description = _description;
    this.name = _name;
    }
}

export { Category }