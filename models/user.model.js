import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const User = db.define('users', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    token: DataTypes.STRING,
    confirmed:DataTypes.BOOLEAN
});

export default User;