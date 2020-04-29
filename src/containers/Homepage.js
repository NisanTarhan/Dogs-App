import React from 'react';
import dogs from "../dogsdata";
import { Dog } from "../components";
import axios from "axios";

const apiHost = "https://5ea569402d86f00016b45c95.mockapi.io";

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: [],
            loadingFavorites: false,
            loadingId: null
        }
    }

    componentDidMount() {
        // localstoragedan getirme
        /*        this.setState({
                    favorites: window.localStorage.getItem("favorites") ? JSON.parse(window.localStorage.getItem("favorites")): []
                })*/

        this.setState({
            loadingFavorites: true
        }, () => {
            axios.get(`${apiHost}/favorites`).then((result) => {
                this.setState({
                    favorites: result.data,
                    loadingFavorites: false
                })
            }).catch((err) => {
                console.log("Axios err", err);
                this.setState(({
                    loadingFavorites: false
                }))
            })
        })
    }

    toggle = (dogId) => {
        this.setState({ loadingId: dogId })
        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        if (foundDog) {
            axios.delete(`${apiHost}/favorites/${foundDog.id}`).then((result) => {
                this.setState(({
                    favorites: this.state.favorites.filter((dog) => dog.dogId !== dogId),
                    loadingId: null
                }))
            }).catch((err) => {
                console.log(err);
                this.setState(({
                    loadingId: null
                }))
            });
        } else {
            // window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
            axios.post(`${apiHost}/favorites`, {
                dogId
            }).then((result) => {
                const eklenenFavori = result.data; // {id: 1, dogId: benim yolladigim dog id, createdat: date}
                this.setState({
                    favorites: [...this.state.favorites, eklenenFavori],
                    loadingId: null
                })
            }).catch((err) => {
                console.log(err);
                this.setState(({
                    loadingId: null
                }))
            })
        }
    }

    getStatus = (dogId) => {
        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        return foundDog;
    }

    render() {
        const { loadingFavorites, loadingId } = this.state
        if (loadingFavorites) {
            return <div>
                <h1>Sayfa Yukleniyor...</h1>
            </div>
        }
        return (
            <div>
                <ul style={styles.listLayout}>
                    {
                        dogs.map((dog) => {
                            return <Dog
                                key={dog.id}
                                toggle={this.toggle}
                                id={dog.id}
                                getStatus={this.getStatus}
                                loadingId={loadingId}
                                {...dog} />
                        })
                    }
                </ul>
            </div>
        );
    }
}

const styles = {
    listLayout: {
        display: "flex",
        flexWrap: "wrap",
        paddingInlineStart: "20px"
    }
}

export default Homepage;