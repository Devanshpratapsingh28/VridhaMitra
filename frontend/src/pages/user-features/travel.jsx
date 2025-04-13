import { useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function TravelForm() {
    const navigate = useNavigate(); 
    const nameRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const mobileNumberRef = useRef();
    const emailRef = useRef();
    const photoRef = useRef();
    const medicalConditionsRef = useRef();
    const sourceRef = useRef();
    const destinationRef = useRef();
    const dateRef = useRef();
    const travelModeRef = useRef();
    const specialRequirementsRef = useRef();
    const estimatedTravelCostRef = useRef();
    const reimbursementRef = useRef();
    const reimbursementAmountRef = useRef();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("age", ageRef.current.value);
        formData.append("gender", genderRef.current.value);
        formData.append("mobileNumber", mobileNumberRef.current.value);
        formData.append("email", emailRef.current.value);
        formData.append("photo", photoRef.current.files[0]);
        formData.append("medicalConditions", medicalConditionsRef.current.value);
        formData.append("source", sourceRef.current.value);
        formData.append("destination", destinationRef.current.value);
        formData.append("date", dateRef.current.value);
        formData.append("travelMode", travelModeRef.current.value);
        formData.append("specialRequirements", specialRequirementsRef.current.value);
        formData.append("estimatedTravelCost", estimatedTravelCostRef.current.value);
        formData.append("reimbursement", reimbursementRef.current.checked);
        formData.append("reimbursementAmount", reimbursementAmountRef.current.value);

        try {
            const response = await axios.post("http://127.0.0.1:3000/travel", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("Travel request submitted successfully!");
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to submit travel request.");
        }

        // Reset form fields
        nameRef.current.value = "";
        ageRef.current.value = "";
        genderRef.current.value = "";
        mobileNumberRef.current.value = "";
        emailRef.current.value = "";
        photoRef.current.value = "";
        medicalConditionsRef.current.value = "";
        sourceRef.current.value = "";
        destinationRef.current.value = "";
        dateRef.current.value = "";
        travelModeRef.current.value = "";
        specialRequirementsRef.current.value = "";
        estimatedTravelCostRef.current.value = "";
        reimbursementRef.current.checked = false;
        reimbursementAmountRef.current.value = "";
    };

    const handleBack = () => {
        navigate('/user-home'); // Navigate back to user.jsx
    };

    return (
        <>
            <ToastContainer />
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'start',
                marginBottom: '20px',
                flexDirection:'column'
            }}>
                <h1>Travel Request Form</h1>
                <button 
                    onClick={handleBack}
                    style={{
                        padding: '16px 16px',
                        backgroundColor: 'black',
                        color:'white',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500'
                    }}
                >
                    ← Back
                </button>
            </div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" ref={nameRef} placeholder="Name" required />
                <input type="text" ref={ageRef} placeholder="Age" required />
                <div style={{ margin: '10px 0' }}>
                    <label style={{ marginRight: '15px' }}>
                        <input type="radio" name="gender" value="Male" ref={genderRef} /> Male
                    </label>
                    <label style={{ marginRight: '15px' }}>
                        <input type="radio" name="gender" value="Female" ref={genderRef} /> Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Other" ref={genderRef} /> Other
                    </label>
                </div>
                <input type="number" ref={mobileNumberRef} placeholder="Mobile Number" required />
                <input type="email" ref={emailRef} placeholder="Email" required />
                <input type="file" ref={photoRef} accept="image/*" required />
                <input type="text" ref={medicalConditionsRef} placeholder="Medical Conditions" />
                <input type="text" ref={sourceRef} placeholder="Source" required />
                <input type="text" ref={destinationRef} placeholder="Destination" required />
                <input type="date" ref={dateRef} placeholder="Date" required />
                <input type="text" ref={travelModeRef} placeholder="Travel Mode" required />
                <input type="text" ref={specialRequirementsRef} placeholder="Special Requirements" required />
                <input type="number" ref={estimatedTravelCostRef} placeholder="Estimated Travel Cost" required />
                <label style={{ display: 'block', margin: '10px 0' }}>
                    <input type="checkbox" ref={reimbursementRef} /> Reimbursement Needed
                </label>
                <input type="number" ref={reimbursementAmountRef} placeholder="Reimbursement Amount" />
                <button 
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        marginTop: '20px'
                    }}
                >
                    Submit
                </button>
            </form>
        </>
    );
}

export default TravelForm;