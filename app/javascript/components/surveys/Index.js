import React from 'react';
import * as Routes from '../../utils/Routes';
import List from './List';
class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      survey: { name: '' },
    };
  }
  render() {
    return (
      <>
        <div>
          <div className="w-100 p-3 d-flex justify-content-between">
            <h1>List of surveys</h1>
            <button type="button" className="btn btn-primary btn-lg">
              <a href={Routes.new_survey_path()} style={{ color: 'white' }}>
                Add new survey
              </a>
            </button>
          </div>
          <div>
            <List surveys={this.props} />
          </div>
        </div>
      </>
    );
  }
}
export default New;