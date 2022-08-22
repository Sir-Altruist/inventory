import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({ menu }) => {

    const location = useLocation()
  return (
        <ListItem button sx={{mt: 3}}>
        <Link
        to={menu.path}
        className={location.pathname === menu.path ? 'iconActive' : 'iconInactive'}>
        <ListItemIcon
        className={location.pathname === menu.path ? 'iconActive' : 'iconInactive'}>
            {menu.icon}
        </ListItemIcon>
        <ListItemText primary={menu.label} />
        </Link>
        </ListItem>
  )
}

export default Sidebar