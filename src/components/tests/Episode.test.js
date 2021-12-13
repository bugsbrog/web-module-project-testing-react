import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const episodeTest = {
    id: 1,
    image: "https://i.ibb.co/2FsfXqM/stranger-things.png",
    name: "",
    season: 1,
    number: 1,
    summary: "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
    runtime: 1
}

const episodeTestNoImage = {
    id: 1,
    image: "",
    name: "",
    season: 1,
    number: 1,
    summary: "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
    runtime: 1
}

test("renders without error", () => {
    //Arrange
    render(<Episode episode ={episodeTest}/>)
});

test("renders the summary test passed as prop", () => {
    //Arrange
    render(<Episode episode={episodeTest}/>)

    //Act
    const summary = screen.queryByText(/A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest./i);

    //Assert
    //Why won't .toBeInTheDocument or .toHaveTextContent pass?
    expect(summary).not.toBeFalsy();
    expect(summary).toBeTruthy();
    expect(summary).not.toBeNull();
});

test("renders default image when image is not defined", () => {
    //Arrange
    render(<Episode episode={episodeTestNoImage}/>)

    //Assert
    const image = screen.queryByText('./stranger-things.png')

    expect(image).toBeInTheDocument();
});
