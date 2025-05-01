import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeLendLabResourceRequestStatus, getAllLabResourcesRequests } from "../../redux/actions/lab"
import Loading from "../other/Loading"
import { useAlert } from "../../utils/alert"

const AllLabResourcesRequests = () => {
    const dispatch = useDispatch()
    const { loading, error, message, lendItems } = useSelector(state => state.lab)
    useEffect(() => {
        dispatch(getAllLabResourcesRequests())
    }, [])

    const alert = useAlert()

    useEffect(() => {
        alert(message, error, "/lab_attendant/requests")
    }, [error, message])

    return (
        loading ? <Loading /> : <section className="w-full !p-0">
            <table>
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Borrower</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Item</th>
                        <th>Purpose</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {lendItems && lendItems.length > 0 && lendItems.map((l, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <div className="flex items-center gap-2">
                                <img src="https://placehold.co/36x36" alt="" className="w-[56px] h-[56px] rounded-full object-cover object-center" />
                                <span>{l?.name}</span>
                            </div>
                        </td>
                        <td className="capitalize">{l.borrower.role}</td>
                        <td className="capitalize">{l.email}</td>
                        <td className="capitalize">{l.phone}</td>
                        <td>
                            <div className="flex items-center gap-2">
                                <img src={l?.item?.image?.url} alt="" className="w-[56px] h-[56px] rounded object-cover object-center" />
                                <span>{l?.item?.title}</span>
                            </div>
                        </td>

                        <td>
                            <p>{l.purpose}</p>
                        </td>

                        <td>{l.status}</td>

                        <td>
                            <div className={`${l.status === "pending" ? "actions" : "hidden"}`}>
                                <button onClick={() => { dispatch(changeLendLabResourceRequestStatus(l._id, "approved")) }} className="bg-accent p-2 rounded text-white">Approve</button>
                                <button onClick={() => { dispatch(changeLendLabResourceRequestStatus(l._id, "rejected")) }} className="bg-red-600 p-2 rounded text-white">Decline</button>
                            </div>
                        </td>
                    </tr>
                    )}

                </tbody>
            </table>
        </section>
    )
}

export default AllLabResourcesRequests
