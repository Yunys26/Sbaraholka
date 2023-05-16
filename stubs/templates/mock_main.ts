export interface ICartItem {
  "user_id": string,
  "user_name": string,
  "id": number
  "name": string,
  "price": number,
  "city": string,
  "date": string,
  "status": EStatus,
  "photos": Iphoto []
}

export enum EStatus {
  ACTIVE = "active",
  ISACTIVE = "isActive"
}

export interface Iphoto {
  id: number,
  url: string
}



export const mockCards = {"data":[
  {
    "user_id": "d9ad4361-3fde-4f90-8649-2c812349e3bd",
    "user_name": "Иванов Иван",
    "id": 1,
    "name": "Поло мужское СБЕР",
    "price": 5000,
    "city": "Москва",
    "date": "20 февраля 22:46",
    "status": "active",
    "photos": [
      {
        "id": 1,
        "url": '../../shared/assets/image1.png'
      }
    ]
  },
  {
    "user_id": "d9ad4361-3fde-4f90-8649-2c812349e3bd",
    "user_name": "Иванов Иван",
    "id": 2,
    "name": "Поло мужское СБЕР",
    "price": 5000,
    "city": "Москва",
    "date": "20 февраля 22:46",
    "status": "active",
    "photos": [
      {
        "id": 2,
        "url": "../../shared/assets/image2.png"
      }
    ]
  },
  {
    "user_id": "d9ad4361-3fde-4f90-8649-2c812349e3bd",
    "user_name": "Иванов Иван",
    "id": 3,
    "name": "Набор вдохновение",
    "price": 3500,
    "city": "Москва",
    "date": "20 февраля 02:00",
    "status": "active",
    "photos": [
      {
        "id": 1,
        "url": "../../shared/assets/image3.png"
      }
    ]
  },
  {
    "user_id": "d9ad4361-3fde-4f90-8649-2c812349e3bd",
    "user_name": "Иванов Иван",
    "id": 4,
    "name": "Худи взрослый цветочки",
    "price": 3800,
    "city": "Москва",
    "date": "20 февраля 02:00",
    "status": "active",
    "photos": [
      {
        "id": 1,
        "url": "../../shared/assets/image4.png"
      }
    ]
  },
  {
    "user_id": "d9ad4361-3fde-4f90-8649-2c812349e3bd",
    "user_name": "Иванов Иван",
    "id": 5,
    "name": "Внешний аккамулятор с подсветкой",
    "price": 3000,
    "city": "Москва",
    "date": "20 февраля 02:00",
    "status": "active",
    "photos": [
      {
        "id": 1,
        "url": "../../shared/assets/image5.png"
      }
    ]
  },
  {
    "user_id": "d9ad4361-3fde-4f90-8649-2c812349e3bd",
    "user_name": "Иванов Иван",
    "id": 6,
    "name": "Панама черная с патчами лидер",
    "price": 2000,
    "city": "Москва",
    "date": "20 февраля 02:00",
    "status": "active",
    "photos": [
      {
        "id": 1,
        "url": "../../shared/assets/image6.png"
      }
    ]
  }
]}