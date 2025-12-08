import React, { useEffect, useState,useRef } from "react";
import { getUsers } from "../../api/users";
import "./user_index.css";

const UserIndex = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    const fetchUsers = async (pageNumber = 1) => {
        try {
            setLoading(true);
            const res = await getUsers(pageNumber);
            setUsers(res.data || []);
            setPage(res.current_page || 1);
            setLastPage(res.last_page || 1);
        } catch (err) {
            console.error(err);
            setUsers([]);
            setPage(1);
            setLastPage(1);
        } finally {
            setLoading(false);
        }
    };
const didMount = useRef(false);
    useEffect(() => {
        if(didMount.current) {
            fetchUsers(page);
        }else{
            didMount.current = true;
        }
    }, [page]);

    const nextPage = () => page < lastPage && setPage(page + 1);
    const prevPage = () => page > 1 && setPage(page - 1);

    return (
        <div className="user-index-container">
            <h1 className="title">User Management</h1>

            <div className="controls">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="search-input"
                />
                <button className="add-btn">+ Add User</button>
            </div>

            <div className="table-wrapper">
                <table className="users-table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="5" className="text-center">
                                Loading...
                            </td>
                        </tr>
                    ) : users.length > 0 ? (
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1 + (page - 1) * 10}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td className="actions">
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">
                                No users found
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <button onClick={prevPage} disabled={page === 1}>
                    Previous
                </button>
                <div className="page-buttons">
                    {[...Array(lastPage)].map((_, i) => (
                        <button
                            key={i}
                            className={page === i + 1 ? "active" : ""}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
                <button onClick={nextPage} disabled={page === lastPage}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default UserIndex;
