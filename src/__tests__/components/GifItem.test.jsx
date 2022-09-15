const { render, screen } = require("@testing-library/react");
const { scryRenderedComponentsWithType } = require("react-dom/test-utils");
const { GifItem } = require("../../components/GifItem");

describe('Pruebas en <GifItem/>', () => {

    const title = 'mi titulo';
    const url = 'http://miurl.com/';

    test('should be match with snapshot', () => {
        const { container } = render(<GifItem title={title} url={url}></GifItem>)
        expect(container).toMatchSnapshot();
    })

    test('should be show url and alt', () => {
        render(<GifItem title={title} url={url}></GifItem>)

        //expect(screen.getByRole('img').src).toBe(url)
        //expect(screen.getByRole('img').alt).toBe(title)

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url)
        expect(alt).toBe(title)

    })

    test('should be exist text title', () => {
        render(<GifItem title={title} url={url}></GifItem>)
        expect(screen.getByText(title)).toBeTruthy();
    })
})