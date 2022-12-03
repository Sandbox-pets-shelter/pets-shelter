import { cats } from '../../../mocks/cats'
import { useParams } from 'react-router-dom'

export const Cat = () => {
    const params = useParams()
    return (
        <div>
            {cats.filter((item) => item.key === Number(params.id)).map((cat) => (
                <div key={cat.key}>
                    {cat.name}, {cat.age}
                    {/* TODO */}
                </div>
            ))}
        </div>
    )
}