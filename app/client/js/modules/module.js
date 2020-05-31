export const shelf = {
  init() {
    shelf.hideEmptyShelf()
  },
  hideEmptyShelf() {
    const shelfs = [...document.querySelectorAll('.shelf')]
    shelfs.forEach(item => {
      if (!item.querySelector('.shelf-item')) {
        item.classList.add('is-empty')
      }
    })
  }
}