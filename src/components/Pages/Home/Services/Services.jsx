

const Services = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-10 my-28 mx-10">
            <div className="w-1/2">
                <img src="https://cdn.shopify.com/s/files/1/0475/2385/6541/files/ser-1_800x.jpg?v=1613777297" alt="" />
            </div>
            <div className="w-1/2">
                <h1 className="text-3xl md:text-5xl text-[#f9bf00] font-bold mb-7">The Finest Toy</h1>
                <p className="text-md md:text-xl text-gray-500">Proin sed libero enim faucibus turpis, amet facilisis magna etiam tempore. Porttitor massa id neque aliquam vestibulum morbis, cras sed felis eget velit aliquet sagittis id consectetur purus pharetra magna placerate.</p>
                <div className="grid md:grid-cols-2 gap-4 mt-7 md:text-lg font-bold">
                    <div className="flex items-center gap-3"><div data-aos="flip-right">🧿</div> Creative toys</div>
                    <div className="flex items-center gap-3"><div data-aos="flip-right">🧿</div> Electronic toys</div>
                    <div className="flex items-center gap-3"><div data-aos="flip-right">🧿</div> Educational toys</div>
                    <div className="flex items-center gap-3"><div data-aos="flip-right">🧿</div> Construction toys</div>
                </div>
            </div>
        </div>
    );
};

export default Services;