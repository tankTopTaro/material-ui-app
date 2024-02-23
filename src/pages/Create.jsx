/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { Typography, Button, Container, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material"
import { KeyboardArrowRight } from "@mui/icons-material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line no-unused-vars
export default function Create({ theme }) {
    const navigateTo = useNavigate()

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('money')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title == '') {
            setTitleError(true)
        }

        if (details == '') {
            setDetailsError(true)
        }

        if (title && details) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({ title, details, category })
            }).then(() => navigateTo('/'))
        }
    }

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

                <form 
                    noValidate 
                    autoComplete="off" 
                    onSubmit={handleSubmit}
                >
                    <TextField 
                        label="Note Title"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        error={titleError}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={(theme) => ({
                            marginTop: theme.field.marginTop,
                            marginBottom: theme.field.marginBottom,
                            display: theme.field.display
                        })}
                    />
                    <TextField 
                        label="Details"
                        variant="outlined"
                        color="secondary"
                        multiline
                        rows={4}
                        fullWidth
                        required
                        error={detailsError}
                        onChange={(e) => setDetails(e.target.value)}
                        sx={(theme) => ({
                            marginTop: theme.field.marginTop,
                            marginBottom: theme.field.marginBottom,
                            display: theme.field.display
                        })}
                    />
                    <FormControl 
                        sx={(theme) => ({
                            marginTop: theme.field.marginTop,
                            marginBottom: theme.field.marginBottom,
                            display: theme.field.display
                        })}
                    >
                        <FormLabel>Note Category</FormLabel>
                        <RadioGroup  value={category} onChange={(e) => setCategory(e.target.value)}>
                            <FormControlLabel control={<Radio />} label="Money" value="money" />
                            <FormControlLabel control={<Radio />} label="Todos" value="todos" />
                            <FormControlLabel control={<Radio />} label="Reminders" value="reminders" />
                            <FormControlLabel control={<Radio />} label="Work" value="work" />
                        </RadioGroup>
                    </FormControl>
                    <Button 
                        endIcon={<KeyboardArrowRight />}
                        type="submit" 
                        variant="contained"
                        color="secondary"
                        sx={(theme) => ({
                            '&:hover' : theme.btn.hover
                        })}
                    >
                        Submit
                    </Button>
                </form>
            </Container>
    )
}