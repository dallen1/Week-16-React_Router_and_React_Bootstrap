import { useParams } from "react-router-dom";

export default function editEvent() {
    const { id } = useParams()

    return (
    <h3>Edit Event {id}</h3>
    )
}