import Header from './../components/Header/header'
import PetsTable from './../components/PetsTable/petsTable'
import { useApiPets } from './../components/useApiPets'
import Container from './../components/Container/container'

const Home = () => {
    const petsData = useApiPets()
    return (
        <Container>
            <Header title="PetStore" />
            <PetsTable pets={petsData.pets} state={petsData.state} />
        </Container>
    )
}

export default Home
