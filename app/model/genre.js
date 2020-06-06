class Genre {
    act = [
    'Animation',
    'Sci-Fi',
    'History',
    'Fantasy',
    'War',
    'Crime',
    'Horror',
    'Romace',
    'Comedy',
    'Thriller',
    'Action',
    'Drama',
  ]
  anime =[
    'Sci-Fi',
    'History',
    'War',
    'Crime',
    'Horror',
    'Romace',
    'Thriller',
    'Action',
    'Drama',
    'Comedy',
    'Fantasy',
  ]

  findGenre({Genre ,Type}){    
    let genres = Genre.includes('Animation') && Type !== 'movie' ? this.anime : this.act
    let index = genres.findIndex(genre => Genre.includes(genre))
    return index != -1 ? genres[index] : 'Drama'
  }

}
module.exports = new Genre();