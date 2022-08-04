/* 类组件使用redux */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { rootState } from "./store";
import { IUser, IUserActionType } from "./store/reducers/user";

interface IProps {
  user: IUser;
  changeName?: (name: string) => void;
}

class ClassComp extends Component<IProps> {
  protected handleChangeName(name: string) {
    this.props.changeName && this.props.changeName(name);
  }
  render() {
    const { name } = this.props.user;
    return (
      <div>
        {name}
        <br />
        <button
          onClick={() => {
            this.handleChangeName("张三");
          }}
        >
          ClassComp改变名字
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: rootState) => {
  return { ...state.user };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeName: (name: string) => {
    dispatch({
      type: IUserActionType.CHANGE,
      payload: { name },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassComp);
