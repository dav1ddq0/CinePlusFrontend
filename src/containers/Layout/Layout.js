import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import UserProfileMenu from '../../components/UserProfile/UserProfileMenu';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        profileMenuAnchor: null,
        isProfileMenuOpen: false,
        isUserLoggedIn: false
    }

    userLoggedToggle = (isLogged) => {
        this.setState({isUserLoggedIn: isLogged});
    }

    profileMenuCloseHandler = () => {
        this.setState({
            profileMenuAnchor: null,
            isProfileMenuOpen: false
        });
    };

    profileMenuClickHandler = (event) => {
        this.setState({ 
            profileMenuAnchor: event.currentTarget,
            isProfileMenuOpen: true
        }) 
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        const profileMenuId = 'primary-search-account-menu';

        return (
            <Aux>
                <Toolbar
                    drawerMenuClicked={this.sideDrawerToggleHandler}
                    userProfileClicked={this.profileMenuClickHandler}
                    loggedIn={this.state.isUserLoggedIn}
                />
                <UserProfileMenu
                    anchorEl={this.state.profileMenuAnchor}
                    isMenuOpen={this.state.isProfileMenuOpen}
                    profileMenuId={profileMenuId}
                    closeProfileMenu={this.profileMenuCloseHandler}
                />
                <SideDrawer
                    opened={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;