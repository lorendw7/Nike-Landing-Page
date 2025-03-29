import Button from "../components/Button"

const Subscribe = () => {
  return (
    <div className="max-container
      flex justify-between gap-10
      items-center max-lg:flex-col">
      <h3 className="text-4xl font-palanquin
        lg:max-w-md font-bold leading-[68px]">
        Sign Up from
        <span className="text-coral-red px-2">
          Updates
        </span>& Newsletter
      </h3>

      <div className="lg:max-w-[40%]
        flex items-center max-sm:flex-col
        sm:border sm:border-slate-gray
        rounded-full w-full">
        <input type="text"
          placeholder="subscribe@nike.com"
          className="input" />
        <div className="flex items-center
          max-sm:justify-end
          max-sm:w-full">
          <Button label="Sign Up" />
        </div>
      </div>
    </div>
  )
}

export default Subscribe