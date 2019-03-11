import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as CategoryActions from "../../actions/category";
import styles from "./Category.css";

export class Category extends Component<Props> {
    props: Props;

    constructor(){
        super();
    }

    render () {
        return (
            <React.Fragment>
                <span>'{this.props.name}' category</span>
                <button id={this.props.id} onClick={() => this.props.delete(this.props.id)}>Delete</button>
            </React.Fragment>
        );
    }
}


function mapStateToProps(state){
    return {
        state: {}
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(CategoryActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);

// ugh:
// https://blog.scottlogic.com/2016/05/19/redux-reducer-arrays.html