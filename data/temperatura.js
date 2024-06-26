const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Temperatura = Sequelize.define(
        "temperatura",
        {
            idTemperatura: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                unique: true,
            },
            valor: {
                type: DataTypes.DECIMAL(10, 2), // Decimal com 10 dígitos no total e 2 casas decimais
                allowNull: false 
            },
           
        },
        { freezeTableName: true, timestamps: false }
    );
    return Temperatura;
}

