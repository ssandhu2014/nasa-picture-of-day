import React from 'react';
import ReadMoreReact from 'read-more-react';


class PhotoOfDay extends React.Component {
    state = {
        photo: ""
    };

    componentDidMount() {
        fetch("https://api.nasa.gov/planetary/apod?api_key=6EZSieImreoe3f5TIqcBYcVvbLoLvWvZvZdOfsVQ")
            .then(response => response.json())
            .then(json => this.setState({ photo: json }));
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className=" col-lg-offset-4 col-lg-8">
                    <h3 className="top-left">PIC OF THE DAY</h3>
                    <img src={this.state.photo.url} alt={this.state.photo.title} />
                    <div className="text-block">
                        {this.state.photo !== "" &&
                            <ReadMoreReact text={this.state.photo.explanation}
                                min={200}
                                ideal={250}
                                max={300}
                                readMoreText="Read more" />}
                    </div>
                </div>
            </div>
        </div>
    }
}

export default PhotoOfDay;