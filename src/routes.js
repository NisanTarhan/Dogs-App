import React from "react";
import { DetailDog, Homepage, FilteredDogs } from "./containers";

const routes = [
    {
        path: "/",
        exact: true,
        component: Homepage,
        title: "Anasayfa"
    },
    {
        path: "/tur/:yazilanTur",
        exact: false,
        component: FilteredDogs,
        title: "Filtrelenmis Dogs"
    },
    {
        path: "/detail/:id",
        exact: false,
        component: DetailDog,
        title: "Detay"
    },
    {
        path: "/hakkinda",
        exact: false,
        component: () => { return <div>Hakkinda Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eveniet expedita fugiat harum iure laudantium libero maxime nesciunt non, nulla odio pariatur porro, quibusdam quis sed suscipit temporibus veritatis voluptate?</div> },
        title: "Hakkinda"
    },
];

export default routes;