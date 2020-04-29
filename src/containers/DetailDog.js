import React from 'react';
import dogsdata from '../dogsdata';
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap'

const DetailDog = ({ match }) => {
    const { id } = match.params;
    const chosenDog = dogsdata.find(dog => dog.id === id);
    return (
        <div style={styles.cardContainer}>
            <Card style={styles.card}>
                <CardBody>
                    <CardImg top width="100%" src={chosenDog.image} alt="dog" />
                    <CardTitle style={styles.cardTitle}>{chosenDog.name}</CardTitle>
                    <CardText style={styles.cardText}>{chosenDog.description}</CardText>
                    <CardText style={styles.cardText}>{chosenDog.breed}</CardText>
                    <CardText style={styles.cardText}>{chosenDog.age}</CardText>
                </CardBody>
            </Card>
        </div >
    )
}

const styles = {
    cardContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    card: {
        margin: '1.5rem',
        width: "40%",
        boxShadow: "10px 10px 26px rgba(0,0,0,0.25)"
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: "1.5rem",
        margin: "1rem",
        textAlign: "center",
    },
    cardText: {
        margin: "1rem"
    }
}

export default DetailDog;