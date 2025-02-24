import { Person } from "@/models"
import { addFavorite, removeFavorite } from "@/redux/states"
import { AppStore } from "@/redux/store"
import { Button } from "@mui/material"
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const FavoriteTable = () => {
  const pageSize = 5
  const dispatch = useDispatch()

  const stateFavorites = useSelector((store: AppStore) => store.favorites)
  
  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person))
  }

  const columns = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => <>{
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => handleClick(params.row)}
        >
          Delete Favorite
        </Button>
      }</>
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderActionsCell: (params: GridRenderCellParams) => <>{params.field}</>
    },
    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
      minWidth: 150,
      renderActionsCell: (params: GridRenderCellParams) => <>{params.field}</>
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      minWidth: 150,
      renderActionsCell: (params: GridRenderCellParams) => <>{params.field}</>
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Level of Happiness',
      flex: 1,
      minWidth: 150,
      renderActionsCell: (params: GridRenderCellParams) => <>{params.field}</>
    },
  ]


  return (
    <DataGrid
      disableColumnSelector
      disableRowSelectionOnClick
      initialState={{
        pagination: {
          paginationModel: { pageSize: pageSize, page: 0 },
        },
      }}
      pageSizeOptions={[5]}
      rows={stateFavorites}
      columns={columns}
      getRowId={(row) => row.id} // Es el key como en el .map, es el id asociado a cada fila
    />
  )
}
