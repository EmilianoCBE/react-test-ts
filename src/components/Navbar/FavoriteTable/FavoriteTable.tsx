import { Person } from "@/models"
import { addFavorite } from "@/redux/states"
import { AppStore } from "@/redux/store"
import { Checkbox } from "@mui/material"
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const FavoriteTable = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
  const pageSize = 5
  const dispatch = useDispatch()

  const stateFavorites = useSelector((store: AppStore) => store.favorites)
  

  const findPerson = (person: Person) => {
    return !!selectedPeople.find(p => p.id === person.id)
  }

  const filterPerson = (person: Person) => {
    return selectedPeople.filter(p => p.id !== person.id)
  }

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person) ? 
    filterPerson(person) : [...selectedPeople, person]

    dispatch(addFavorite(filteredPeople))

    setSelectedPeople(filteredPeople)
  }

  const columns = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => <>{
        <Checkbox 
          size='small' 
          checked={findPerson(params.row)}  
          onChange={() => handleChange(params.row)}
        />
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
