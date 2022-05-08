import {makeAutoObservable} from 'mobx';

export default class ItemStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Sneakers'},
            {id: 2, name: 'Boots'},
            {id: 3, name: 'Shop All'},
            {id: 4, name: 'Sale'}
        ]
        this._brands = [
            {id: 1, name: 'New Balance'},
            {id: 2, name: 'Adidas'},
            {id: 3, name: 'Nike'},
            {id: 4, name: 'Vans'},
            {id: 5, name: 'Dr. Martens'},
        ]
        this._items = [
            {
                id: 1,
                name: '990v5',
                price: 250,
                rating: 5,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/1b34f8639dcb415a278e8ddca825409f'
            },
            {
                id: 2,
                name: '990v5',
                price: 250,
                rating: 5,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/1b34f8639dcb415a278e8ddca825409f'
            },
            {
                id: 3,
                name: '990v5',
                price: 250,
                rating: 5,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/1b34f8639dcb415a278e8ddca825409f'
            },
            {
                id: 4,
                name: '990v5',
                price: 250,
                rating: 5,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/1b34f8639dcb415a278e8ddca825409f'
            },
            {
                id: 5,
                name: '990v5',
                price: 250,
                rating: 5,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/1b34f8639dcb415a278e8ddca825409f'
            },
            {
                id: 6,
                name: '990v5',
                price: 250,
                rating: 5,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/1b34f8639dcb415a278e8ddca825409f'
            },
            {
                id: 7,
                name: '990v5',
                price: 250,
                rating: 5,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/1b34f8639dcb415a278e8ddca825409f'
            },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setItems(items) {
        this._items = items
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get items() {
        return this._items
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}