import React from "react";
import * as Routes from "../../utils/Routes";

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      survey: { name: "" },
    };
  }

  render() {
    return (
      <>
        <div>
          <div className="w-100 p-3 d-flex justify-content-between">
            <h1>List of Surveys</h1>
            <button type="button" className="btn btn-primary btn-lg">
              <a href={Routes.new_survey_path()} style={{ color: "white" }}>
                Add new Survey
              </a>
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
