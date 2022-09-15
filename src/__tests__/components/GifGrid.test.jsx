import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"

jest.mock("../../hooks/useFetchGifs")

describe('test component <GifGrid></GifGrid>', () => {

    const gifs = [
        { img: 'goku', url: 'http://goku.com.co', title: 'goku' },
        { img: 'saitama', url: 'http://saitama.com.co', title: 'saitama' }]

    const categoryText = 'saitama'

    test('should be show loading...', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={categoryText} />);
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(categoryText));
    })

    test('should show items, when charged imgs in useFetchGifs', () => {
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={categoryText}></GifGrid>)

        expect(screen.getAllByRole("img").length).toBe(2)

    })

})