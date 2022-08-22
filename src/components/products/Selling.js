import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'

const Selling = ({item}) => {
  return (
    <Container>
    <Card component={'div'} style={{ marginBottom: '1rem', backgroundColor: '#FEFCFF'}}>
    <CardContent sx={{ display: 'flex'}}>
    <CardMedia
        component="img"
        sx={{ width: '5rem', paddingRight: '2rem' }}
        image={item.img}
        alt="product"
      />
        <div>
        <Typography sx={{ fontWeight: 'bold', color: '#C32148'}}>{item.name}</Typography>
        <Typography variant='body2' color={'textSecondary'}>&#8358;{item.price}</Typography>
        </div>
    </CardContent>
    </Card>
    </Container>
  )
}

export default Selling