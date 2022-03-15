import React, { Component } from 'react';

class TrackSearch extends Component {
    state = { 
        searchTerm : ''
    }

    updateSearchTerm = e => {
        this.setState({
            searchTerm : e.target.value
        })
    }


    render() {
        return (
            <div>
                <form>
                    <input type='text' />
                    <button>
                        icon
                    </button>
                </form>
            </div>
        );
    }
}

export default TrackSearch;