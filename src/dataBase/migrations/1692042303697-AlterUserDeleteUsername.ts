import { MigrationInterface, QueryRunner, TableColumn, TableIndex } from "typeorm"

export class AlterUserDeleteUsername1692042303697 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "username");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "username",
                type: "varchar",
            }),
        );
    }

}
