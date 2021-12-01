import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'

export default function LoginOrSignupForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Email:', email, "Password:", password)
    }
    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue="Email"
                value = {email}
                onInput= {(e) => setEmail(e.target.value)}
            />
            <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value = {password}
                onInput={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained">Submit</Button>
        </Box>
    );
}
