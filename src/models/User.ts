import { Model, DataTypes } from "sequelize";
import database from "../database";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.TEXT("tiny"),
      unique: true,
      allowNull: false,
    },
    displayname: {
      type: DataTypes.TEXT("tiny"),
      unique: true,
      allowNull: false,
    },
    avatar_url: {
      type: DataTypes.TEXT("medium"),
      allowNull: true,
    },
    banner_url: {
      type: DataTypes.TEXT("medium"),
      allowNull: true,
    },
    email: {
      type: DataTypes.TEXT("tiny"),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT("tiny"),
      allowNull: false,
    },
    followes_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    is_blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    is_reported: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: database,
    timestamps: true,
    modelName: "User",
  }
);

export default User;
