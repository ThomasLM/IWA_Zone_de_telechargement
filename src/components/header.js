import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router'
import { Button, Menu} from 'semantic-ui-react'

class Header extends Component{
    render() {
        return(
            <Menu inverted>
                <Menu.Item>
                    <Link to="/">
                        <Button inverted color='olive'>Home</Button>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/movies">
                        <Button inverted color='violet'>Movies</Button>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/series">
                        <Button inverted color='violet'>Series</Button>
                    </Link>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Link to="/about">
                        <Button inverted color='blue'>About</Button>
                    </Link>
                    <Link to="/login">
                        <Button inverted color='blue'>Login</Button>
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default connect()(Header);