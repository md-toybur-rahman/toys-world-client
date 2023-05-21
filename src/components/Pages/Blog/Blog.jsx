import useTitle from "../../../CustomHooks/useTitle";


const Blog = () => {
    useTitle('Blog')
    return (
        <div className="mx-20">
            <h1 className="text-center mt-20 mb-10 text-3xl md:text-5xl font-bold text-[#f9bf00]">Blog</h1>

            <div className="grid gap-5">
                <div>
                    <div className="border-4 border-[#f9bf00] rounded-lg p-5">
                        <h1 className="text-lg font-bold">Question: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        <p className="text-lg mt-2"><span className="font-bold">Answer: Refresh token is a kind of security policy. Refresh token is changeable, thats get by Access Token. Access Token is a kind of ID Card. User gets their resources by Access Token. We can Store Token in localStorage. and HTTP Cookies is the better option to store the token.</span></p>
                    </div>
                </div>
                <div>
                    <div className="border-4 border-[#f9bf00] rounded-lg p-5">
                        <h1 className="text-lg font-bold">Question: Compare SQL and NoSQL databases?</h1>
                        <p className="text-lg mt-2"><span className="font-bold">Answer: SQL databases are table-based and SQL databases is relational database. its use structured query language.And SQL databases are better for multi-row transactions. In Other hand, NoSQL databases are non-relational and dynamic schemas for unstructured data.</span></p>
                    </div>
                </div>
                <div>
                    <div className="border-4 border-[#f9bf00] rounded-lg p-5">
                        <h1 className="text-lg font-bold">Question: What is express js? What is Next JS?</h1>
                        <p className="text-lg mt-2"><span className="font-bold">Answer: Express.js written by Javascript. Its a web application framework that provides a set of features for web and mobile application. And Next.js is a React FrameWork , thats helps us to create fast web applications. Its provides additional structure, features and optimizations our application</span></p>
                    </div>
                </div>
                <div>
                    <div className="border-4 border-[#f9bf00] rounded-lg p-5">
                        <h1 className="text-lg font-bold">Question: What is MongoDB aggregate and how does it work?</h1>
                        <p className="text-lg mt-2"><span className="font-bold">Answer: MongoDB aggregate use for processing large number of documents in a collection. By aggregate we have to quickly run complex operations. When we get some complex operation then we will use aggregate pipeline.</span></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;