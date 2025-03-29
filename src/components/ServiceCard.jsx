const ServiceCard = ({ imgURL,
    label, subtext }) => {
    return (
        <div className="flex-1 sm:w-[350px]
        sm:min-w-[350px] w-full
        shadow-3xl rounded-[20px]
        px-10 py-16">
            <div className="w-11 h-11
                bg-coral-red rounded-full
                flex justify-center items-center">
                <img src={imgURL}
                    alt={label}
                    width={24}
                    height={24} />
            </div>
            <h3 className="mt-5 font-palanquin
                text-3xl font-bold leading-normal">
                {label}</h3>
            <p className="mt-3 font-montserrat
                text-lg text-slate-gray
                leading-normal">
                {subtext}</p>
        </div>
    )
}

export default ServiceCard