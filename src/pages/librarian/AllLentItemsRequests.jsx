import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeLendItemsRequestStatus, getAllLendItemsRequests } from "../../redux/actions/library"
import { formatDateAndTime } from "../../utils/date"
import Loading from "../other/Loading"
import { useAlert } from "../../utils/alert"
const AllLentItemsRequests = () => {
    const { lentItems, loading, error, message } = useSelector(state => state.library)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllLendItemsRequests())
    }, [error, message])
    const alert = useAlert()

    useEffect(() => {
        alert(message, error, `/librarian/requests`)
    }, [error, message])

    return (
        loading ? <Loading /> : <section className="!p-0 w-full">
            <table>
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Date</th>
                        <th>Borrower</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Item</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {lentItems && lentItems.length > 0 && lentItems.map((i, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{formatDateAndTime(i.createdAt).formattedDate}</td>
                            <td>
                                <div className="flex items-center gap-2">
                                    <img src="https://placehold.co/36x36" alt="" className="w-[56px] h-[56px] rounded-full object-cover object-center" />
                                    <span>{i?.name || "Nill"}</span>
                                </div>
                            </td>
                            <td className="capitalize">{i.borrower.role}</td>
                            <td>{i.email}</td>
                            <td className="capitalize">{i.phone}</td>
                            <td>
                                <div className="flex items-center gap-2">
                                    <img src={i?.item?.file?.url} alt="" className="w-[56px] h-[56px] rounded object-cover object-center" />
                                    <span>{i?.item?.title}</span>
                                </div>
                            </td>
                            <td>{formatDateAndTime(i.startDate).formattedDate}</td>
                            <td>{formatDateAndTime(i.endDate).formattedDate}</td>
                            <td>{i?.status}</td>
                            <td>
                                <div className={`${i.status === "pending" ? "actions" : "hidden"}`}>
                                    <button onClick={() => { dispatch(changeLendItemsRequestStatus(i._id, "approved")) }} className="bg-accent p-2 rounded text-white">Approve</button>
                                    <button onClick={() => { dispatch(changeLendItemsRequestStatus(i._id, "rejected")) }} className="bg-red-600 p-2 rounded text-white">Decline</button>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    )
}

export default AllLentItemsRequests
