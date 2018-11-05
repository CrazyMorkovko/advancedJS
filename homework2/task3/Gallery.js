/**
 * Класс галереи.
 */
class Gallery {
  /**
   * @param container Объект документа для отображения галереи.
   */
  constructor(container) {
    this.container = container;
    this.images = [];

    this.loadGallery()
  }

  /**
   * Загружаем json-файл со списком картинок.
   */
  loadGallery() {
    fetch('img.json').then(result => {
      return result.json();
    })
      .then(data => {
        this.images = data;
        this.updateHTML();
    });
  }

  /**
   * Отображаем результат на страницу.
   */
  updateHTML() {
    this.container.innerHTML = this.render();
  }

  /**
   * Подготовка шаблона галереи.
   * @returns {string} Шаблон галереи
   */
  render() {
    let img = '';
    this.images.forEach(image => {
      img += `<div>
      <a href="${image.img}" target="_blank"><img width="500" src="${image.img}" alt="${image.title}"></a>
      </div>`;
    });

    return img;
  }
}
