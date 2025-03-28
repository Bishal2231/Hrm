import { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [formData, setFormData] = useState({
        userName: "",
        organizationName: "",
        password: "",
        phoneNumber: "",
        email: "",
        location: "",
        avatar: null,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, avatar: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            const res = await axios.post("http://localhost:5000/api/register", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert(res.data.message);
        } catch (error) {
            console.error(error);
            alert("Registration failed");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userName" placeholder="User Name" onChange={handleChange} required />
                <input type="text" name="organizationName" placeholder="Organization Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
                <input type="file" name="avatar" onChange={handleFileChange} accept="image/*" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Signup;
