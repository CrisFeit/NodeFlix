class Genre {
    genres = [
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

  findGenre(media){
    let index = this.genres.findIndex(genre => media.includes(genre))
    return index != -1 ? this.genres[index] : 'Drama'
  }

}
module.exports = new Genre();