// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directors = moviesArray.map(movie => movie.director)

    const uniqueDirectors = [...new Set(directors)];

    return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDrama = moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg');
    return spielbergDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length === 0){
        return 0;
    }

  const scores = moviesArray.map(movies => movies.score).filter(score => typeof score === 'number')
    
  const sum = scores.reduce((sum,movieScore) => sum + movieScore);

  const average = sum / moviesArray.length;

  const roundedAverage = Math.round(average * 100)/100;

  return roundedAverage;
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramas = moviesArray.filter(movie => movie.genre.includes('Drama'));

    const scores = dramas.map(movies => movies.score);
    
    if(dramas.length === 0 || scores.length === 0){
        return 0;
    }
    
    const sum = scores.reduce((sum,movieScore) => sum + movieScore);

    const average = sum / dramas.length;
    
    return Math.round(average * 100) / 100;;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const sortedMovies = moviesArray.sort((a, b) => {
        if(a.year === b.year){
            return a.title.localeCompare(b.title)
        }else{
            return a.year - b.year
        }
    });

    const newSorted = [...new Set(sortedMovies)]

    return newSorted;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const titleSorted = moviesArray.sort((a,b) => a.title.localeCompare(b.title))

   return titleSorted.splice(0,20).map(movie => movie.title)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const updatedMovies = moviesArray.map(movie => {
      const durationParts = movie.duration.split(' ');
      let totalMinutes = 0;
  
      for (const part of durationParts) {
        const value = parseInt(part);
        if (part.includes('h')) {
          totalMinutes += value * 60; // Convert hours to minutes
        } else if (part.includes('min')) {
          totalMinutes += value; // Add remaining minutes
        }
      }
  
      return {
        ...movie,
        duration: totalMinutes
      };
    });
  
    return updatedMovies;
  }
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
