/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { Typography, Button, Container } from "@mui/material"
import { KeyboardArrowRight } from "@mui/icons-material"

// eslint-disable-next-line no-unused-vars
export default function Create({ theme }) {
    return (
            <Container>
                <Typography 
                    variant="h6" 
                    color="textSecondary" 
                    component="h2" 
                    gutterBottom
                >
                    Create a New Note
                </Typography>

                <Button 
                    onClick={()=>console.log('Clicked')}
                    endIcon={<KeyboardArrowRight />}
                    type="submit" 
                    variant="contained"
                    sx={(theme) => ({
                        '&:hover' : theme.btn.hover
                    })}
                >
                    Submit
                </Button>
            </Container>
    )
}