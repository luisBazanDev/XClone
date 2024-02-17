import { Model, DataTypes } from "sequelize";
import database from "../database";

class Followers extends Model {}

Followers.init(
  {
    follower_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    followee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    create_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { sequelize: database, timestamps: false }
);
