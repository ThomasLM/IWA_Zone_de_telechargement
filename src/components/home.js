import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Header from './header';
import {serie_sectionne} from '../action/selection_categories';
import {Cat_serie_clicked} from '../action/selection_categories';
import {movie_sectionne} from '../action/movie_selectionne';
import {serie_clicked} from '../action/serie_selectionne';
import { List,Container ,Label, Image} from 'semantic-ui-react'

class Home extends Component{

    categories() {
        return this.props.categories.map((category) => {
            return(
                <List celled horizontal size='big' key={category.name} onClick={() => this.props.serie_sectionne(category)}>
                    <List.Item>
                        <List.Content>
                            <List.Header><Link to="/category_mov">{category.name}</Link></List.Header>
                        </List.Content>
                    </List.Item>
                </List>
              );
        });
    }

    last_release() {
        var ordered = [];
        for (var i=0;  i < this.props.movies.length;i++) {
            ordered.push(this.props.movies[i]);
        }
        ordered.sort(function(mov1, mov2) {return mov1.upload_date - mov2.upload_date});
        var last_movies = ordered.slice(0,6);
        return last_movies.map((movie) => {
            return(
                <List celled horizontal size='big' key={movie.id} onClick={() => this.props.movie_sectionne(movie)}>
                    <List.Item>
                        <List.Content>
                            <Image src={movie.cover} size ='small' label={{ color: 'blue', content: 'Film', icon: 'film', ribbon: true , size:'mini'}}/>
                            <List.Header><Link to="/movie">{movie.title}</Link></List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            );
        });
    }

    last_series(){
        var ordered = [];
        for (var i=0;  i < this.props.series.length;i++) {
            ordered.push(this.props.series[i]);
        }
        ordered.sort(function(mov1, mov2) {return mov1.upload_date - mov2.upload_date});
        var last_series = ordered.slice(0,6);
        return last_series.map((serie) => {
            return(
            <List celled horizontal size='big' key={serie.id} onClick={() => this.props.serie_clicked(serie)}>
                <List.Item>
                    <List.Content>
                        <Image src={serie.cover} size ='small' label={{ color: 'blue', content: 'Serie', icon: 'film', ribbon: true, size:'mini' }} />
                        <List.Header><Link to="/serie">{serie.title}</Link></List.Header>
                    </List.Content>
                </List.Item>
            </List>
            );
        });
    }

    render() {
        return(
            <div >
                <Header />
                <Container>
                <List animated verticalAlign='middle'>
                    <h1><Label size ='huge' color='red' horizontal>Categories</Label></h1>
                    <List.Item>
                        <List.Content>
                            <List.Header>{this.categories()}</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
                <h1><Label size ='huge' color='red' horizontal>Movies</Label>
                    <Label color='teal' tag>Latest</Label>
                </h1>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <List.Content>
                            <List.Header>{this.last_release()}</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
                    <h1><Label size ='huge' color='red' horizontal>Series</Label>
                        <Label color='teal' tag>Latest</Label>
                    </h1>
                    <List animated verticalAlign='middle'>
                        <List.Item>
                            <List.Content>
                                <List.Header>{this.last_series()}</List.Header>
                            </List.Content>
                        </List.Item>
                    </List>
                    <br/><br/>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        movies: state.movies,
        series:state.series
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({serie_sectionne: serie_sectionne, movie_sectionne: movie_sectionne,serie_clicked: serie_clicked}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);