import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        setResult("Sending...");

        const formData = new FormData(event.target);

        formData.append(
            "access_key",
            "9ef8bb19-e155-4c70-b579-269f459b2468"
        );

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("✅ Message sent successfully!");
            event.target.reset();
        } else {
            console.log(data);
            setResult("❌ Failed to send message.");
        }
    };

    return (
        <section
            id="Contact"
            className="min-h-screen bg-[#171d32] text-white px-8 md:px-20 py-20"
        >
            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <div>
                    <p className="text-orange-500 uppercase font-semibold tracking-widest">
                        Get In Touch
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
                        Let's work <br /> together
                    </h1>

                    <p className="text-gray-400 mt-8 text-lg leading-8">
                        I'm searching for a new opportunity to explore my skills.
                        Feel free to contact me if you have any questions
                        or would like to work together.
                    </p>

                    <div className="mt-12 space-y-6">

                        <div className="flex items-center gap-5">
                            <div className="bg-[#2b3250] p-3 rounded-lg">
                                <FaEnvelope size={20} />
                            </div>

                            <a
                                href="mailto:aswanims2k03@gmail.com"
                                className="hover:text-orange-500 duration-300"
                            >
                                aswanims2k03@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="bg-[#2b3250] p-3 rounded-lg">
                                <FaLinkedin size={20} />
                            </div>

                            <a
                                href="https://www.linkedin.com/in/aswani-ms-1ab2192b0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                linkedin.com/in/aswani-ms
                            </a>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="bg-[#2b3250] p-3 rounded-lg">
                                <FaGithub size={20} />
                            </div>

                            <a
                                href="https://github.com/Aswani-m-s/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                github.com/Aswani-m-s
                            </a>
                        </div>

                    </div>
                </div>

                {/* Right Side */}
                <div>

                    <form onSubmit={onSubmit} className="space-y-6">

                        <div className="grid md:grid-cols-2 gap-6">

                            <div>
                                <label>Name *</label>

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full mt-2 p-4 rounded-xl bg-[#23263a] border border-gray-700 outline-none focus:border-orange-500"
                                />
                            </div>

                            <div>
                                <label>Email *</label>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full mt-2 p-4 rounded-xl bg-[#23263a] border border-gray-700 outline-none focus:border-orange-500"
                                />
                            </div>

                        </div>

                        <div>
                            <label>Subject</label>

                            <input
                                type="text"
                                name="subject"
                                placeholder="Project Inquiry"
                                className="w-full mt-2 p-4 rounded-xl bg-[#23263a] border border-gray-700 outline-none focus:border-orange-500"
                            />
                        </div>

                        <div>
                            <label>Message *</label>

                            <textarea
                                rows="6"
                                name="message"
                                required
                                placeholder="Tell me about your message..."
                                className="w-full mt-2 p-4 rounded-xl bg-[#23263a] border border-gray-700 outline-none focus:border-orange-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 py-4 rounded-xl font-semibold hover:bg-orange-600 duration-300"
                        >
                            Send Message →
                        </button>

                        {/* Notification */}
                        <p className="text-center mt-4 text-lg font-medium">
                            {result}
                        </p>

                    </form>

                </div>

            </div>
        </section>
    );
};

export default Contact;