import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Header from './header';
import {serie_sectionne} from '../action/selection_categories';
import {movie_sectionne} from '../action/movie_selectionne';
import { Input ,Container,Label, List} from 'semantic-ui-react'


class Movies extends Component{

    constructor() {
        super();
        this.state = {
            query: '',
            queryFilter : 'title',
            queryPlaceholder : 'Search by title'
        }
    }

    all_movies(){
        var radioFilter = this.state.queryFilter;
        var filteredMovies = this.props.movies.filter(
            (movie) => {
                if (radioFilter == 'title') {
                    return movie.title.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1;
                } else if (radioFilter == 'releaseDate') {
                    return movie.release_date.toString().startsWith(this.state.query);
                } else if (radioFilter == 'uploadDate') {
                    return movie.upload_date.toString().startsWith(this.state.query);
                }
            }
        );
        var alphaOrder = [];
        for (var i=0;  i < filteredMovies.length;i++) {
            alphaOrder.push(filteredMovies[i]);
        }
        alphaOrder.sort(function(mov1, mov2) {
            if(mov1.title < mov2.title) return -1;
            if(mov1.title > mov2.title) return 1;
            return 0;});
        return alphaOrder.map((movie) => {
            return(
                <List bulleted divided vertical size='big' key={movie.id} onClick={() => this.props.movie_sectionne(movie)}>
                    <List.Item>
                        <List.Content>
                            <List.Header><Link to="/movie">{movie.title}</Link></List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            );
        });
    }

    updateQuery(event) {
        this.setState({query : event.target.value});
    }

    updateQueryFilter(event) {
        this.setState({queryFilter : event.target.value});
        if (event.target.value == 'title') {
            this.setState({queryPlaceholder : "Search by title"});
        } else if (event.target.value == 'releaseDate') {
            this.setState({queryPlaceholder : "Search by release date (yyyy)"});
        } else if (event.target.value == 'uploadDate') {
            this.setState({queryPlaceholder : "Search by upload date (yyyy)"});
        }
    }

    render() {
        return(
            <div>
                <Header />
                <Container>
                    <h1><Label size ='huge' horizontal basic color='green' >Search a movie</Label></h1>
                <Input loading icon='search' size='large' value={this.state.query} onChange={this.updateQuery.bind(this)} placeholder={this.state.queryPlaceholder}/><br/><br/>
                <input type="radio" name="filterSelector" value="title" onClick={this.updateQueryFilter.bind(this)}/> Title
                <input type="radio" name="filterSelector" value="releaseDate" onClick={this.updateQueryFilter.bind(this)} /> Release Date
                <input type="radio" name="filterSelector" value="uploadDate" onClick={this.updateQueryFilter.bind(this)} /> Upload Date
                <br/>
                <br/>
                <div>{this.all_movies()}</div>
                    <br />
                </Container>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({serie_sectionne: serie_sectionne, movie_sectionne: movie_sectionne}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);