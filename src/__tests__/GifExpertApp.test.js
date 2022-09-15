import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../GifExpertApp"

describe('testing <GifExpertApp></GifExpertApp>', () => {
    test('should match to snapshot ', () => {
        const container = render(<GifExpertApp></GifExpertApp>);
        expect(container).toMatchSnapshot();
    })
})