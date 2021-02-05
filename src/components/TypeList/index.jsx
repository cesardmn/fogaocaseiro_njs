import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ItemCard from '../ItemCard'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
    scrollBehavior: 'smooth',
  },
  paper: {
    marginBottom: 10,
    minHeight: 60,
  },
  ListSubheader: {
    height: 60,
    backgroundColor: '#f2f2f2',
    color: 'inherit',
  },
}))

export default function PinnedSubheaderList({ group }) {
  const classes = useStyles()

  const typesNames = group.types

  return (
    <List className={classes.root} subheader={<li />}>
      {typesNames.map((type, index) => {
        const items = group.items.filter((item) => item.type.name === type)

        return (
          <li
            key={`section-${index}`}
            className={classes.listSection}
            id={type}
          >
            <ul className={classes.ul}>
              <ListSubheader className={classes.ListSubheader}>
                {type}
              </ListSubheader>

              {items.map((item) => (
                <ItemCard item={item} key={item.id} />
              ))}
            </ul>
          </li>
        )
      })}
    </List>
  )
}
