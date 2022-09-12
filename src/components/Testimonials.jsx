import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = (props) => {
  const { data } = props;
  return (
    <main className="featured testimonial-content">
      <div className="heading">
        <p>TESTIMONIALS</p>
        <p>What Clients Say</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at modi
          autem esse in excepturi, explicabo adipisci dolorum voluptate commodi
          magnam numquam iusto inventore aperiam? Officia id accusantium
          laudantium consequuntur.
        </p>
      </div>
      <div className="featured testimonial">
        {data.map((items) => {
          const { id, name, message, post } = items;
          return (
            <TestimonialCard
              key={id}
              id={id}
              name={name}
              message={message}
              post={post}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Testimonials;
