// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './ShowRecords.css'; // Import CSS for styling

// const ShowRecords = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/users');
//             setUsers(response.data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Users List</h2>
//             <div className="tabular-view">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>DOB</th>
//                             <th>Sex</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                             <th>Department</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map(user => (
//                             <tr key={user._id}>
//                                 <td>{user.name}</td>
//                                 <td>{new Date(user.dob).toLocaleDateString()}</td>
//                                 <td>{user.sex}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.phone}</td>
//                                 <td>{user.department}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <h2>Users Cards</h2>
//             <div className="card-view">
//                 {users.map(user => (
//                     <div className="card" key={user._id}>
//                         <h3>{user.name}</h3>
//                         <p><strong>DOB:</strong> {new Date(user.dob).toLocaleDateString()}</p>
//                         <p><strong>Sex:</strong> {user.sex}</p>
//                         <p><strong>Email:</strong> {user.email}</p>
//                         <p><strong>Phone:</strong> {user.phone}</p>
//                         <p><strong>Department:</strong> {user.department}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ShowRecords;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShowRecords.css';

const ShowRecords = () => {
    const [users, setUsers] = useState([]);
    const [view, setView] = useState('table');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const toggleView = () => {
        setView((prevView) => (prevView === 'table' ? 'card' : 'table'));
    };

    return (
        <div className="container">
            <h2>Users List</h2>
            <button onClick={toggleView}>
                Switch to {view === 'table' ? 'Card' : 'Table'} View
            </button>

            {view === 'table' ? (
                <div className="tabular-view">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>DOB</th>
                                <th>Sex</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Department</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{new Date(user.dob).toLocaleDateString()}</td>
                                    <td>{user.sex}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.image}</td>
                                    <td><img src={user.image} alt="User" className="user-image" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="card-view">
                    {users.map(user => (
                        <div className="card" key={user._id}>
                            <h3>{user.name}</h3>
                            <p><strong>DOB:</strong> {new Date(user.dob).toLocaleDateString()}</p>
                            <p><strong>Sex:</strong> {user.sex}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Department:</strong> {user.department}</p>
                            <img src={user.imageUrl} alt="User" className="user-image" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ShowRecords;

