import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteRoom, getAllRooms } from "../../redux/actions/room"
import Loading from "../other/Loading"
import { Link } from "react-router-dom"
import { useAlert } from "../../utils/alert"

const AllRooms = () => {
    const dispatch = useDispatch()
    const { loading, error, message, rooms } = useSelector(state => state.room)

    useEffect(() => {
        dispatch(getAllRooms())
    }, [])

    const alert = useAlert()

    useEffect(() => {
        alert(message, error, "/librarian/rooms")
    }, [error, message])
    return (
        loading ? <Loading /> : <section className="w-full !p-0">
            <table>
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Cover</th>
                        <th>Name</th>
                        <th>Capacity</th>
                        <th>Availability Hours</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {rooms && rooms.length > 0 && rooms.map((r, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><img src={r.coverImage.url} alt={r.name} width="100" className="rounded" /></td>
                            <td>{r.name}</td>
                            <td>{r.capacity}</td>
                            <td>{r.availabilityHours.start} to {r.availabilityHours.end}</td>
                            <td>
                                <div className="actions">
                                    <Link to={`/librarian/room/${r._id}/edit`} className="w-[100px] text-center text-white bg-accent rounded-md p-2">Edit</Link>
                                    <button onClick={() => {
                                        dispatch(deleteRoom(r._id));
                                    }} className="w-[100px] text-center text-white bg-red-500 rounded-md p-2">Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default AllRooms
