import { shoe8 } from "../assets/images"
import Button from "../components/Button"


const SuperQuality = () => {
  return (
    <section id="about-us"
      className="flex justify-between
        items-center gap-10 w-full">
      <div className="flex
        flex-1 flex-col">
        <h2 className="
          font-palanquin text-4xl
          capitalize font-bold
          xl:max-w-lg">
          We Provide You
          <span
            className="text-coral-red px-1">
            Super
          </span>
          <span
            className="text-coral-red pr-1">
            Quality
          </span>Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg
          info-text">Discover the perfect blend of
          style and comfort with our super quality
          shoes. Crafted with premium materials
          and innovative designs, our footwear ensures
          durability and elegance for every step you take.
          Step into excellence today!
        </p>
        <p className="mt-6 lg:max-w-lg
          info-text">Our dedication to detail and
          excellence ensures your satisfaction</p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex flex-1
        justify-center items-center">
        <img 
          src={shoe8}
          alt="shoe8"
          width={570}
          height={520}
          className=""/>
      </div>
    </section>
  )
}

export default SuperQuality