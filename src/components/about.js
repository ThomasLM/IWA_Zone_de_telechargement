import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header';
import { Label ,Container} from 'semantic-ui-react'

class About extends Component {

    render() {
        return (
            <div>
                <Header />
                <Container textAlign='center'>
                    <Label
                    Label as='a' color='blue' image>
                    <img src='http://semantic-ui.com/images/avatar/small/christian.jpg' />
                    Thomas LANUSSE-MONGUILOT
                    <Label.Detail>worker</Label.Detail>
                </Label>
                <Label as='a' color='yellow' image>
                    <img src='http://semantic-ui.com/images/avatar/small/christian.jpg' />
                    Jean-batipste REBOUL
                    <Label.Detail>Co-worker</Label.Detail>
                </Label>
                <Label as='a' color='teal' image>
                    <img src='http://semantic-ui.com/images/avatar/small/jenny.jpg' />
                    Oriane SENTIS
                    <Label.Detail>Co-worker</Label.Detail>
                </Label>
                </Container>
            </div>
        );
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(About);