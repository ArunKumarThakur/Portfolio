function Contact() {
    return (
        <section className="relative z-0 w-full mt-20 min-h-[80vh] sm:min-h-screen overflow-hidden" id='contact'>

            {/* Background Image */}
            <img
                src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg"
                alt="contact"
                className="absolute inset-0 w-full h-full object-fit blur z-[-1]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-[-1]"></div>

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center px-4 py-16 sm:py-24 text-white">
                <div className="text-center max-w-2xl">
                    <h1 className="font-bold text-3xl sm:text-5xl">Connect With Me</h1>
                    <p className="mt-2 text-base sm:text-xl md:text-2xl">
                        Let’s build something amazing together 🚀
                    </p>
                </div>

                {/* Form */}
                <div className="mt-10 w-full max-w-md">
                    <form className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="p-3 w-full rounded bg-transparent text-white placeholder-white border border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            placeholder="Enter Subject"
                            className="p-3 w-full rounded bg-transparent text-white placeholder-white border border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="submit"
                            value="Send"
                            className="w-full p-3 rounded text-white font-bold cursor-pointer border hover:bg-white/20"
                        />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
