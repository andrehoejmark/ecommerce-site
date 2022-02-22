import {Items} from "./../Items"
import {Item} from "./../Item"
import { render, cleanup, waitFor, screen } from "@testing-library/react"
import axios, {AxiosResponse} from "axios"
import "@testing-library/jest-dom/extend-expect"
import mockAxios from "jest-mock-axios";

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'



afterEach(cleanup);


describe('display products', () => {

    
    const initialState = {}
    const mockStore = configureStore()
    let store, wrapper

    it("fetches and displays products", async () => {

        store = mockStore(initialState)

        const fake_data = [
            {
                id: 1,
                title: 'todo-test-1',
                desc: 'test text',
                price: 11,
                image: "",
            },
            {
                id: 2,
                title: 'todo-test-2',
                desc: 'test text',
                price: 13,
                image: "",
            },
        ];

        //Prepare the response we want to get from axios
        const mockedResponse: AxiosResponse = {
            data: fake_data,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        };
    
        // Make the mock return the custom axios response
        mockAxios.get.mockResolvedValue(mockedResponse);


        const { getByTestId, queryByTestId, getAllByTestId } = render(<Provider store={store}><Items/></Provider>);
        
        expect(getByTestId("loading")).toHaveTextContent("Loading data...");
        

        // This part bugs out it is unable to find any with testid resolved
        // const resolvedSpan = await waitFor(() => getByTestId("resolved"));
        
        const resolvedSpan = await waitFor(() => expect(getAllByTestId("resolved")))
        
        // getByTestId and queryByTestId are an escape hatch to get elements
        // by a test id (could also attempt to get this element by its text)
        //expect(resolvedSpan).toHaveAttribute("title")

        expect(resolvedSpan).toBeVisible()

        screen.debug()
    });
})