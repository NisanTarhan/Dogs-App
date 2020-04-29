import React from 'react';
import { Button } from "reactstrap";

const FavoriteActions = ({ id, getStatus, toggle, loadingId }) => {
    return (
        <div>
            {
                getStatus(id) ?
                    <Button color="danger" disabled={id === loadingId} onClick={() => { toggle(id) }}>Favorilerden Cikar</Button>
                    : <Button color="primary" disabled={id === loadingId} onClick={() => { toggle(id) }}>Favoriye Ekle</Button>
            }
        </div>
    );
};

export default FavoriteActions;