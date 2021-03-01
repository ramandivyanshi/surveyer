import React from "react";

class New extends React.Component {
  render() {
    return (
      <>
        <div>
          <div className="w-100 p-3 d-flex justify-content-between">
            <h1>List of Surveys</h1>
            <button type="button" className="btn btn-primary btn-lg">
              Add new Survey
            </button>
          </div>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col" colSpan="3">
                  Survey name
                </th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3">Mark</td>
                <td>
                  <button type="button" className="btn btn-warning">
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default New;
