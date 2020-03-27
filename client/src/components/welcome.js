import React from "react"
import { makeStyles} from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import { Card, CardActionArea, Button} from "@material-ui/core"
import Navbar from "../helperComponents/navbar"

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(2)
        },
    }
}))

function Welcome(){
    const classes = useStyles()

    return(
        <div className={classes.root}>
        <Navbar />
        <Card style={{textAlign:'center', margin:"10% auto", width:"40%" }}>
            <h1>We got jokes all day! </h1>
            <CardActionArea>
        <Button><Link to="/login">Login</Link></Button>
        <Button><Link to="/register">Register an Account</Link></Button>
            </CardActionArea>
        </Card>
        </div>
    )
}

export default Welcome