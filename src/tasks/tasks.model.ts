import {Column, DataType, Model, Table} from "sequelize-typescript";

interface tasks {
    id: number;
    icon: string;
    name: string;
    created: string;
    category: string;
    content: string;
    Dates: string;
    archived: boolean;
}

@Table({tableName: 'tasks'})
export class TasksModel extends Model <TasksModel, tasks> {
    @Column({type: DataType.UUID, primaryKey: true, unique: true, autoIncrement: true, allowNull: false})
    public id: number;
    @Column({type: DataType.STRING})
    public icon: string;
    @Column({type: DataType.STRING, allowNull: false})
    public name!: string;
    @Column({type: DataType.STRING, allowNull: false})
    public created: string;
    @Column({type: DataType.STRING, allowNull: false})
    public category!: string;
    @Column({type: DataType.STRING, allowNull: false})
    public content!: string;
    @Column({type: DataType.STRING, allowNull: false})
    public Dates!: string;
    @Column({type: DataType.BOOLEAN})
    public archived: boolean;

}