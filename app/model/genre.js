class Genre {
    act = [
    'Animation',
    'Horror',
    'Sci-Fi',
    'Crime',
    'History',
    'Fantasy',
    'War',
    'Thriller',
    'Mystery',
    'Romace',
    'Comedy',
    'Action',
    'Adventure',
    'Drama',
  ]
  anime =[
    'Sci-Fi',
    'Crime',
    'History',
    'War',
    'Horror',
    'Romace',
    'Thriller',
    'Action',
    'Adventure',
    'Comedy',
    'Fantasy',
    'Drama',
  ]

  findGenre({Genre ,Type}){    
    let genres = Genre.includes('Animation') && Type !== 'movie' ? this.anime : this.act
    let index = genres.findIndex(genre => Genre.includes(genre))
    return index != -1 ? genres[index] : 'Drama'
  }

}
module.exports = new Genre();