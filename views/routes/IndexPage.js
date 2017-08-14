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
        const {user} = this.props;
        return (
            <div className={styles.container}>
                <img src={require('../assets/qbhy.png')}/>
                <h2>dvajs for php</h2>
            </div>
        );
    }
}

IndexPage.propTypes = {};

export default connect(state => state)(IndexPage);
