import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductItem({ product, setStateModal }) {
    const styles = {
        media: {
            objectFit: 'contain'
        }
    };
    return (
        <Card sx={{
            mb: 2,
            minWidth: 370
        }}>
            <CardActionArea
                onClick={() => setStateModal(product)}
            >
                <CardMedia
                    className='shoe-img'
                    component="img"
                    height="300"
                    image={product.image}
                    alt="shoes image"
                    style={styles.media}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    style={{
                        backgroundColor: "#121212"
                    }}
                    variant='contained'
                    color='primary'
                    endIcon={<ShoppingCartIcon />}>
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductItem