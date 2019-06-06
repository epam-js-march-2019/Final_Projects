import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, GridList, GridListTile, GridListTileBar, Typography } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { tileData } from '../datastore.js';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    textTransform: 'uppercase',
  },
  gridList: {
      width: '100%',
      paddingBottom: theme.spacing(8),
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
    margin: theme.spacing(2),
  },
 
}));
 
export default function PriceList() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Container className={classes.container} component="section">
        <Typography variant="h4" marked="center" align="center" component="h2">
            {'Our services & prices'}
        </Typography>
      </Container>
      <Container className={classes.root} component="section">
        <GridList cellHeight={200} className={classes.gridList}>        
            {tileData.map(tile => (
              <GridListTile key={tile.img} component={RouterLink} to="/profile">
                <img src={tile.url} alt={tile.title} />
                <GridListTileBar 
                  title={tile.title}
                  subtitle={<span>starting from: {tile.price}</span>}
                  actionIcon={
                      <AssignmentIcon aria-label={`info about ${tile.title}`} className={classes.icon}></AssignmentIcon>
                  }
                />
              </GridListTile>
            ))}
        </GridList>
      </Container>
    </div>
  );
}