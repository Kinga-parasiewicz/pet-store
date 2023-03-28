import renderer from 'react-test-renderer'
import Home from '.'
import { PetResponse } from 'types/type'
import { useApiPets } from './../components/useApiPets'


jest.mock("./../components/useApiPets")
const mockUseClientRect = useApiPets as jest.MockedFunction<typeof useApiPets>
const mockData: PetResponse = {
    state: 'loaded',
    pets: [
        {
            id: 3,
            category: 'Cat',
            name: 'Leo',
            photoUrls: '/cat-01.jpeg',
            status: 'available',
        },
    ],
}

describe('Table is loaded', () => {
    it('renders table', () => {
        mockUseClientRect.mockReturnValue(mockData)
        const domTree = renderer.create(<Home />).toJSON()
        expect(domTree).toMatchSnapshot()
    })
})
