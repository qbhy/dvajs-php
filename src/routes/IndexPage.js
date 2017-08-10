import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './indexPage.scss';


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
            <div className={styles.a}>
                <button onClick={() => {
                    alert('click');
                }}>按钮
                </button>
                <img src={require('../assets/qbhy.png')} alt=""/>
                首页 {this.state.loading ? 'aa' : 'loading false'}
            </div>
        );
    }
}

IndexPage.propTypes = {};

export default connect(state => state)(IndexPage);
