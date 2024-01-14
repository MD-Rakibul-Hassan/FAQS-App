import { useState } from "react";
const FAQ = ({id,title,dec}) => {
    const [toggle,setToggle] = useState(false);
    return (
        <div className="bg-lime-300 m-5 px-20 py-10 ">
            <div className="flex justify-between">
                <h1 className="text-3xl">{title}</h1>
                <button onClick={() => setToggle(!toggle)}>
                    {toggle ? "-" : "+"}
                </button>
            </div>
            {
                toggle && <p>{dec}</p>
            }
        </div>
    )
}
export default FAQ;