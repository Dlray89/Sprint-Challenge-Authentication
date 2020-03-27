import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Typography, Toolbar } from "@material-ui/core"


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,

    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        textDecoration: "none"
    }
}))

export default function NavBar(){
    const classes = useStyles()

    return(
        <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{textDecoration:"none", color:"white"}}>Sir Jokes alot</Link>
            </Typography>
        </Toolbar>
        </AppBar>
        </div>
    )
}