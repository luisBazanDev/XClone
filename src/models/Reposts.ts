import { Model, DataTypes } from "sequelize";
import database from "../database";

class Reposts extends Model {}

Reposts.init(
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
    modelName: "Reposts",
  }
);

export default Reposts;
