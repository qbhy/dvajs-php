import React from 'react';
import {connect} from 'dva';


class IndexPage extends React.Component {


    render() {
        return (
            <div>
                首页 ?
            </div>
        );
    }
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
