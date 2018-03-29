import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { brown, blueGrey } from 'material-ui/colors'
import CssBaseline from 'material-ui/CssBaseline'

const theme = createMuiTheme({
  palette: {
    primary: brown,
    secondary: blueGrey
  }
})

export default function withRoot (Component) {
  function WithRoot (props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}
