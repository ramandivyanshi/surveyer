import React from 'react';
import * as Routes from '../../utils/Routes';
import { fetchApi } from '../../utils/API';
import { useTable } from 'react-table';
function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  const handleDelete = id => {
    let surveyDelete = confirm('Are you sure you want to delete the task?');
    if (surveyDelete) {
      fetchApi({
        url: Routes.delete_survey_path(id),
        method: 'DELETE',
        onError: response => {
          console.log(response);
        },
        onSuccess: response => {
          console.log(response);
        },
        successCallBack: () => {
          window.location.replace(Routes.surveys_path());
        },
      });
    }
  };
  return (
    <table {...getTableProps()} className="table table-dark">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}><a href={Routes.show_survey_path(row.original.id)}>{cell.render('Cell')}</a></td>;
              })}
              <td>
                <button type="button" className="btn btn-warning">
                  <a href={Routes.edit_survey_path(row.original.id)}>Edit</a>
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(row.original.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default function List({ surveys }) {
  const data = surveys;
  const columns = React.useMemo(
    () => [
      {
        Header: 'Survey Name',
        accessor: 'name',
      },
    ],
    []
  );
  return (
    <>
      <Table columns={columns} data={data.surveys} />
    </>
  );
}