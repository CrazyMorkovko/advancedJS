class Gallery {
  constructor(container) {
    this.container = container;
    this.images = [];

    this.loadGallery()
  }

  loadGallery() {
    fetch('img.json').then(result => {
      return result.json();
    })
      .then(data => {
        this.images = data;
        this.updateHTML();
    });
  }

  updateHTML() {
    this.container.innerHTML = this.render();
  }

  render() {
    let img = '';
    this.images.forEach(image => {
      img += `<div><a href="${image.img}" target="_blank"><img width="500" src="${image.img}">${image.title}</a></div>`
    });

    return img;
  }
}
