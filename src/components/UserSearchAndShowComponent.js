import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';


class UserSearchAndShowComponent extends Component {

    state = {
        images: []
    };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
                <ImageList images={this.state.images}></ImageList>
            </div>
        );
    }
}

export default UserSearchAndShowComponent;