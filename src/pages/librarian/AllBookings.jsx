import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllBookings } from "../../redux/actions/room"
import { formatDateAndTime } from "../../utils/date"

const AllBookings = () => {
    const dispatch = useDispatch()
    const { bookings } = useSelector(state => state.room)
    console.log(bookings)
    useEffect(() => {
        dispatch(getAllBookings())
    }, [])

    return (
        <section className="w-full h-screen !p-0">
            <table>
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Date</th>
                        <th>Requested By</th>
                        <th>Role</th>
                        <th>Room</th>
                        <th>Time Duration</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {bookings && bookings.length > 0 && bookings.map((item, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{formatDateAndTime(item.createdAt).formattedDate}</td>
                        <td>
                            <div className="flex items-center gap-2">
                                <img src="https://placehold.co/36x36" alt="" className="w-[56px] h-[56px] rounded-full object-cover object-center" />
                                <span>{item?.name || "Nill"}</span>
                            </div>
                        </td>
                        <td className="capitalize">{ item.user.role}</td>
                        <td>
                            <div className="flex items-center gap-2">
                                <img src={item?.roomId?.coverImage?.url} alt="" className="w-[100px] h-[72px] rounded object-cover object-center" />
                                <span>{item?.item?.title}</span>
                            </div>
                        </td>
                        <td>{formatDateAndTime(item.startTime).formattedTime} to {formatDateAndTime(item.endTime).formattedTime}</td>
                        <td className='capitalize'>{item.status}</td>
                    </tr>)}
                </tbody>

            </table>
        </section>
    )
}

export default AllBookings
