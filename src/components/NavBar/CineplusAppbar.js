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


const styles = theme => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar
});

const MyToolbar = withStyles(styles)(
    ({ classes, title, onMenuClick }) => (
        <Fragment>
            <AppBar>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={onMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.flex}
                    >
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
        </Fragment>
    )
);
const MyDrawer = withStyles(styles)(
    ({ classes, variant, open, onClose, setTitle, history }) => (
        <Drawer variant={variant} open={open} onClose={onClose}>
            <List>
                <ListItem
                    button
                    onClick={() => {
                        setTitle('Dashboard');
                        
                        onClose();
                    }}
                >
                    <ListItemText>Dashboard</ListItemText>
                </ListItem>
                <ListItem
                    button
                    onClick={() => {
                        setTitle('Login');
                        history.push('/signin')
                        onClose();
                    }}
                >
                    <ListItemText>Login</ListItemText>
                </ListItem>
                <ListItem
                    button
                    onClick={() => {
                        setTitle('New Account');
                        history.push('/signup')
                        onClose();
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
    const history = useHistory();
    const toggleDrawer = () => {
        setDrawer(!drawer);
    };
    return (
        <div className={classes.root}>
            <MyToolbar title={title} onMenuClick={toggleDrawer}  />
            <MyDrawer
                open={drawer}
                onClose={toggleDrawer}
                setTitle={setTitle}
                history={history}
            />
            
        </div>
    );
}
export default withStyles(styles)(AppBarInteraction);


