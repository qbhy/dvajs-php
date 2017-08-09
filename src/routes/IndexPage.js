import React, {Component} from 'react';
import {connect} from 'dva';


class IndexPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false});
        }, 2000);
    }


    render() {
        return (
            <div>
                <button onClick={()=>{
                    alert('click');
                }}>按钮</button>
                首页 {this.state.loading ? this.props.user[0].name : 'loading false'}
            </div>
        );
    }
}

IndexPage.propTypes = {};

export default connect(state => state)(IndexPage);
