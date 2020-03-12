import React, { useEffect, useState, useMemo } from "react"
import uploadIcon from "../../images/upload.png"
import { useDropzone } from "react-dropzone"
import theme from "../../themes"
import Typography from "@material-ui/core/Typography"
import { MuiThemeProvider } from "@material-ui/core/styles"

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#49535B",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
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
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
}

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 200,
  height: 200,
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

const Dropzone = props => {
  const [files, setFiles] = useState([])
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      props.handleOnDrop(acceptedFiles[0])
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

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
        <img src={file.preview} style={img} />
      </div>
    </div>
  ))

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <MuiThemeProvider theme={theme}>
      <Typography variant="h5" color="secondary" align="center" gutterBottom>
        <strong>Take a photo!</strong>
      </Typography>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Typography variant="body2">
          Drag 'n' drop your food photo to calculate how much your food emits!
        </Typography>
        <img
          src={uploadIcon}
          alt="upload"
          style={{ marginTop: "20px", height: "75px" }}
        />
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </MuiThemeProvider>
  )
}

export default Dropzone
