/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {
  /**
   * @param size     Размер
   * @param stuffing Начинка
   * @throws {HamburgerException}  При неправильном использовании
   */
  constructor(size, stuffing) {
    if (size) {
      this.setSize(size);
    }
    if (stuffing) {
      this.setStuffing(stuffing);
    }
    this.toppings = [];
  }

  /**
   * Добавить добавку к гамбургеру. Можно добавить несколько – при условии, что они разные.
   *
   * @param topping     Тип добавки
   * @throws {HamburgerException}  При неправильном использовании
   */
  addTopping(topping) {
    if (!(topping instanceof HamburgerOptionsTopping)) {
      throw new HamburgerException('This is not topping!');
    }
    if (this.toppings.indexOf(topping) !== -1) {
      throw new HamburgerException('Topping already exists!');
    }
    this.toppings.push(topping);
  }

  /**
   * Убрать добавку – при условии, что она ранее была добавлена.
   *
   * @param topping   Тип добавки
   * @throws {HamburgerException}  При неправильном использовании
   */
  removeTopping(topping) {
    let toppingIndex = this.toppings.indexOf(topping);
    if (toppingIndex === -1) {
      throw new HamburgerException('Topping does not exist!');
    }
    this.toppings.splice(toppingIndex, 1);
  }

  /**
   * Получить список добавок.
   *
   * @return {Array} Массив добавленных добавок, содержит константы Hamburger.TOPPING_*
   */
  getToppings() {
    return this.toppings;
  }

  /**
   * Узнать размер гамбургера
   */
  getSize() {
    return this.size;
  }

  /**
   * Узнать начинку гамбургера
   */
  getStuffing() {
    return this.stuffing;
  }

  /**
   * Выбор начинки
   * @param stuffing Начинка
   * @throws {HamburgerException}  При неправильном использовании
   */
  setStuffing(stuffing) {
    if (!(stuffing instanceof HamburgerOptionsStuffing)) {
      throw new HamburgerException('Wrong stuffing!');
    }
    this.stuffing = stuffing;
  }

  /**
   * Выбор размера
   * @param size Размер
   * @throws {HamburgerException}  При неправильном использовании
   */
  setSize(size) {
    if (!(size instanceof HamburgerOptionsSize)) {
      throw new HamburgerException('Wrong size!');
    }
    this.size = size;
  }

  /**
   * Узнать цену гамбургера
   *
   * @return {Number} Цена в долларах
   */
  calculatePrice() {
    let toppingPrice = 0;
    // Подсчитываем цену всех топпингов.
    this.toppings.forEach(topping => toppingPrice += topping.getPrice());
    return (this.size ? this.size.getPrice() : 0) +
      (this.stuffing ? this.stuffing.getPrice() : 0) +
      toppingPrice;
  }

  /**
   * Узнать калорийность
   *
   * @return {Number} Калорийность в калориях
   */
  calculateCalories() {
    let toppingKcal = 0;
    // Подсчитываем калорийность топпингов.
    this.toppings.forEach(topping => toppingKcal += topping.getKcal());
    return (this.size ? this.size.getKcal() : 0) +
      (this.stuffing ? this.stuffing.getKcal() : 0) +
      toppingKcal;
  }
}

/**
 * Класс, описывающий опции гамбургера.
 */
class HamburgerOptions {
  /**
   * @param name  Название опции
   * @param price Цена
   * @param kcal  Калорийность
   */
  constructor(name, price, kcal) {
    this.name = name;
    this.price = price;
    this.kcal = kcal;
  }

  /**
   * @returns {string} Название опции
   */
  getName() {
    return this.name;
  }

  /**
   * @returns {number} Цена
   */
  getPrice() {
    return this.price;
  }

  /**
   * @returns {number} Калорийность
   */
  getKcal() {
    return this.kcal;
  }
}

/**
 * Класс, описывающий размер гамбургера.
 */
class HamburgerOptionsSize extends HamburgerOptions {

}

/**
 * Класс, описывающий начинки гамбургера.
 */
class HamburgerOptionsStuffing extends HamburgerOptions {

}

/**
 * Класс, описывающий топпинги гамбургера.
 */
class HamburgerOptionsTopping extends HamburgerOptions {

}

// Размеры, виды начинок и добавок
Hamburger.SIZE_SMALL = new HamburgerOptionsSize('small', 50, 20);
Hamburger.SIZE_LARGE = new HamburgerOptionsSize('large', 100, 40);
Hamburger.STUFFING_CHEESE = new HamburgerOptionsStuffing('cheese', 10, 20);
Hamburger.STUFFING_SALAD = new HamburgerOptionsStuffing('salad', 20, 5);
Hamburger.STUFFING_POTATO = new HamburgerOptionsStuffing('potato', 15, 10);
Hamburger.TOPPING_MAYO = new HamburgerOptionsTopping('mayo', 15, 0);
Hamburger.TOPPING_SPICE = new HamburgerOptionsTopping('spice', 20, 5);

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером. Подробности хранятся в свойстве message.
 */
class HamburgerException {
  /**
   * @param message Текст ошибки
   */
  constructor(message) {
    this.message = message;
  }

  /**
   * @returns {string} Текст ошибки   */
  getMessage() {
    return this.message;
  }
}
