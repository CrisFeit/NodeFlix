class Genre {
    act = [
    'Horror',
    'Animation',
    'Sci-Fi',
    'History',
    'Fantasy',
    'Crime',
<<<<<<< HEAD
=======
    'War',
    'Thriller',
    'Mystery',
>>>>>>> f284e475ea6da6cdaef2a36228ab41c1aede481c
    'Romace',
    'Comedy',
    'Adventure',
    'Action',
    'Drama',
  ]
  anime =[
    'Horror',
    'Sci-Fi',
    'History',
    'War',
    'Crime',
    'Romace',
    'Thriller',
    'Adventure',
    'Action',
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