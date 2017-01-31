import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header';
import { Card, Icon, Image , Rating , Button ,Popup, Container, Grid} from 'semantic-ui-react';

class Serie extends Component {

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <Card.Group itemsPerRow={1}>
                                <Card luid color='orange'>
                                    <Image src={this.props.activeSerie.cover}
                                           label={{color: 'blue', content: 'Serie', icon: 'film', ribbon: true }} />
                                    <Card.Content>
                                        <Card.Header>
                                            {this.props.activeSerie.title}
                                        </Card.Header>
                                        <Card.Meta>
                                            Release Date : {this.props.activeSerie.release_date}
                                        </Card.Meta>
                                        <Card.Description>
                                            Director : {this.props.activeSerie.director} <br />
                                            Actors : {this.props.activeSerie.actors}  <br />
                                            Genre : {this.props.activeSerie.genre}<br />
                                            Uploader : {this.props.activeSerie.uploader}<br /><br />
                                            <Button compact color='youtube' target="_blank" href ={this.props.activeSerie.youtube}>
                                                <Icon name='youtube' /> YouTube
                                            </Button>
                                            <br />
                                            <br />
                                        </Card.Description>
                                        <Popup
                                            trigger={<Button basic color='green'>More Information</Button>}
                                            content={this.props.activeSerie.description}
                                            basic
                                        />
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Icon name='user' />
                                        {this.props.activeSerie.downloadtime}
                                        <br />
                                        <Rating icon='star' defaultRating={4} maxRating={5} />
                                        <br />
                                    </Card.Content>
                                    <Button.Group attached='bottom'>
                                        <Button color='olive' target="_blank" href ={this.props.activeSerie.downloadlink}>Download DVDRIP</Button>
                                        <Button color='green' target="_blank" href ={this.props.activeSerie.downloadlinkHD}>Download HD</Button>
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
        activeSerie: state.activeSerie
    }
}

export default connect(mapStateToProps)(Serie);