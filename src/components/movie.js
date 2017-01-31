import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header';
import { Card, Icon, Image , Rating , Button ,Popup, Container, Grid} from 'semantic-ui-react';

class Movie extends Component {

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Grid centered columns={2}>
                        <Grid.Column>
                <Card.Group itemsPerRow={1}>
                <Card fluid color='red'>
                    <Image src={this.props.activeMovie.cover}
                           label={{ color: 'blue', content: 'Film', icon: 'film', ribbon: true }}
                    />
                    <Card.Content>
                        <Card.Header>
                            {this.props.activeMovie.title}
                        </Card.Header>
                        <Card.Meta>
                            Release Date : {this.props.activeMovie.release_date}
                        </Card.Meta>
                        <Card.Description>
                            Director : {this.props.activeMovie.director} <br />
                            Actors : {this.props.activeMovie.actors} <br />
                            Genre : {this.props.activeMovie.genre}<br />
                            Uploader : {this.props.activeMovie.uploader}<br /><br />
                            <Button compact color='youtube' target="_blank" href ={this.props.activeMovie.youtube}>
                                <Icon name='youtube' /> YouTube
                            </Button>
                            <br />
                            <br />
                        </Card.Description>
                        <Popup
                            trigger={<Button basic color='green'>More Information</Button>}
                            content={this.props.activeMovie.description}
                            basic
                        />
                    </Card.Content>
                        <Card.Content extra>
                                <Icon name='user' />
                                {this.props.activeMovie.downloadtime}
                            <br />
                            <Rating icon='star' defaultRating={4} maxRating={5} />
                            <br />
                    </Card.Content>
                    <Button.Group attached='bottom'>
                        <Button color='olive' target="_blank" href ={this.props.activeMovie.downloadlink}>Download DVDRIP</Button>
                        <Button color='green' target="_blank" href ={this.props.activeMovie.downloadlinkHD}>Download HD</Button>
                    </Button.Group>
                </Card>
                </Card.Group>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeMovie: state.activeMovie
    }
}

export default connect(mapStateToProps)(Movie);