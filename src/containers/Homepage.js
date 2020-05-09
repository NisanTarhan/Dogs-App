import React from 'react';
import styled from 'styled-components'
import dogs from "../dogsdata";
import { Dog } from "../components";
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions';

class Homepage extends React.Component {

    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        const { loadingFavorites, errorMessage } = this.props
        if (loadingFavorites) {
            return <div>
                <h1>Sayfa Yukleniyor...</h1>
            </div>
        }
        if (errorMessage) {
            return <div>
                <h1>{errorMessage}</h1>
            </div>
        }
        return (
            <div>
                <StyledList>
                    {
                        dogs.map((dog) => {
                            return <Dog
                                key={dog.id}
                                id={dog.id}
                                {...dog} />
                        })
                    }
                </StyledList>
            </div>
        );
    }
}

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-inline-start: 20px;
`

const mapDispatchToProps = {
    fetchData
}

const mapStateToProps = state => {
    const { favorites, loadingFavorites, disableButtonById, errorMessage } = state.dogsReducer;
    return {
        favorites,
        loadingFavorites,
        disableButtonById,
        errorMessage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);