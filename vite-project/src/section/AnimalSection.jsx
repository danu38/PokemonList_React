
import CardComponent from "../component/CardComponent"


const AnimalSection = ({ animals, title }) => {
    return (
        <>
            <h2>{title}</h2>
            {animals.map((animal) => {

                return (
                    <CardComponent
                        key={animal.name}
                        title={animal.name}

                    />
                )

            })}




        </>
    )
    }
export default AnimalSection