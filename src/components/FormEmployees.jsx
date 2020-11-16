import React, { Component } from "react";

export default class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
    // this.onChange = this.onChange.bind(this);
    // this.submitForm = this.submitForm.bind(this);
  }

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onChangePoster = (e) => {
    this.setState({
      poster: e.target.value,
    });
  };

  onChangeComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
    const url = "https://post-a-form.herokuapp.com/api/movies";
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Film #${res.title} has been successfully added!`);
        }
      })
      .catch((e) => {
        console.error(e);
        alert("There was an error when adding the employee.");
      });
  };

  render() {
    return (
      <div>
        <h1>Entrez votre film favori !</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations à propos du film</legend>
            <div className="form-data">
              <label htmlFor="lastname">Nom du film</label>
              <input
                type="text"
                id="title"
                name="lastname"
                onChange={this.onChangeTitle}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="firstname">
                L'adresse URL du poster de votre film favori
              </label>
              <input
                type="text"
                id="poster"
                name="firstname"
                onChange={this.onChangePoster}
                value={this.state.poster}
              />
            </div>

            <div className="form-area">
              <label htmlFor="yourmessage">Mettez un commenataire ici !</label>
              <textarea
                type="text"
                id="comment"
                name="email"
                onChange={this.onChangeComment}
                value={this.state.comment}
              ></textarea>
            </div>

            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
