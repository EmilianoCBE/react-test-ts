import { AppBar, Toolbar, Typography } from "@mui/material"

export const Navbar = () => {
  return (
    <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Test
          </Typography>
        </Toolbar>
      </AppBar>
  )
}
