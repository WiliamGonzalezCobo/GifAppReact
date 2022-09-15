import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('testing hook useFetchGifs', () => {

    test('should have inicial values', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })


    test('should have values and loading false', async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).not.toBeTruthy()
    })
})