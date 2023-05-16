import React from "react";
import * as S from "./styles";
import TestimonialCard from "../../components/Testimonial Card";

const Testimonials = () => {
  return (
    <S.SectionContainer>
      <S.TopSection>
        <TestimonialCard
          quote="Web Solution Studios exceeded our expectations with their top-notch web development services. Their team was not only skilled but also extremely knowledgeable and experienced. They took our ideas and transformed them into a highly-functional and visually appealing website. I can't recommend them enough!"
          company="James Sullivan, CEO of Sullivan Industries"
        />
      </S.TopSection>

      <S.BottomSection>
        {" "}
        <TestimonialCard
          quote={
            "Our experience with Web Solution Studios was nothing short of amazing. Their team was proactive, attentive to detail, and incredibly patient with all our requests. The website they designed and developed for us has significantly improved our online presence and helped us reach more customers. A job very well done!"
          }
          company={"Lisa Chen, Founder of GreenLite"}
        />
        <TestimonialCard
          quote={
            "The team at Web Solution Studios was exceptional in their service. They listened to our needs, offered innovative solutions, and developed a website that not only looks fantastic but also operates smoothly. We've seen a noticeable increase in customer engagement since the launch of our new website. We couldn't be happier with the results!"
          }
          company={"Mark Thompson, Managing Director at Thompson & Co."}
        />
      </S.BottomSection>
    </S.SectionContainer>
  );
};

export default Testimonials;
