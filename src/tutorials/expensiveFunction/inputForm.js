import { useState } from "react";

function InputForm(params) {
    const [formData, setFormData] = useState({ name: null });

    const submit = (e) => {
        e.preventDefault();
        console.log("SUBMIT FORM", formData.name);
    };
    return (
        <form onSubmit={(e) => submit(e)}>
            <p>Name</p>
            <input type="text" name="name" id="name" placeholder="Enter your name" onChange={(e) => setFormData({ name: e.target.value })} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default InputForm;
