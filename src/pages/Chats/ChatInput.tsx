import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const InputArea = ({ onSubmit }: any) => {
    const [message, setMessage] = useState();

    const onMessageChange = (e: any) => setMessage(e.target.value);

    const onMessageSubmit = (e: any) => {
        e.preventDefault();

        onSubmit(message);

        setMessage('')
    }

    return (
        <Grid style={{ marginTop: '32px', width: '100%' }}>
            <form onSubmit={onMessageSubmit}>
                <TextField
                    style={{ flexGrow: 1, width: '100%' }}
                    onChange={onMessageChange}
                    label="Your Message"
                    variant='outlined'
                    fullWidth={true}
                    value={message}
                />
            </form>
        </Grid>
    )
}

export default InputArea;