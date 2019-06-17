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
        <Grid container style={{ marginTop: 10 }}>
            <form onSubmit={onMessageSubmit}>
                <TextField
                    label="Your Message"
                    style={{ flexGrow: 1 }}
                    onChange={onMessageChange}
                    value={message}
                />

                <Button
                    type="submit"
                    color="primary"
                    style={{ margin: 12 }}

                >Send</Button>
            </form>
        </Grid>
    )
}

export default InputArea;