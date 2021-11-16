import React, { Component } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response);
        this.setState({ album: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "error retreiving data" });
      });
  }

  render() {
    const { album, errorMsg } = this.state;
    // const album.map((albums) => )
    return (
      <div>
        <Typography variant="h2" component="header" backgroundColor="#6666">
          Albums
        </Typography>
        <div
          style={{
            marginLeft: "500px",
            display: "block",
          }}
        >
          {album.length
            ? album.map((albums) => (
                <div
                  key={albums.id}
                  style={{
                    margin: "60px",
                  }}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={albums.thumbnailUrl}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {albums.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
              ))
            : null}
          {errorMsg ? <div> {errorMsg} </div> : null}
        </div>
      </div>
    );
  }
}
