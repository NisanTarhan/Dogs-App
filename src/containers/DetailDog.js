import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap'
import styled from 'styled-components';
import dogsdata from '../dogsdata';

const DetailDog = ({ match }) => {
    const { id } = match.params;
    const chosenDog = dogsdata.find(dog => dog.id === id);
    return (
        <StyledCardContainer>
            <StyledCard>
                <CardBody>
                    <CardImg top width="100%" src={chosenDog.image} alt="dog" />
                    <StyledCardTitle>{chosenDog.name}</StyledCardTitle>
                    <StyledText>{chosenDog.description}</StyledText>
                    <StyledText>{chosenDog.breed}</StyledText>
                    <StyledText>{chosenDog.age}</StyledText>
                </CardBody>
            </StyledCard>
        </StyledCardContainer >
    )
}

const StyledCardContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
`

const StyledCard = styled(Card)`
     margin: 1.5rem;
     width: 40%;
     box-shadow: 10px 10px 26px rgba(0,0,0,0.25);
`

const StyledCardTitle = styled(CardTitle)`
      font-weight: bold;
      font-size: 1.5rem;
      margin: 1rem;
      text-align: center;
`

const StyledText = styled(CardText)`
      margin: 1rem;
`

export default DetailDog;