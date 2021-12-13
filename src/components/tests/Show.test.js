import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {queryAllByTestId, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const testShow = {
    name: "Stranger Things",
    summary: "",
    seasons: [
        {
            id: 0,
            name: "Season 1",
            episodes: []
        },
        {
            id: 1,
            name: "Season 2",
            episodes: []
        },
    ]
};

test('renders without errors', () => {
    //Arrange
    render(<Show show={testShow} selectedSeason={"none"}/>)
});

test('renders Loading component when prop show is null', () => {
    //Arrange
    render(<Show show={null}/>)

    //Act
    const loading = screen.queryByTestId('loading-container');

    //Assert
    expect(loading).toBeInTheDocument();
});

test('renders same number of options seasons are passed in', () => {
    //Arrange
    render(<Show show={testShow} selectedSeason={"none"}/>);

    //Act
    const seasonOptions = screen.queryAllByTestId("season-option");

    //Assert
    expect(seasonOptions).toHaveLength(2)

});

test('handleSelect is called when an season is selected', () => {
    const handleSelect = jest.fn();
    //Arrange
    render(<Show show={testShow} selectedSeason={"none"} handleSelect={handleSelect}/>);

    //Act
    const select = screen.getByLabelText(/Select A Season/i);
    userEvent.selectOptions(select, ['1']);

    //Assert
    expect(handleSelect).toBeCalled();
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    //Arrange
    const { rerender } = render(<Show show={testShow} selectedSeason={"none"}/>)

    //Act
    let episodes = screen.queryByTestId('episodes-container');

    //Assert
    expect(episodes).not.toBeInTheDocument();

    //Rerender
    rerender(<Show show={testShow} selectedSeason={1}/>);

    //Act
    episodes = screen.queryByTestId('episodes-container');

    //Assert
    expect(episodes).toBeInTheDocument();
});
