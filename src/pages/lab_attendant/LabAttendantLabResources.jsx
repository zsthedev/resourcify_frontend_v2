import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLabResource, getLabResources } from "../../redux/actions/lab";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";
import { useAlert } from "../../utils/alert";
import Loading from "../other/Loading";
const LabAttendantLabResources = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { items, message, loading, error } = useSelector((state) => state.lab);

  useEffect(() => {
    dispatch(getLabResources());
  }, [error, message]);

  const deleteHandler = (e, id) => {
    console.log(id);
    dispatch(deleteLabResource(id));
  };

  useEffect(() => {
    alert(message, error, "/lab_attendant");
  }, [error, message]);

  return loading ? (
    <Loading />
  ) : (
    <section className="!p-0">
      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Software</th>
            <th>Version</th>
            <th>Link</th>
            <th>Insturctions</th>
            <th>Tested OS</th>
            <th>Publisher</th>
            <th>Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.length > 0 &&
            items.map((i, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-[8px] ">
                    <img
                      src={i.image.url}
                      alt=""
                      className="w-[36px] h-[36px] object-cover object-center"
                    />
                    <span>{i.title}</span>
                  </div>
                </td>
                <td>{i.version}</td>
                <td>{i.link}</td>
                <td className="line-clamp-1">{i.instructions}</td>
                <td>{i.os}</td>
                <td>{i.publisher}</td>
                <td>{i.size}</td>
                <td>
                  <div className="actions">
                    <Link to={`/lab_attendant/resource/${i._id}/update`}>
                      <FaRegEdit />
                    </Link>

                    <button
                      disabled={loading}
                      onClick={(e) => deleteHandler(e, i._id)}
                    >
                      <MdDeleteOutline />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default LabAttendantLabResources;
