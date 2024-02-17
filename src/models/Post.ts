import { Model, DataTypes } from "sequelize";
import database from "../database";

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_post: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT("medium"),
      allowNull: true,
    },
    is_cite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    has_files: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    likes_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    reposts_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    timestamps: true,
    modelName: "Post",
  }
);

export default Post;
