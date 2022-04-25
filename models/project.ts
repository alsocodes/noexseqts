'use strict';
import { Model, UUIDV4 } from 'sequelize';

interface ProjectAttributes {
    id: number;
    publicId: String;
    title: string;
    status: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Project extends Model<ProjectAttributes> implements ProjectAttributes {
        id!: number;
        publicId!: string;
        title!: string;
        status!: string;

        static associate(models: any) {
            Project.belongsToMany(models.User, {
                through: models.ProjectAssignment,
                foreignKey: 'projectId',
            });
        }
    }
    Project.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            publicId: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: UUIDV4,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Project',
            tableName: 'projects',
            paranoid: true,
        }
    );
    return Project;
};
