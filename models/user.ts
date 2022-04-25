'use strict';
import { Model, UUIDV4 } from 'sequelize';

interface UserAttributes {
    id: number;
    publicId: string;
    name: string;
    email: string;
    password: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class User extends Model<UserAttributes> implements UserAttributes {
        id!: number;
        publicId!: string;
        name!: string;
        email!: string;
        password!: string;

        static associate(models: any) {
            User.belongsToMany(models.Project, {
                through: models.ProjectAssignment,
                foreignKey: 'userId',
            });
        }
    }
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            publicId: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'User',
            tableName: 'users',
            paranoid: true,
        }
    );
    return User;
};
