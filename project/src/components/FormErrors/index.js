import React from "react"
import Typography from "@material-ui/core/Typography"

function FormErrors(props) {
  if (
    props.formerrors &&
    (props.formerrors.blankfield || props.formerrors.passwordmatch)
  ) {
    return (
      <>
        <Typography
          variant="body1"
          style={{ color: "#F32013", marginBottom: "15px" }}
        >
          {props.formerrors.passwordmatch
            ? "Password value does not match confirm password value"
            : ""}
        </Typography>
        <Typography
          variant="body1"
          style={{ color: "#F32013", marginBottom: "15px" }}
        >
          {props.formerrors.blankfield ? "All fields are required" : ""}
        </Typography>
      </>
    )
  } else if (props.apierrors) {
    return (
      <Typography
        variant="body1"
        style={{ color: "#F32013", marginBottom: "15px" }}
      >
        {props.apierrors}
      </Typography>
    )
  } else if (props.formerrors && props.formerrors.cognito) {
    return (
      <Typography
        variant="body1"
        style={{ color: "#F32013", marginBottom: "15px" }}
      >
        {props.formerrors.cognito.message === "Username cannot be empty"
          ? "Email cannot be empty"
          : props.formerrors.cognito.message}
      </Typography>
    )
  } else {
    return <div />
  }
}

export default FormErrors
