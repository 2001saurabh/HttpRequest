import React, { Component } from "react";
import axios from "axios";
export default class AddAlbum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // used the name property of each field to handle the change
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/albums", this.state)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userId, title } = this.state;
    return (
      <div
        class="ui center  container"
        style={{ maxHeight: "400", minWidth: "400", marginTop: "60px" }}
      >
        <form class="ui form" onSubmit={this.submitHandler}>
          <div class="field">
            <label>Album No</label>
            <input
              type="text"
              name="userId"
              placeholder="Album No"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div class="field">
            <label>Memories Message</label>
            <input
              type="text"
              name="title"
              placeholder="Memories Message"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          {/* <div class="field">
            <label>Image Url</label>
            <input
              type="text"
              name="thumbnailUrl"
              placeholder="Image Url"
              value={thumbnailUrl}
              onChange={this.changeHandler}
            />
          </div> */}

          <button class="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
