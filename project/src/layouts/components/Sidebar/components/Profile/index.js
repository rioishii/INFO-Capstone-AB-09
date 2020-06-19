import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import { Avatar, Typography } from "@material-ui/core"
import { getCurrentUser } from "../../../../../utility/auth"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
  },
  avatar: {
    width: 70,
    height: 70,
    background: theme.palette.primary.main
  },
  name: {
    marginTop: theme.spacing(1),
  },
}))

const Profile = props => {
  const { className, ...rest } = props

  const classes = useStyles()

  const curUser = getCurrentUser()

  const userName = `${curUser.name} ${curUser.family_name}`

  const getInitials = () => {
    let matches = userName.match(/\b(\w)/g) 
    let acronym = matches.join("")
    return acronym;
  }

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar alt="Person" className={classes.avatar}>
        {getInitials()}
      </Avatar>
      <Typography className={classes.name} variant="h4">
        {userName}
      </Typography>
    </div>
  )
}

Profile.propTypes = {
  className: PropTypes.string,
}

export default Profile
