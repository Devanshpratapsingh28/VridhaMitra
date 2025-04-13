// admin-user.js
import { useRef } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function AddUserForm() {
    const nameRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const mobileNumberRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const photoRef = useRef();
    const idPhotoRef = useRef();
    const guardianMailRef = useRef();
    const emergencyNumberRef = useRef();
    const emergencyAddressRef = useRef();
    // const recentLocRef = useRef();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("age", ageRef.current.value);
        formData.append("gender", genderRef.current.value);
        formData.append("mobileNumber", mobileNumberRef.current.value);
        formData.append("email", emailRef.current.value);
        formData.append("address", addressRef.current.value);
        formData.append("photo", photoRef.current.files[0]);
        formData.append("idPhoto", idPhotoRef.current.files[0]);
        formData.append("guardianMail", guardianMailRef.current.value);
        formData.append("emergencyNumber", emergencyNumberRef.current.value);
        formData.append("emergencyAddress", emergencyAddressRef.current.value);
        // formData.append("recentLoc", recentLocRef.current.value.split(","));

        try {
            const response = await axios.post("http://127.0.0.1:3000/add-user/", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("User added successfully!");
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to add user.");
        }

        // Reset form fields
        nameRef.current.value = "";
        ageRef.current.value = "";
        genderRef.current.value = "";
        mobileNumberRef.current.value = "";
        emailRef.current.value = "";
        addressRef.current.value = "";
        photoRef.current.value = "";
        idPhotoRef.current.value = "";
        guardianMailRef.current.value = "";
        emergencyNumberRef.current.value = "";
        emergencyAddressRef.current.value = "";
        // recentLocRef.current.value = "";
    };

    return (
        <>
            <ToastContainer />
            <h1>Add User</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" ref={nameRef} placeholder="Name" required />
                <input type="text" ref={ageRef} placeholder="Age" required />
                <input type="text" ref={genderRef} placeholder="Gender" required />
                <input type="number" ref={mobileNumberRef} placeholder="Mobile Number" required />
                <input type="email" ref={emailRef} placeholder="Email" required />
                <input type="text" ref={addressRef} placeholder="Address" required />
                <input type="file" ref={photoRef} accept="image/*" required />
                <input type="file" ref={idPhotoRef} accept="image/*" required />
                <input type="email" ref={guardianMailRef} placeholder="Guardian Email" required />
                <input type="number" ref={emergencyNumberRef} placeholder="Emergency Number" required />
                <input type="text" ref={emergencyAddressRef} placeholder="Emergency Address" required />
                {/* <input type="text" ref={recentLocRef} placeholder="Recent Locations (comma-separated)" required /> */}
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default AddUserForm;