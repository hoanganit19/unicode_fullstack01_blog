import React, { Component } from 'react'
import withRouter from '../../Services/Routes/withRouter';
import withContext from '../../Services/Context/withContext';

export class PostDetail extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {id} = this.props.params;
    const {msg} = this.props.store.data;
    console.log(msg);
    return (
      <h1>PostDetail: {id} - {msg}</h1>
    )
  }
}

export default withContext(withRouter(PostDetail))