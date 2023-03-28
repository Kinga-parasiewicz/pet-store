import Link from 'next/link'
import { ChangeEvent, Dispatch, FormEvent, useRef } from 'react'
import { Pet, Status } from 'types/type'

interface MyComponentsProps {
    handleSubmit?: (e: FormEvent<HTMLFormElement>) => void
    setBody: Dispatch<React.SetStateAction<Pet>>
    body: Pet
}
type InputEvent = ChangeEvent<HTMLInputElement>
type SelectEvent = ChangeEvent<HTMLSelectElement>

const AddPet = ({ setBody, body, handleSubmit }: MyComponentsProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const idValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBody({ ...body, id: Number(event.target.value) })
    }

    return (
        <>
            <h2 className="text-center font-bold text-blue-700">Create new Pet</h2>
            <form className="mb-4 max-w-md" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 uppercase font-bold text-lg text-grey">
                        Pet Id
                    </label>
                    <input
                        className="border py-2 px-3 text-grey"
                        type="text"
                        ref={inputRef}
                        value={body.id}
                        onChange={idValue}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 uppercase font-bold text-lg text-grey">
                        Pet Name
                    </label>
                    <input
                        className="border py-2 px-3 text-grey"
                        type="text"
                        ref={inputRef}
                        value={body.name}
                        onChange={(e: InputEvent) =>
                            setBody({ ...body, name: e.target.value })
                        }
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 uppercase font-bold text-lg text-grey">
                        Category
                    </label>
                    <input
                        className="border py-2 px-3 text-grey"
                        type="text"
                        value={body.category}
                        onChange={(e: InputEvent) =>
                            setBody({ ...body, category: e.target.value })
                        }
                    />
                </div>
                <div className="flex flex-col mb-6">
                    <label className="mb-2 uppercase font-bold text-lg text-grey">
                        Status
                    </label>
                    <select
                        className="border py-2 px-3 text-grey"
                        value={body.status}
                        onChange={(e: SelectEvent) =>
                            setBody({
                                ...body,
                                status: e.target.value as Status,
                            })
                        }
                    >
                        <option value="available">available</option>
                        <option value="sold">sold</option>
                        <option value="pending">pending</option>
                    </select>
                </div>

                <button
                    className="block mx-auto p-2 w-200 text-center"
                    type="submit"
                ><Link href="/">Create Pet</Link>
                   
                </button>
            </form>
        </>
    )
}

export default AddPet
