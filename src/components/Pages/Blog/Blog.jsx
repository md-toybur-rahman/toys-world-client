

const Blog = () => {
    return (
        <div className="mx-20">
            <h1 className="text-center mt-20 mb-10 text-3xl md:text-5xl font-bold text-[#f9bf00]">Blog</h1>

            <div className="grid gap-5">
                <div>
                    <div className="border-4 border-[#f9bf00] rounded-lg p-5">
                        <h1 className="text-lg font-bold">Question: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        <p className="text-lg mt-2"><span className="font-bold">Answer: </span></p>
                    </div>
                </div>
                <div>
                    <div className="border-4 border-[#f9bf00] rounded-lg p-5">
                        <h1 className="text-lg font-bold">Question: Compare SQL and NoSQL databases?</h1>
                        <p className="text-lg mt-2"><span className="font-bold">Answer: </span></p>
                    </div>
                </div>
                <div>
                    <div className="border-4 border-[#f9bf00] rounded-lg p-5">
                        <h1 className="text-lg font-bold">Question: What is express js? What is Nest JS?</h1>
                        <p className="text-lg mt-2"><span className="font-bold">Answer: </span></p>
                    </div>
                </div>
                <div>
                    <div className="border-4 border-[#f9bf00] rounded-lg p-5">
                        <h1 className="text-lg font-bold">Question: What is MongoDB aggregate and how does it work?</h1>
                        <p className="text-lg mt-2"><span className="font-bold">Answer: </span></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;