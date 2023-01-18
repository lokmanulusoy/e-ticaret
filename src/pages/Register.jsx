import React, { Component } from "react";
export default class Login extends Component {
  state = {
    first:"",
    last:"",
    username: "",
    pass: "",
    confirm:"",
  };
  handleChange = (evt) => {
    const fields = Object.assign({}, this.state);
    fields[evt.target.name] = evt.target.value;
    this.setState({...fields});
  };
  render() {
    return (
      <div className="flex justify-center ">
        <div className="flex flex-col absolute top-[30%] shadow-lg border-2px rounded-lg p-5 w-[60%]">
          <text className="text-2xl">Kayıt Ol</text>
          <div className="flex mt-3">
          <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3]  focus:border-[#8a4af3] ease-linear duration-200 "
              placeholder="Adı"
              name="Adı"
              value={this.state.first}
              onChange={this.handleChange}
              required
            />
                <input
              className="border-[2px] rounded-lg w-[100%] ml-3 p-2 outline-[#8a4af3]  focus:border-[#8a4af3] ease-linear duration-200 "
              placeholder="Soyadı"
              name="Soyadı"
              value={this.state.last}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3]  focus:border-[#8a4af3] ease-linear duration-200 "
              placeholder="Kullanıcı Adı"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
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
            <input
              className="border-[2px] rounded-lg w-[100%] ml-3 p-2 outline-[#8a4af3]  focus:border-[#8a4af3] ease-linear duration-200 "
              placeholder="Tekrar Şifre"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
          </div>
          <input
            className="btn mt-7 hover:scale-[1.02]"
            type="button"
            value="Kayıt Ol"
          />
        </div>
      </div>
    );
  }
}
