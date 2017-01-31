import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Header from './header';
import {Cat_serie_clicked} from '../action/selection_categories';
import {serie_clicked} from '../action/serie_selectionne';
import { Input ,Container,Label, List} from 'semantic-ui-react'


class Series extends Component{

    constructor() {
        super();
        this.state = {
            query: '',
            queryFilter : 'title',
            queryPlaceholder : 'Search by title'
        }
    }

    all_series(){
        var radioFilter = this.state.queryFilter;
        var filteredSeries = this.props.series.filter(
            (serie) => {
                if (radioFilter == 'title') {
                    return serie.title.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1;
                } else if (radioFilter == 'releaseDate') {
                    return serie.release_date.toString().startsWith(this.state.query);
                } else if (radioFilter == 'uploadDate') {
                    return serie.upload_date.toString().startsWith(this.state.query);
                }
            }
        );
        var alphaOrder = [];
        for (var i=0;  i < filteredSeries.length;i++) {
            alphaOrder.push(filteredSeries[i]);
        }
        alphaOrder.sort(function(mov1, mov2) {
            if(mov1.title < mov2.title) return -1;
            if(mov1.title > mov2.title) return 1;
            return 0;});
        return alphaOrder.map((serie) => {
            return(
                <List bulleted divided vertical size='big' key={serie.id} onClick={() => this.props.serie_clicked(serie)}>
            <List.Item>
                <List.Content>
                    <List.Header><Link to="/serie">{serie.title}</Link></List.Header>
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
                    <h1><Label size ='huge' horizontal basic color='green' >Search a serie</Label></h1>
                    <Input loading icon='search' size='large' value={this.state.query} onChange={this.updateQuery.bind(this)} placeholder={this.state.queryPlaceholder}/><br/><br/>
                    <input type="radio" name="filterSelector" value="title" onClick={this.updateQueryFilter.bind(this)}/> Title
                    <input type="radio" name="filterSelector" value="releaseDate" onClick={this.updateQueryFilter.bind(this)} /> Release Date
                    <input type="radio" name="filterSelector" value="uploadDate" onClick={this.updateQueryFilter.bind(this)} /> Upload Date
                    <br/>
                    <br/>
                    <div>{this.all_series()}</div>
                    <br />
                </Container>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        categories_serie: state.categories_serie,
        series: state.series
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({Cat_serie_clicked: Cat_serie_clicked, serie_clicked: serie_clicked}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Series);