import React from 'react';
import { connect } from 'react-redux';
import { Button } from "reactstrap";
import PropTypes from 'prop-types';
import { disableFavoriteButtonById, addFavoriteDog, removeFavoriteDog } from '../redux/actions'

const FavoriteActions = ({ id, disableButtonById, removeFavoriteDog, addFavoriteDog, favorites }) => {

    const toggle = (dogId) => {
        disableFavoriteButtonById(dogId)
        const foundDog = favorites.find((favorite) => favorite.dogId === dogId);
        if (foundDog) {
            removeFavoriteDog(foundDog.id, dogId)

        } else {
            addFavoriteDog(dogId);
        }
    }

    const handleToggle = () => toggle(id)

    const foundDog = favorites.find((favorite) => favorite.dogId === id);

    return (
        <div>
            {
                foundDog ?
                    <Button color="danger" disabled={id === disableButtonById} onClick={handleToggle}>Favorilerden Cikar</Button>
                    : <Button color="primary" disabled={id === disableButtonById} onClick={handleToggle}>Favoriye Ekle</Button>
            }
        </div>
    );
};

FavoriteActions.propTypes = {
    id: PropTypes.number.isRequired,
    favorites: PropTypes.array.isRequired,
    disableButtonById: PropTypes.func.isRequired,
    addFavoriteDog: PropTypes.func.isRequired,
    removeFavoriteDog: PropTypes.func.isRequired,
}

FavoriteActions.defaultProps = {
    name: "Unknown",
    favorites: [],
    disableButtonById: () => { },
    addFavoriteDog: () => { },
    removeFavoriteDog: () => { }
}

const mapDispatchToProps = {
    disableFavoriteButtonById,
    removeFavoriteDog,
    addFavoriteDog
}

const mapStateToProps = state => {
    return {
        favorites: state.dogsReducer.favorites,
        disableButtonById: state.dogsReducer.disableButtonById
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteActions);