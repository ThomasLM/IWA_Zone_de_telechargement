import {combineReducers} from 'redux';
import Categories from './categories_movie';
import Active_Movie_Category from './movie_category';
import Movies from './movies';
import Active_Movie from './movie_cliked';
import Active_Serie from './serie_cliked'
import Series from './series'

const allReducers = combineReducers({
    categories : Categories,
    movies : Movies,
    series : Series,
    activeMovie : Active_Movie,
    activeSerie : Active_Serie,
    active_movie_category : Active_Movie_Category,
});

export default allReducers;