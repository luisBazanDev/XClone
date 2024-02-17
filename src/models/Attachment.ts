import { Model, DataTypes } from "sequelize";
import database from "../database";

class Attachment extends Model {}

Attachment.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    oden_index: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT("medium"),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("IMG", "VIDEO", "FILE"),
    },
  },
  { sequelize: database, timestamps: true, modelName: "Attachment" }
);

export default Attachment;
