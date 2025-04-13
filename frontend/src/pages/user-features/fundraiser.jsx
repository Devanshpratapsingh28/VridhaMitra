// user-funds.js
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function FundraiserForm() {
    const navigate = useNavigate(); 
    const nameRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const mobileNumberRef = useRef();
    const emailRef = useRef();
    const photoRef = useRef();
    const qrcodeRef = useRef();
    const needRef = useRef();
    const storyRef = useRef();
    const specificRequirementRef = useRef();
    const duedateRef = useRef();
    const amountRef = useRef();
    const urgencyRef = useRef();
    const upiidRef = useRef();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("age", ageRef.current.value);
        formData.append("gender", genderRef.current.value);
        formData.append("mobileNumber", mobileNumberRef.current.value);
        formData.append("email", emailRef.current.value);
        formData.append("photo", photoRef.current.files[0]);
        formData.append("qrcode", qrcodeRef.current.files[0]);
        formData.append("need", needRef.current.value);
        formData.append("story", storyRef.current.value);
        formData.append("specificRequirement", specificRequirementRef.current.value);
        formData.append("duedate", duedateRef.current.value);
        formData.append("amount", amountRef.current.value);
        formData.append("urgency", urgencyRef.current.value);
        formData.append("upiid", upiidRef.current.value);

        try {
            const response = await axios.post("https://vridhamitra.onrender.com/fundraiser", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("Fundraiser created successfully!");
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to create fundraiser.");
        }

        // Reset form fields
        nameRef.current.value = "";
        ageRef.current.value = "";
        genderRef.current.value = "";
        mobileNumberRef.current.value = "";
        emailRef.current.value = "";
        photoRef.current.value = "";
        qrcodeRef.current.value = "";
        needRef.current.value = "";
        storyRef.current.value = "";
        specificRequirementRef.current.value = "";
        duedateRef.current.value = "";
        amountRef.current.value = "";
        urgencyRef.current.value = "";
        upiidRef.current.value = "";
    };

    const handleBack = () => {
        navigate('/user-home'); 
    };

    return (
        <>
            <ToastContainer />
            <h1>Create Fundraiser</h1>
            <button 
                    onClick={handleBack}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: 'black',
                        color: 'white',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500'
                    }}
                >
                    ← Back
                </button>
            <form onSubmit={handleFormSubmit}>
                <input type="text" ref={nameRef} placeholder="Name" required />
                <input type="text" ref={ageRef} placeholder="Age" required />
                <input type="text" ref={genderRef} placeholder="Gender" required />
                <input type="number" ref={mobileNumberRef} placeholder="Mobile Number" required />
                <input type="email" ref={emailRef} placeholder="Email" required />
                <input type="file" ref={photoRef} accept="image/*" required />
                <input type="file" ref={qrcodeRef} accept="image/*" required />
                <input type="text" ref={needRef} placeholder="Need" required />
                <input type="text" ref={storyRef} placeholder="Story" required></input>
                <input type="text" ref={specificRequirementRef} placeholder="Specific Requirement" required />
                <input type="date" ref={duedateRef} placeholder="Due Date" required />
                <input type="number" ref={amountRef} placeholder="Amount" required />
                <input type="text" ref={urgencyRef} placeholder="Urgency" required />
                <input type="text" ref={upiidRef} placeholder="UPI ID" required />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default FundraiserForm;