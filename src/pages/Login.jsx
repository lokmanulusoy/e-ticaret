import React, { Component } from "react";
export default class Login extends Component {
  state = {
    username: "",
    pass: "",
  };
  handleChange = (evt) => {
    const fields = Object.assign({}, this.state);
    fields[evt.target.name] = evt.target.value;
    this.setState({ ...fields });
  };
  render() {
    return (
      <div className="flex justify-center ">
        <div className="flex flex-col absolute top-[30%] shadow-lg border-2px rounded-lg p-5 w-[60%]">
          <text className="text-2xl">Giriş</text>
          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3]  focus:border-[#8a4af3] ease-linear duration-200 "
              placeholder="Kullanıcı Adı"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3]  focus:border-[#8a4af3] ease-linear duration-200 "
              placeholder="Şifre"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
              required
            />
          </div>
          <input
            className="btn mt-7 hover:scale-[1.02]"
            type="button"
            value="Giriş Yap"
          />
        </div>
      </div>
    );
  }
}
