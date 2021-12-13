import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const episodeTest = {
    id: 1,
    image: "https://i.ibb.co/2FsfXqM/stranger-things.png",
    name: "",
    season: 1,
    number: 1,
    summary: "",
    runtime: 1
}

test("renders without error", () => {
    render(<Episode episode ={episodeTest}/>)
});

test("renders the summary test passed as prop", ()=> {

});

test("renders default image when image is not defined", ()=> {

});
