import React from 'react'
import styles from './styles.scss'
import Grid from '../../../components/Grid'
import Items from '../../../components/Items'

const HomePage = () => {
  return (
    <Grid className={styles.container}>
      <Items />
    </Grid>
  )
}

export default HomePage
