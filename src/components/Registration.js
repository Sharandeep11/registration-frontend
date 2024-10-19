// import React, { useState } from 'react';
// import axios from 'axios';
// import './Registration.css'; // Import CSS for styling

// const Registration = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         dob: '',
//         sex: '',
//         email: '',
//         password: '',
//         address: '',
//         phone: '',
//         department: '',
//         subDepartment: '',
//         comments: '',
//         image: null,
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         setFormData({ ...formData, image: e.target.files[0] });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formDataToSend = new FormData();
//         for (const key in formData) {
//             formDataToSend.append(key, formData[key]);
//         }

//         try {
//             await axios.post('http://localhost:5000/register', formDataToSend, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             alert('User registered successfully!');
//         } catch (error) {
//             console.error('Error registering user:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <h1>Registration Form</h1>
//             <form onSubmit={handleSubmit}>
//                 {/* Form fields... */}
//                 <div className="form-group">
//                     <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//                 </div>
//                 {/* Add other form fields similarly... */}
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default Registration;

import React, { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import './Registration.css'; // Import CSS for styling

const App = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        sex: '',
        email: '',
        password: '',
        address: '',
        phone: '',
        department: '',
        subDepartment: '',
        comments: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            await axios.post('http://localhost:5000/register', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('User registered successfully!');
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.text(`Name: ${formData.name}`, 10, 10);
        doc.text(`DOB: ${formData.dob}`, 10, 20);
        doc.text(`Sex: ${formData.sex}`, 10, 30);
        doc.text(`Email: ${formData.email}`, 10, 40);
        doc.text(`Address: ${formData.address}`, 10, 50);
        doc.text(`Phone: ${formData.phone}`, 10, 60);
        doc.text(`Department: ${formData.department}`, 10, 70);
        doc.text(`Sub-Department: ${formData.subDepartment}`, 10, 80);
        doc.text(`Comments: ${formData.comments}`, 10, 90);
        doc.save('user-data.pdf');
    };

    return (
        <div className="container">
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <select name="sex" value={formData.sex} onChange={handleChange} required>
                        <option value="">Select Sex</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="text" name="subDepartment" placeholder="Sub Department" value={formData.subDepartment} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <textarea name="comments" placeholder="Comments" value={formData.comments} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <input type="file" name="image" onChange={handleFileChange} required />
                </div>
                <button type="submit">Register</button>
            </form>
            <button onClick={exportToPDF}>Export to PDF</button>
        </div>
    );
};

export default App;

