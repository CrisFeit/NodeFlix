class Genre {
    act = [
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

  findGenre(mediaGenre){
    let genres = mediaGenre.includes('Animation') ? this.anime : this.act
    let index = genres.findIndex(genre => mediaGenre.includes(genre))
    return index != -1 ? genres[index] : 'Drama'
  }

}
module.exports = new Genre();