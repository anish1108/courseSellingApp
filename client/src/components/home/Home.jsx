import { useEffect } from "react";
import { useState } from "react";
import Coursecard from "../courseCard/Coursecard";
import axios from "axios";

export default function Home(){

    const [course, setCourse] = useState([]);
    // console.log(course)

    async function getcourse(){
        const response = await axios.get("http://localhost:3000/home");
        setCourse(response.data.allcourses)
    }

    useEffect(()=>{
        getcourse();
    }, [course])
   
    return (
        <div className="grid grid-cols-3 gap-4 p-4 mt-4 ml-8">
            {course.map((course)=>(
                <Coursecard key={course._id} title={course.title} description={course.description} image={course.image} price={course.price}/>
            ))}
        </div>
    )
}