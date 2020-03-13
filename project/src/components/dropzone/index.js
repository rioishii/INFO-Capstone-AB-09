import React, { useEffect, useState, useMemo } from "react"
import uploadIcon from "../../images/upload.png"
import axios from "axios"
import { useDropzone } from "react-dropzone"
import theme from "../../themes"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles(theme => ({
  paper: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(4),
    maxWidth: "500px",
    textAlign: "center",
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  dropzone: {
    height: "300px",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  uploadIcon: {
    width: "65px",
  },
}))

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "100px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#49535B",
  borderStyle: "dashed",
  color: "#49535B",
  outline: "none",
  transition: "border .24s ease-in-out",
}

const activeStyle = {
  borderColor: "#2196f3",
}

const acceptStyle = {
  borderColor: "#8ED73D",
}

const rejectStyle = {
  borderColor: "#ff1744",
}

const thumbsContainer = {
  height: "300px",
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(2),
  marginBottom: theme.spacing(4),
}

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  width: 250,
  height: 250,
  padding: 4,
  boxSizing: "border-box",
}

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
}

const img = {
  display: "block",
  width: "auto",
  height: "100%",
}

const Dropzone = () => {
  const classes = useStyles()
  const [files, setFiles] = useState([])
  const [score, setScore] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [prediction, setPrediction] = useState("")
  const [probability, setProbability] = useState("")
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const reset = () => {
    setFiles([]);
    setScore("");
    setSubmitted(false);
    setPrediction("");
    setProbability("");
  }

  const onImageSubmit = () => {
    console.log(files)
    setScore("69")
    setSubmitted(true)
    const formData = new FormData()
    formData.append("image", files)

    axios
      .post("http://127.0.0.1:5000/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(res => {
        if (res.data.success === true) {
         
          setPrediction(res.data.prediction)
          setProbability(res.data.probability)
          console.log(res.data.prediction)
          console.log(res.data.probability)
        }
      })
  }

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject]
  )

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="food" />
      </div>
    </div>
  ))

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  const renderImage = () => {
    if (files === undefined || files.length === 0) {
      return (
        <div {...getRootProps({ style })} className={classes.dropzone}>
          <input {...getInputProps()} />
          <img src={uploadIcon} alt="upload" className={classes.uploadIcon} />
        </div>
      )
    } else {
      return <aside style={thumbsContainer}>{thumbs}</aside>
    }
  }

  const renderCard = () => {
    if (!submitted) {
      return (
        <MuiThemeProvider theme={theme}>
          <Paper elevation={3} className={classes.paper}>
            <Typography
              variant="h4"
              color="primary"
              align="center"
              gutterBottom
            >
              <strong>Drap and Drop!</strong>
            </Typography>
            <Typography variant="body2" gutterBottom>
              Submit your photo here to calculate how much your food emits!
            </Typography>
            {renderImage()}
            <Button
              variant="contained"
              color="primary"
              style={{ color: "#fff", width: "200px" }}
              onClick={onImageSubmit}
              disabled={files.length === 0 ? true : false}
            >
              See Your Score Now
            </Button>
          </Paper>
        </MuiThemeProvider>
      )
    } else {
      return (
        <MuiThemeProvider theme={theme}>
          <Paper elevation={3} className={classes.paper}>
            <Typography
              variant="h4"
              color="primary"
              align="center"
              gutterBottom
            >
              <strong>Score: {score}</strong>
            </Typography>
            <Typography variant="body2" color="primary">
              {/* {probability} {prediction} */}
              99% steak
            </Typography>
            {renderImage()}
            <Button
              variant="contained"
              color="primary"
              style={{ color: "#fff", width: "200px" }}
              onClick={reset}
            >
              Reset
            </Button>
          </Paper>
        </MuiThemeProvider>
      )
    }
  }

  return (
    renderCard()
  )
}

export default Dropzone
