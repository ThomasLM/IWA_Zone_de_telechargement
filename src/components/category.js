import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import Header from './header';
import {movie_sectionne} from '../action/movie_selectionne.js';
import { Container ,Label, List} from 'semantic-ui-react'

class Category_Movie extends Component {

    Category_Movie(){
        var catMovies = [];
        for (var i=0;  i < this.props.movies.length;i++) {
            if (this.props.movies[i].genre.indexOf(this.props.active_movie_category.name) > -1) {
                catMovies.push(this.props.movies[i]);
            }
        }
        catMovies.sort(function(mov1, mov2) {
            if(mov1.title < mov2.title) return -1;
            if(mov1.title > mov2.title) return 1;
            return 0;});
        return catMovies.map((movie) => {
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

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h1><Label size ='huge' horizontal basic color='red' >Category : {this.props.active_movie_category.name}</Label></h1>
                    <br />
                <div>{this.Category_Movie()}</div>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        active_movie_category: state.active_movie_category,
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({movie_sectionne: movie_sectionne}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Category_Movie);