import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "../components/Button"

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-left`}>
        Finding a better card deal <br className="sm:block hidden" />
        in few easy steps.</h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-left`}>Discover your ideal card effortlessly. Compare offers, benefits, and rewards in a few clicks to find the perfect match for your needs and lifestyle.</p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg} >
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>

  </section>
)

export default CardDeal;
