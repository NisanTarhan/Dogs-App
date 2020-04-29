import React from 'react';
import { Card, CardTitle } from 'reactstrap'
import { FavoriteActions } from "../components";
import { Link } from "react-router-dom";

const Dog = ({ id, name, toggle, getStatus, loadingId }) => {
    return <li key={id} style={styles.listItem}>
        <Card style={styles.card}>
            <Link to={`/detail/${id}`} style={styles.link}>
                <CardTitle style={styles.cardTitle}>{name}</CardTitle>
            </Link>
            <FavoriteActions
                id={id}
                toggle={toggle}
                getStatus={getStatus}
                loadingId={loadingId}
            />
        </Card >
    </li >
};

const styles = {
    listItem: {
        margin: "1rem",
        listStyle: "none",
    },
    link: {
        margin: "5px",
        textDecoration: 'none',
        textAlign: "center"
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "12.5rem",
        height: "8rem",
        boxShadow: "10px 10px 26px rgba(0,0,0,0.25)"
    },
    cardTitle: {
        padding: "5px",
        marginBottom: '1rem',
    }
}

export default Dog;