import {Injectable} from '@angular/core';
import {Master} from "../domain/Master";
import {Service} from "../domain/Service";
import {AuthService, currentUser} from "./auth.service";
import {Order} from "../domain/Order";

const LOCAL_STORAGE_ORDERS_POSTFIX = "Orders";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private authService: AuthService) {
  }

  getMasters(): Array<Master> {
    return [
      {name: "Антон", age: 36, description: "Ухаживал за бородой с 15 лет, имеет большой опыт в этом вопросе. В молодости с дедушкой стриг овец.",
      photoUrl: "assets/master-photos/master1.jpg"},
      {name: "Митрофан", age: 22, description: "Спец по хипстерским стрижкам и укладкам. Лучщий в стрижке под машинку.",
      photoUrl: "assets/master-photos/master2.jpg"},
      {name: "Марк", age: 17, description: "Самый молодой спец, вертуозно орудует бритвой. Имеет хороший вкус на модельные бороды. С нами больше 2 лет.",
      photoUrl: "assets/master-photos/master3.jpg"},
    ];
  }

  getServices(): Array<Service> {
    return [
      {description: "Стрижка", price: 200},
      {description: "Стрижка бороды", price: 100},
      {description: "Укладка волос", price: 50},
      {description: "Покраска волос", price: 150},
      {description: "Закручивание услов", price: 50},
      {description: "Бритье лица", price: 50}
    ];
  }

  getMyOrders(): Array<Order> {
    let ordersStorageName = localStorage.getItem(currentUser) + LOCAL_STORAGE_ORDERS_POSTFIX;
    return this.parseStringToArrayOfOrders(localStorage.getItem(ordersStorageName));
  }

  saveMyOrder(order: Order): void {
    let ordersStorageName = localStorage.getItem(currentUser) + LOCAL_STORAGE_ORDERS_POSTFIX;
    let ordersJSON = localStorage.getItem(ordersStorageName);
    let orders = this.parseStringToArrayOfOrders(ordersJSON);
    orders.push(order);
    localStorage.setItem(ordersStorageName, JSON.stringify(orders));
  }

  private parseStringToArrayOfOrders(ordersJSON: string): Array<Order> {
    let orders: Array<Order> = [];
    if (ordersJSON !== null) {
      ordersJSON.match(new RegExp("{[^}]*}", 'g'))
        .forEach(order => orders.push(JSON.parse(order)));
    }
    return orders;
  }
}

