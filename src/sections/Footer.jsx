import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex items-start
        justify-between max-lg:flex-col
        gap-20 flex-wrap">
        <div className="flex flex-col
          items-start">
          <a href="/">
            <img
              src={footerLogo}
              width={150}
              height={46} />
          </a>
          <p className="mt-7 leading-7
            font-montserrat text-white-400
            sm:max-w-sm">
            Get shoes ready for the new term at your
            nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-5 mt-8
            items-center">
            {
              socialMedia.map((icon) => (
                <div className="bg-white
                  rounded-full w-12 h-12 flex
                  items-center justify-center"
                  key={icon.alt}>
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24} />
                </div>
              ))
            }
          </div>
        </div>

        <div className="flex flex-1 justify-between
          lg:gap-10 gap-20 flex-wrap">
          {
            footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white
                  text-2xl font-montserrat
                  font-medium leading-normal
                  mb-6">{section.title}</h4>
                <ul>
                  {
                    section.links.map((link) => (
                      <li className="text-white-400
                          text-base mt-3 leading-normal
                          font-medium cursor-pointer
                        hover:text-slate-gray"
                        key={link.name}>
                        {link.name}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>

      <div className="text-white-400
          flex justify-between max-sm:flex-col
          max-sm:items-center mt-24">
        <div className="flex flex-1 justify-start
            items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="cop right sign"
            width={20}
            height={20}
            className="rounded-full m-0" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat
            cursor-pointer">
          Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer