import { useRef } from "react"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const navigate=useNavigate();

    const imageInputRef = useRef(null);
    const govidInputRef = useRef(null);
    const typeRef = useRef();
    const nameRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const addressRef = useRef();


    const handleForm = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", imageInputRef.current.files[0]);
        formData.append("govid", govidInputRef.current.files[0]);
        formData.append("type", typeRef.current.value);
        formData.append("name", nameRef.current.value);
        formData.append("age", ageRef.current.value);
        formData.append("gender", genderRef.current.value);
        formData.append("email", emailRef.current.value);
        formData.append("number", numberRef.current.value);
        formData.append("address", addressRef.current.value);

        try {
            const response = await axios.post('/sign-up/', formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("Data Uploaded Successfully", response.data.message);
            navigate("/login")

        } catch (e) {
            console.log("Data could not be uploaded", e);
            toast.error(e.response.data.message)
        }
        imageInputRef.current.value = "";
        govidInputRef.current.value = "";
        typeRef.current.value = "";
        nameRef.current.value = "";
        ageRef.current.value = "";
        genderRef.current.value = "";
        emailRef.current.value = "";
        numberRef.current.value = "";
        addressRef.current.value = "";
    }


    return (
        <>
            <h1>Login Page</h1>
            <div className="image-form">
                {/* enctype="multipart/form-data" */}
                <form onSubmit={handleForm} action="">
                    <input type="text" ref={typeRef} placeholder='Please enter your type!' required />
                    <input type="text" ref={nameRef} placeholder='Please enter your good name!' required />
                    <input type="number" ref={ageRef} placeholder='Please enter your age!' required />
                    <input type="text" ref={genderRef} placeholder='Please enter your Gender!' required />
                    <input type="text" ref={emailRef} placeholder='Please enter your Email!' required />
                    <input type="text" ref={numberRef} placeholder='Please enter your Number!' required />
                    <input type="text" ref={addressRef} placeholder='Please enter your Address!' required />
                    <input type="file" name="image" ref={imageInputRef} />
                    <input type="file" name="govid" ref={govidInputRef} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default Signup