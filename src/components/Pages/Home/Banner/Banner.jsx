
const Banner = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="hidden md:flex items-center justify-center w-full">
                <div className="carousel bg-sky-200 h-[600px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex items-center justify-between gap-20 px-20">
                            <img src="https://i.ibb.co/FByRVKm/pngegg.png" className="w-[600px]" />
                            <div>
                                <h3 className="text-2xl font-bold">Big fun for kids !</h3>
                                <h1 className="text-7xl font-extrabold text-[#ff9000] my-5">A World <br /> To Explore</h1>
                                <p className="text-xl font-lg">Active toys for smart and active kids. Bring fun<br /> and non-stop  learning for your little ones.</p>
                                <button className="btn-custom mt-5">Explore More</button>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex items-center justify-between gap-20 px-20">
                            <img src="https://i.ibb.co/FByRVKm/pngegg.png" className="w-[600px]" />
                            <div>
                                <h3 className="text-2xl font-bold">Big fun for kids !</h3>
                                <h1 className="text-7xl font-extrabold text-[#ff9000] my-5">A World <br /> To Explore</h1>
                                <p className="text-xl font-lg">Active toys for smart and active kids. Bring fun<br />  and non-stop learning for your little ones.</p>
                                <button className="btn-custom mt-5">Explore More</button>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex items-center justify-between gap-20 px-20">
                            <img src="https://i.ibb.co/FByRVKm/pngegg.png" className="w-[600px]" />
                            <div>
                                <h3 className="text-2xl font-bold">Big fun for kids !</h3>
                                <h1 className="text-7xl font-extrabold text-[#ff9000] my-5">A World <br /> To Explore</h1>
                                <p className="text-xl font-lg">Active toys for smart and active kids. Bring fun <br /> and non-stop  learning for your little ones.</p>
                                <button className="btn-custom mt-5">Explore More</button>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex items-center justify-between gap-20 px-20">
                            <img src="https://i.ibb.co/FByRVKm/pngegg.png" className="w-[600px]" />
                            <div>
                                <h3 className="text-2xl font-bold">Big fun for kids !</h3>
                                <h1 className="text-7xl font-extrabold text-[#ff9000] my-5">A World <br /> To Explore</h1>
                                <p className="text-xl font-lg">Active toys for smart and active kids. Bring fun<br /> and non-stop  learning for your little ones.</p>
                                <button className="btn-custom mt-5">Explore More</button>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>



            <div className="flex flex-col md:hidden items-center justify-center mt-10 mb-5 gap-20 px-20">
                    <img src="https://i.ibb.co/FByRVKm/pngegg.png" className="w-[600px]" />
                <div className="text-center">
                    <h3 className="text-xl font-bold">Big fun for kids !</h3>
                    <h1 className="text-5xl font-extrabold text-[#ff9000] my-5">A World <br /> To Explore</h1>
                    <p className="text-lg">Active toys for smart and active kids. Bring fun<br /> and non-stop  learning for your little ones.</p>
                    <button className="btn-custom mt-5">Explore More</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;