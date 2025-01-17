import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';

import mockFetchShow from './../../api/fetchShow';
jest.mock('./../../api/fetchShow');

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


test('renders without errors with no props', () => {
    //Arrange
    render(<Display/>);
});

test('renders Show component when the button is clicked ', async() => {
    //Mock
    mockFetchShow.mockResolvedValueOnce(testShow);

    //Arrange
    render(<Display />)

    //Act
    const button = screen.getByRole('button');
    userEvent.click(button);

    //async/await
    const show = await screen.findByTestId('show-container');

    //Assert
    expect(show).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', async () => {
    //Mock
    mockFetchShow.mockResolvedValueOnce(testShow);

    //Arrange
    render(<Display />)

    //Act
    const button = screen.getByRole('button');
    userEvent.click(button);

    //async/await
    await waitFor(() => {
        const seasonOptions = screen.queryAllByTestId('season-option');

        //Assert
        expect(seasonOptions).toHaveLength(2);

        //Or
        // waitFor(() => {
        //     const seasonOptions = screen.findAllByTestId('season-option')
        //     expect(seasonOptions).toHaveLength(2)
        // })
    });
});

test('renders show season options matching your data when the button is clicked', async () => {
    //Mock
    mockFetchShow.mockResolvedValueOnce(testShow);
    const displayFunc = jest.fn();

    //Arrange
    render(<Display displayFunc={displayFunc}/>)

    //Act
    const button = screen.getByRole('button');
    userEvent.click(button);

    //async/await
    await waitFor(() => {

        //Assert
        expect(displayFunc).toHaveBeenCalled();
    });
});
