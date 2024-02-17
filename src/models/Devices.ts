import { Model, DataTypes } from "sequelize";
import database from "../database";

class Devices extends Model {}

Devices.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    device_name: {
      type: DataTypes.TEXT("tiny"),
      allowNull: false,
    },
    type: {
      type: DataTypes.TEXT("tiny"),
      allowNull: true,
    },
  },
  {
    sequelize: database,
    timestamps: false,
    modelName: "Devices",
  }
);

export default Devices;
