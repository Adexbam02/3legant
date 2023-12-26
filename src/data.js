import {
  NewArrival1,
  NewArrival2,
  NewArrival3,
  NewArrival4,
  Money,
  Call,
  FastDelivery,
  Lock
} from "./assets";


export const Arrival = [
  {
    id: 1,
    name: "Loveseat Sofa",
    img: NewArrival1,
    price1: '$199.00',
    price2: '$400.00'
  },
  {
    id: 2,
    name: "Table Lamp",
    img: NewArrival2,
    price1: '$25.00',
    price2: '$12.5'
  },
  {
    id: 3,
    name: "Beige Table Lamp",
    img: NewArrival3,
    price1: '$60.00',
    price2: '$30.00'
  },
  {
    id: 4,
    name: "Bamboo basket",
    img: NewArrival4,
    price1: '$200.00',
    price2: '$100.00'
  },
];


export const fact = [
  {
    id: 1,
    img: FastDelivery,
    name: 'Free Shipping',
    info: 'Order above $200'
  },
  {
    id: 2,
    img: Money,
    name: 'Money-back',
    info: '30 days guarantee'
  },
  {
    id: 3,
    img: Lock,
    name: 'Secure Payments',
    info: 'Secure by Nurain'
  },
  {
    id: 4,
    img: Call,
    name: '24/7 Support',
    info: 'Phone and Email support'
  },
]