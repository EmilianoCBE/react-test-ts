import { DataGrid, GridRenderCellParams, renderActionsCell } from '@mui/x-data-grid';
import { People } from '@/data/people';

export const Home = () => {

  const pageSize = 5
  const columns = [
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
    <>
      <DataGrid
        disableColumnSelector
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { pageSize: pageSize, page: 0 },
          },
        }}
        pageSizeOptions={[5]}
        rows={People}
        columns={columns}
        getRowId={(row) => row.id} // Es el key como en el .map, es el id asociado a cada fila
      />

    </>
  )
}
