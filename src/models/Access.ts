import { Model, DataTypes } from "sequelize";
import database from "../database";

class Access extends Model {}

Access.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    device_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    timestamps: true,
    modelName: "Access",
  }
);

export default Access;
