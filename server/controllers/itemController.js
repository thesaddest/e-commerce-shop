const uuid = require('uuid')
const path = require('path')
const {Item, ItemInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const fs = require('fs')

class ItemController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info, color, itemAvailable,
            size1, size2, size3, size4, size5, size6, menuTextForTabs1, menuTextForTabs2, menuTextForTabs3} = req.body

            // let fileName = uuid.v4() + '.jpg'
            let fileNamesArray = []
            console.log(Object.keys(req.files))
            Object.keys(req.files).map((key) => {
                let fileName = req.files[key].name
                fileName = uuid.v4() + '.png' // Generating random name
                fileNamesArray.push(fileName)
                let uploadPath = path.resolve(__dirname, '..', 'static', fileName) // The path for storing the image

                fs.writeFile(uploadPath, req.files[key].data, () => {
                    console.log(`${fileName}written successfully`)
                    })
                }
            )
            console.log(fileNamesArray)

            const item = await Item.create(
                {
                    name,
                    price,
                    brandId,
                    typeId,
                    color,
                    itemAvailable,
                    size1,
                    size2,
                    size3,
                    size4,
                    size5,
                    size6,
                    menuTextForTabs1,
                    menuTextForTabs2,
                    menuTextForTabs3,
                    img1: fileNamesArray[0],
                    img2: fileNamesArray[1],
                    img3: fileNamesArray[2],
                    img4: fileNamesArray[3],
                    img5: fileNamesArray[4]
                }
            )

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ItemInfo.create({
                        title: i.title,
                        description: i.description,
                        itemId: item.id
                    })
                )
            }

            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let items;
        if (!brandId && !typeId) {
            items = await Item.findAndCountAll({limit, offset})
        }

        if (brandId && !typeId) {
            items = await Item.findAndCountAll({where: {brandId, limit, offset}})
        }

        if (!brandId && typeId) {
            items = await Item.findAndCountAll({where: {typeId, limit, offset}})
        }

        if (brandId && typeId) {
            items = await Item.findAndCountAll({where: {typeId, brandId, limit, offset}})
        }
        return res.json(items)
    }

    async getOne(req, res) {
        const {id} = req.params
        const item = await Item.findOne({
            where: {id},
            include: [{model: ItemInfo, as: 'info'}]
        })
        return res.json(item)
    }
}

module.exports = new ItemController()