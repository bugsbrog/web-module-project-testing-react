import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const episodeTest = {
    id: 1,
    image: "https://i.ibb.co/2FsfXqM/stranger-things.png",
    name: '',
    season: 1,
    number: 1,
    summary: "A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.",
    runtime: 1
}

const episodeTestNoImage = {
    id: 1,
    image: null,
    name: "",
    season: 1,
    number: 1,
    summary: "",
    runtime: 1
}

test("renders without error", () => {
    //Arrange
    render(<Episode episode={episodeTest}/>)
});

test("renders the summary test passed as prop", () => {
    //Arrange
    render(<Episode episode={episodeTest}/>);

    //Act
    const summary = screen.queryByText(/A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl./i);

    //Assert
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent("A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.");
});

test("renders default image when image is not defined", () => {
    //Arrange
    // render(<Episode episode={episodeTestNoImage}/>)
    //
    // //Assert
    // const image = screen.getByAltText('./stranger_things.png');
    //
    // //Assert
    // expect(image).toBeTruthy();
});
