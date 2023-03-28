import Container from '@/components/Container/container'
import AddPet from '@/components/CreatePet/addPet'
import Header from '@/components/Header/header'
import SERVER_BASE_URL from '@/config'
import axios from 'axios'
import { FormEvent, useEffect, useState } from 'react'
import { Pet } from 'types/type'

export default function NewPet() {
    const [addPet, setAddPet] = useState<Pet[]>([
        {
            id: 1,
            name: 'Lucky',
            category: 'Dog',
            status: 'sold',
        },
    ])
    const [body, setBody] = useState<Pet>({
        id: 0,
        name: '',
        category: '',
        status: ' ',
    })
    const createPet = async () => {
        const response = await axios.post(`${SERVER_BASE_URL}/pet`, { body });
        setAddPet([response.data, ...addPet]);
        setBody({
            id: 0,
            name: '',
            category: '',
            status: ' ',
        })
    }

    useEffect(() => {
        createPet();
        setTimeout(createPet, 1000)
    }, [])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createPet()
    }

    return (
        <Container>
            <Header title="PetStore" />
            <AddPet body={body} setBody={setBody} handleSubmit={handleSubmit} />
        </Container>
    )
}
