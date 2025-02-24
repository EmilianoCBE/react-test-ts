import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { CustomDialog, dialogOpenSubject$ } from "../CustomDialog"
import { FavoriteTable } from "./FavoriteTable"
import { AppStore } from "@/redux/store"
import { useSelector } from "react-redux"

export const Navbar = () => {
  useSelector((store: AppStore) => store.people)

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true
  }

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>

      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Test
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
            Open Favorites
          </Button>
        </Toolbar>
      </AppBar>

    </>
  )
}
