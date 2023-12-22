import { TextField } from "@mui/material";
import Editor from "./Editor";
import { useState } from "react";

export default function Page() {
    return (
        <>
            <PageSettings />
            <Editor />
        </>
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

    return (
        <>
            <TextField fullWidth name="title" label="Title" defaultValue={title} onChange={e => {
                sessionSet('title', e.target.value);
                setTitle(e.target.value);
            }} margin="dense" />
            <TextField fullWidth name="url" label="Url" defaultValue={url} onChange={e => {
                sessionSet('url', e.target.value);
                setUrl(e.target.value);
            }} margin="dense" />
        </>
    )
}