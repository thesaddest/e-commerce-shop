import {makeAutoObservable} from 'mobx';

export default class ItemStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Sneakers'},
            {id: 2, name: 'Boots'}
        ]
        this._brands = [
            {id: 1, name: 'New Balance'},
            {id: 2, name: 'Dr. Martens'}
        ]
        this._items = [
            {
                id: 1,
                name: '990v5',
                price: 250,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/1b34f8639dcb415a278e8ddca825409f'
            },
            {
                id: 2,
                name: '990v5',
                price: 250,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/1b34f8639dcb415a278e8ddca825409f'
            },
            {
                id: 3,
                name: '990v5',
                price: 250,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/1b34f8639dcb415a278e8ddca825409f'
            },
            {
                id: 4,
                name: '990v5',
                price: 250,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/1b34f8639dcb415a278e8ddca825409f'
            },
        ]
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

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get items() {
        return this._items
    }
}