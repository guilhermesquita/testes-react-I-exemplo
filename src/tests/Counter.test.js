import { render, screen } from "@testing-library/react"
import Counter from "../components/Counter"

describe("Counter", () => {
    test('Deve renderizar com título', () => {
        //redenrização do componente
        render(<Counter />)

        const title = screen.getByText("Counter")
        expect(title).toBeInTheDocument()
    })
})