import { Grid, TextField } from "@mui/material";
import Editor from "./Editor";
import { useState } from "react";

export default function Page() {
    return (
        <Grid container spacing={2}>
            <PageSettings />
            <Editor />
        </Grid>
    )
}

export const sessionGet = (text: string) => {
    return sessionStorage.getItem(text);
}
export const sessionSet = (text: string, value: string) => {
    return sessionStorage.setItem(text, value);
}

export function PageSettings() {
    const [title, setTitle] = useState(sessionGet('title'));
    const [url, setUrl] = useState(sessionGet('url'));
    const [description, setDescription] = useState(sessionGet('description'));

    return (<>
        <Grid item xs={6}>
            <TextField fullWidth name="title" label="Title" defaultValue={title} onChange={e => {
                sessionSet('title', e.target.value);
                setTitle(e.target.value);
            }} /></Grid>
        <Grid item xs={6}>
            <TextField fullWidth name="url" label="Url" defaultValue={url} onChange={e => {
                sessionSet('url', e.target.value);
                setUrl(e.target.value);
            }} /></Grid>
        <Grid item xs={12}>
            <TextField fullWidth name="description" label="Description" defaultValue={description} onChange={e => {
                sessionSet('description', e.target.value);
                setDescription(e.target.value);
            }} />
        </Grid>
    </>
    )
}