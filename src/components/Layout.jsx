/* eslint-disable react/prop-types */
import { format } from "date-fns"
import { useNavigate, useLocation } from "react-router-dom"
import { AppBar, Toolbar, Avatar, createTheme } from "@mui/material"
import { AddCircleOutline, SubjectOutlined } from "@mui/icons-material"
import { Box, Drawer, Typography } from "@mui/material"
import { List, ListItemButton, ListItemIcon, ListItemText }from "@mui/material"
import styled from "@emotion/styled"

const drawerWidth = 240

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

const theme = createTheme()

export default function Layout({ children }) {
    const navigateTo = useNavigate()
    const location = useLocation()



    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary"/>,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutline color="secondary"/>,
            path: '/create'
        }
    ]

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                elevation={0}
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    backgroundColor: '#f5fefd',
                    color: '#000'
                }}
            >
                <Toolbar>
                    <Typography 
                        variant="h6"
                        sx={{flexGrow: 1}}
                    >
                        Today is the {format(new Date(), 'do MMMM y')}
                    </Typography>
                    <Typography>
                        User
                    </Typography>
                    <Avatar 
                        src="/nahida.jpg" 
                        sx={{marginLeft: theme.spacing(2)}}    
                    />
                </Toolbar>
            </AppBar>

            <Drawer 
                variant="permanent"
                anchor="left"
                sx={{ 
                    width: drawerWidth,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' } 
                }}
            >
                <Box>
                    <Typography variant="h6" sx={{padding: 2}}>
                        Mui Notes
                    </Typography>
                </Box>

                <List>
                    {menuItems.map(item => (
                        <ListItemButton 
                            key={ item.text }
                            onClick={() => navigateTo(item.path)} 
                            sx={{backgroundColor: location.pathname == item.path && '#f4f4f4' }}
                        >
                            <ListItemIcon>{ item.icon }</ListItemIcon>
                            <ListItemText primary={ item.text } />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <Box sx={{ width: '100%'}}>
                <Offset />
                { children }
            </Box>
        </Box>
    )
}