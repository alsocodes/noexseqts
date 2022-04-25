'use strict';
import { Model } from 'sequelize';

interface ProjectAssignmentAttributres {
    projectId: number;
    userId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class ProjectAssignment extends Model<ProjectAssignmentAttributres> implements ProjectAssignmentAttributres {
        projectId!: number;
        userId!: number;
        static associate(models: any) {
            // define association here
        }
    }
    ProjectAssignment.init(
        {
            projectId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
        },
        {
            sequelize,
            modelName: 'ProjectAssignment',
            tableName: 'projectAssignments',
        }
    );
    return ProjectAssignment;
};
