import React, { useState, Fragment } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        opacity: 0.6
    },
    toolbarMargin: theme.mixins.toolbar,

    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        opacity: 0.6,
    },
});

const RenderMenu = withStyles(styles)(

    (props) => (<Menu
        anchorEl={props.anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={props.menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={props.isMenuOpen}
        onClose={props.handleMenuClose}
    >
        <MenuItem
            onClick={() => {props.handleMenuClose(); props.history.push('./signin') }}>
            Login
        </MenuItem>
        <MenuItem onClick={() => {props.handleMenuClose(); props.history.push('/signin'); }}>
            My account
        </MenuItem>
        <MenuItem
            onClick={()=>{props.handleMenuClose();props.setLogged(false);}}>
            Logout
        </MenuItem>

    </Menu>
    )
);
const RenderMobileMenu = withStyles(styles)(
    (props) => (
        <Menu
            anchorEl={props.mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={props.mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={props.isMobileMenuOpen}
            onClose={props.handleMobileMenuClose}
        >


            <MenuItem
                onClick={() => { props.handleMenuClose(); props.history.push('./signin') }}>
                Login
            </MenuItem>
            <MenuItem onClick={() => { props.handleMenuClose(); props.history.push('/signin'); }}>My account</MenuItem>
        </Menu>
    )
);



const MyToolbar = withStyles(styles)(
    (props) => (
        <Fragment>
            <AppBar>
                <Toolbar>
                    <IconButton
                        className={props.classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={props.onMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="title"
                        color="inherit"
                        className={props.classes.flex}
                    >
                        {props.title}
                    </Typography>
                    <div className={props.classes.grow} />
                    <div className={props.classes.sectionDesktop}>
                        <IconButton aria-label="show add shoppins" color="inherit">
                            <Badge badgeContent={1} color="secondary">
                                <AddShoppingCartIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={props.menuId}
                            aria-haspopup="true"
                            onClick={props.handleProfileMenuOpen}
                            color="inherit"
                        >
                            {props.isLogged ? <AccountCircle /> : <LockIcon />}

                        </IconButton>
                    </div>
                    <div className={props.classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={props.mobileMenuId}
                            aria-haspopup="true"
                            onClick={props.handleMobileMenuOpen}
                            color="inherit"
                        >

                            <MoreIcon />

                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={props.classes.toolbarMargin} />
        </Fragment>
    )
);
const MyDrawer = withStyles(styles)(
    (props) => (
        <Drawer variant={props.variant} open={props.open} onClose={props.onClose}>
            <List>
                <ListItem
                    button
                    onClick={() => {
                        props.setTitle('Home');

                        props.onClose();
                    }}
                >
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem
                    button
                    onClick={() => {
                        props.setTitle('Login');
                        props.history.push('/signin')
                        props.onClose();
                    }}
                >
                    <ListItemText>Login</ListItemText>
                </ListItem>
                <ListItem
                    button
                    onClick={() => {
                        props.setTitle('New Account');
                        props.history.push('/signup')
                        props.onClose();
                    }}
                >
                    <ListItemText>New Account</ListItemText>
                </ListItem>
            </List>
        </Drawer>
    )
);

function AppBarInteraction({ classes }) {
    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState('Home');
    const [logged, setLogged] = useState(true);

    const history = useHistory();
    const toggleDrawer = () => {
        setDrawer(!drawer);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';
    return (
        <div className={classes.root}>
            <MyToolbar
                title={title}
                onMenuClick={toggleDrawer}
                menuId={menuId}
                mobileMenuId={mobileMenuId}
                handleMobileMenuOpen={handleMobileMenuOpen}
                handleProfileMenuOpen={handleProfileMenuOpen}
                isLogged={logged}
            />
            <MyDrawer
                open={drawer}
                onClose={toggleDrawer}
                setTitle={setTitle}
                history={history}
            />
            <RenderMobileMenu
                mobileMoreAnchorEl={mobileMoreAnchorEl}
                handleMobileMenuClose={handleMobileMenuClose}
                handleProfileMenuOpen={handleProfileMenuOpen}
                mobileMenuId={mobileMenuId}
                isMobileMenuOpen={isMobileMenuOpen}
                isLogged={false} 
                handleMenuClose={handleMenuClose}
                history={history}/>

            <RenderMenu
                anchorEl={anchorEl}
                menuId={menuId}
                isMenuOpen={isMenuOpen}
                handleMenuClose={handleMenuClose}
                history={history} 
                setLogged = {setLogged}/>

        </div>
    );
}
export default withStyles(styles)(AppBarInteraction);


