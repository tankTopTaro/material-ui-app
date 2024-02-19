// eslint-disable-next-line no-unused-vars
import { Typography, Button, Container } from "@mui/material"
import { KeyboardArrowRight } from "@mui/icons-material"

export default function Create() {
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
                color="secondary" 
                variant="contained"
            >
                Submit
            </Button>
        </Container>
    )
}