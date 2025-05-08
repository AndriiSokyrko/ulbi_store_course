import {makeAutoObservable} from "mobx";

export default class DeviceStore   {
    constructor() {
        this._selectedType = {}
        this._selectedBrand = {}
        this._types=[
            {id: 1, name: "refrigirators"},
            {id: 2, name: "pfones"},
            {id: 3, name: "laptops"},
            {id: 4, name: "TV"},
        ]
        this._brands=[
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"},
            {id: 3, name: "Lenovo"},
            {id: 4, name: "Asus"},
        ]
        this._devices=[
            {id:1, name:"Ipfone 12 pro", rating:5, img:"https://img.jabko.ua/image/cache/catalog/products/2021/05/281559/IMG_2678-1397x1397.jpg.webp"},
            {id:2, name:"Ipfone 12 pro", rating:5, img:"https://img.jabko.ua/image/cache/catalog/products/2021/05/281559/IMG_2678-1397x1397.jpg.webp"},
            {id:3, name:"Ipfone 12 pro", rating:5, img:"https://img.jabko.ua/image/cache/catalog/products/2021/05/281559/IMG_2678-1397x1397.jpg.webp"},
            {id:4, name:"Ipfone 12 pro", rating:5, img:"https://img.jabko.ua/image/cache/catalog/products/2021/05/281559/IMG_2678-1397x1397.jpg.webp"},
            {id:5, name:"Ipfone 12 pro", rating:5, img:"https://img.jabko.ua/image/cache/catalog/products/2021/05/281559/IMG_2678-1397x1397.jpg.webp"},
            {id:6, name:"Ipfone 12 pro", rating:5, img:"https://img.jabko.ua/image/cache/catalog/products/2021/05/281559/IMG_2678-1397x1397.jpg.webp"},
            {id:7, name:"Ipfone 12 pro", rating:5, img:"https://img.jabko.ua/image/cache/catalog/products/2021/05/281559/IMG_2678-1397x1397.jpg.webp"},

        ]
        makeAutoObservable(this)
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }
    setTypes(types){
        this._types=types
    }
    setBrands(brands){
        this._brands=brands
    }
    setDevice(device){
        this._devices=device
    }

    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}

