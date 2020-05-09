import React from 'react';
import styled from 'styled-components';
import { Card, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';
import { FavoriteActions } from "../components";
import { Link } from "react-router-dom";

const Dog = ({ id, name }) => {
    return <StyledListItem key={id} >
        <StyledCard>
            <StyledLink to={`/detail/${id}`}>
                <StyledCardTitle>{name}</StyledCardTitle>
            </StyledLink>
            <FavoriteActions
                id={id}
            />
        </StyledCard >
    </StyledListItem >
};

const StyledListItem = styled.li`
     margin: 1rem;
     list-style: none;
`

const StyledLink = styled(Link)`
    margin: 5px;
    text-decoration: none;
    text-align: center;
`

const StyledCard = styled(Card)`
     align-items: center;
     justify-content: center;
     width: 12.5rem;
     height: 8rem;
     box-shadow: 10px 10px 26px rgba(0,0,0,0.25);
`

const StyledCardTitle = styled(CardTitle)`
     padding: 5px;
     margin-bottom: 1rem;
`

Dog.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string
}

Dog.defaultProps = {
    name: "Unknown"
}

export default Dog;