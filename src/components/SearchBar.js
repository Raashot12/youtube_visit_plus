import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        event.preventDefault();
    };

    onFormSubmit = event => {
        event.preventDefault()
        this.props.onTermSubmit( this.state.term )
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={ this.onFormSubmit } className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={ this.state.term }
                            placeholder="Search for videos"
                            onChange={ e => this.setState( { term: e.target.value } ) }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
