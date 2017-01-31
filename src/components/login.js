import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header';
import { Button, Form, Message ,Container} from 'semantic-ui-react'

class Login extends Component {

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Message
                        attached
                        header='Please Login'
                    />
                    <Form className='attached fluid segment'>
                        <Form.Input label='Email' placeholder='Email' type='text' />
                        <Form.Input label='Password' type='password' />
                        <Button color='blue'>Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(Login);