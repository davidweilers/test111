import { Grid, List, ListItem } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <List>
                        <ListItem><Link to={`/`} >Dashboard</Link></ListItem>
                        <ListItem><Link to={`/settings`}>Settings</Link></ListItem>
                        <ListItem><Link to={`/sitemap`}>Sitemap</Link></ListItem>
                        <ListItem><Link to={`/page`}>Page</Link></ListItem>
                    </List></Grid><Grid item xs={10}>
                    <Outlet /></Grid>
            </Grid>
        </>
    );
}