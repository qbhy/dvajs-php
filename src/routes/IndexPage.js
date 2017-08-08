import React from 'react';
import {connect} from 'dva';


class IndexPage extends React.Component {
    render() {
        return (
            <div>
                首页 ? {JSON.stringify(this.props.user)}
            </div>
        );
    }
}

IndexPage.propTypes = {};

export default connect(state => state)(IndexPage);
