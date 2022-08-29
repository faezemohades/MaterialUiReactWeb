import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

function ListCard(props) {
  return (
    <Box>
       <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href={props.href}>
            <ListItemIcon>
           {props.children}
            </ListItemIcon>
            <ListItemText primary={props.primary} />
          </ListItemButton>
        </ListItem>
        </List>
    </Box>
  )
}

export default ListCard
