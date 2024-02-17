import { Model, DataTypes } from "sequelize";
import database from "../database";

class Likes extends Model {}

Likes.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    timestamps: true,
    modelName: "Likes",
  }
);

export default Likes;
