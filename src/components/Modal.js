import React, { useEffect } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import MuiModal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Modal({ content, open, handleClose }) {
    console.log(content)

    return (
        content && <MuiModal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box
                                component="img"
                                sx={{
                                    height: 250,
                                    objectFit: 'contain'
                                }}
                                alt="The house from the offer."
                                src={content.image}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography id="transition-modal-title" variant="h5" component="h2">
                                {content && content.name}
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                {content && content.description}
                            </Typography>
                            <Typography variant="p">
                                {content && `Price: $${content.price}`}
                            </Typography>
                        </Grid>
                    </Grid>

                </Box>
            </Fade>
        </MuiModal>
    )
}

export default Modal