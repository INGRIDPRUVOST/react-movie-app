import React from 'react';
import axios from 'axios';

import './MovieForm.css';

const urlApi = 'https://post-a-form.herokuapp.com/api/movies/'

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: '',
            movieURL: '',
            message: '',
           
        };
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(e) {
        e.preventDefault();
       axios.post(urlApi, {
           title : this.state.movieName,
           poster : this.state.movieURL,
           comment: this.state.message
       })
        .then(res => {
            alert(`film ajouté !`);
        })
        .catch((error) => {
            console.log(error);
            alert(`erreur lors de l'ajout du film : ${this.state.message}`);
        });
    }

    
    render() {
        console.log(this.state.message)
        return (
            <div className="MovieForm">
                <h1>AJOUT D'UN FILM</h1>
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Infos</legend>
                        <div className="movie-data">
                            <label htmlFor="movieName">Film</label>
                            <input
                            type='text'
                            id='movieName'
                            name="movieName"
                            onChange={(e) => this.setState({movieName: e.target.value})}
                            value={this.state.movieName}
                            />
                        </div>

                        <div className="movie-data">
                            <label htmlFor="movieUrl">URL</label>
                            <input
                            type="text"
                            id="movieUrl"
                            name="movieUrl"
                            onChange={(e) => this.setState({movieURL: e.target.value})}
                            value={this.state.movieURL}
                            />
                        </div>

                        <div className="movie-data">
                            <label htmlFor="message">Message</label>
                            <textarea
                            id="message"
                            name="message"
                            onChange={(e) => this.setState({message: e.target.value})}
                            value={this.state.message}
                            />
                        </div>
                        <hr/>
                        <div className="form-data">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default MovieForm;