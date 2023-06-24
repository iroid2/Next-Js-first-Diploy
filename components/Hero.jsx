import Image from "next/image";
import SocialLinks from "./SocialLinks";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export default function HeroSection() {
  return (
    <section className="heroSection">
      <div className="hero-left">
        <h1>Hello my,I am iroid a web developer with Many Years Experience</h1>
        <p>
          I care a lot about using design for positive impact. and enjoy
          creating user-centric, delightful, and human experiences.
        </p>
        <SocialLinks />
      </div>
      <div className="hero-right">
        <Image
          className="heroImg"
          src="/image/iroid.png"
          alt=""
          width="600"
          height="200"
        />
      </div>
    </section>
  );
}
