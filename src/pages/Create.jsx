// eslint-disable-next-line no-unused-vars
import { Typography, Button, Container } from "@mui/material"

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
                type="submit" 
                color="secondary" 
                variant="contained"
            >
                Submit
            </Button>

            {/* <Button type="submit">Submit</Button>
            <Button type="submit" color="secondary" variant="outlined">Submit</Button>
            <ButtonGroup color="secondary" variant="contained">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup> */}
        </Container>
    )
}