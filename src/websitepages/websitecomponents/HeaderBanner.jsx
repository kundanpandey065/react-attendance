
const HeaderBanner = () => {
    return(
        <>
        <section className="text-center p-10 bg-gray-50 py-15">
            <h1 className="font-bricolage text-5xl font-extrabold text-gray-900">
                AMBAR — Attendance, Simplified
            </h1>
            <p className="font-inter text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Effortless clock-ins, accurate reports, and real-time insights for modern organizations.
            </p>
            <p className="font-instrument italic text-xl text-indigo-600 mt-6">
                “Simplifying time management for everyone.”
            </p>
            <div className="mt-8 space-x-4">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-indigo-700">
                Get Started
                </button>
                <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-inter font-medium hover:bg-gray-300">
                Request Demo
                </button>
            </div>
        </section>

        </>
    )
}

export default HeaderBanner;