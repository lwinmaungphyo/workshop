import { useMemo, useState } from "react";
import InputForm from "./inputForm";

function expensiveCalculation(result) {
    console.log("GENERATE LOOP");
    for (let i = 1; i <= 10000; i++) {
        console.log(i);
    }
    return result;
}

function Form() {
    const [formData, setFormData] = useState({ name: null });
    const [image, setImage] = useState("front");

    const generate = useMemo(() => expensiveCalculation(image), [image]);
    // const generate = expensiveCalculation(image);

    const submit = (e) => {
        e.preventDefault();
        console.log("SUBMIT FORM", formData.name);
    };

    return (
        <div>
            <h3>Body Image Analysis Function</h3>
            <button type="button" onClick={() => setImage("front")}>
                Front
            </button>
            <button type="button" onClick={() => setImage("back")}>
                Back
            </button>
            <h3>Result - {generate}</h3>
            {/* <InputForm /> */}
            <form onSubmit={(e) => submit(e)}>
                <p>Name</p>
                <input type="text" name="name" id="name" placeholder="Enter your name" onChange={(e) => setFormData({ name: e.target.value })} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
