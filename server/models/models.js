const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketItem = sequelize.define('basket_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Item = sequelize.define('item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    color: {type: DataTypes.STRING, allowNull: false},
    itemAvailable: {type: DataTypes.BOOLEAN, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    menuTextForTabs1: {type: DataTypes.STRING, allowNull: false},
    menuTextForTabs2: {type: DataTypes.STRING, allowNull: false},
    menuTextForTabs3: {type: DataTypes.STRING, allowNull: false},
    size1: {type: DataTypes.INTEGER, defaultValue: 40},
    size2: {type: DataTypes.INTEGER, defaultValue: 41},
    size3: {type: DataTypes.INTEGER, defaultValue: 42},
    size4: {type: DataTypes.INTEGER, defaultValue: 43},
    size5: {type: DataTypes.INTEGER, defaultValue: 44},
    size6: {type: DataTypes.INTEGER, defaultValue: 45},
    img1: {type: DataTypes.STRING, allowNull: false},
    img2: {type: DataTypes.STRING, allowNull: false},
    img3: {type: DataTypes.STRING, allowNull: false},
    img4: {type: DataTypes.STRING, allowNull: false},
    img5: {type: DataTypes.STRING, allowNull: false}
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const ItemInfo = sequelize.define('item_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketItem)
BasketItem.belongsTo(Basket)

Type.hasMany(Item)
Item.belongsTo(Type)

Brand.hasMany(Item)
Item.belongsTo(Brand)

Item.hasMany(Rating)
Rating.belongsTo(Item)

Item.hasMany(BasketItem)
BasketItem.belongsTo(Item)

Item.hasMany(ItemInfo, {as: 'info'})
ItemInfo.belongsTo(Item)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
    User,
    Basket,
    BasketItem,
    Item,
    Type,
    Brand,
    TypeBrand,
    Rating,
    ItemInfo
}