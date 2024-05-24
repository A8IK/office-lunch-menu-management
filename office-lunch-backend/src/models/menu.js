module.exports = (database, DataTypes) => {
    const Menu = database.define('Menu', {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    });

    return Menu;
};