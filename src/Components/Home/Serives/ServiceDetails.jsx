import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
  const data = useLoaderData();

  const [comments,setComments] = useState([])
  const [feedback,setFeedback] = useState("")

  const handleCommentSubmit = e =>{
    e.preventDefault()

    setComments((prevComments)=>[...prevComments,feedback])
    setFeedback("")

  }

 
  return (
    <div className="w-9/12 mx-auto mt-10">
      <Helmet>
        <title>Career Compass | Service Details</title>
      </Helmet>
 <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="w-6/12 h-[400px] rounded-md object-cover"
              src={data.image}
              alt="Service"
            />
          </figure>
          <div className="card-body text-center space-y-6">
            <h2 className="text-2xl font-bold text-[#7f853e]">{data.counselor}</h2>
            <p className="text-xl font-semibold text-[#7f853eb3]">{data.description}</p>
            <div className="flex items-center text-lg font-medium text-[#464a16e2]">
                <p className="">Service: {data.serviceName}</p>
                <p>Type: {data.category}</p>
                <p>Fees: {data.pricing}</p>
            </div>
            <div className="flex items-center text-base font-medium text-[#3b3d1fe2]">
                <p>Duration: {data.duration}</p>
                <p>Rating: {data.rating}</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleCommentSubmit} className="text-center mt-12">
       <div>
       <textarea
  className="outline-dashed p-3"
  name="feedback"
  placeholder="Enter your feedback here..."
  rows="4"
  cols="50"
  value={feedback} 
  onChange={(e) => setFeedback(e.target.value)}
></textarea>
       </div>
        <button className="btn mt-2 bg-[#DB494F] text-white font-bold">Comment</button>
        </form>
          <div>
          <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 text-[#3b3d1fe2]">Comments:</h3>
        {comments.length > 0 ? (
          <ul className="space-y-3">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="p-4 bg-gray-100 text-black rounded shadow text-left"
              >
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
          </div>
      </div>
  );
};

export default ServiceDetails;
