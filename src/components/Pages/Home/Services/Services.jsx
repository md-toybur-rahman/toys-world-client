

const Services = () => {
    return (
        <div className="flex items-center gap-10 my-28 mx-10">
            <div className="w-1/2">
                <img src="https://cdn.shopify.com/s/files/1/0475/2385/6541/files/ser-1_800x.jpg?v=1613777297" alt="" />
            </div>
            <div className="w-1/2">
                <h1 className="text-5xl text-[#f9bf00] font-bold mb-7">The Finest Toy</h1>
                <p className="text-xl text-gray-500">Proin sed libero enim faucibus turpis, amet facilisis magna etiam tempore. Porttitor massa id neque aliquam vestibulum morbis, cras sed felis eget velit aliquet sagittis id consectetur purus pharetra magna placerate.</p>
                <div className="grid grid-cols-2 gap-4 mt-7 text-lg font-bold">
                    <h1>🧿 Creative toys</h1>
                    <h1>🧿 Electronic toys</h1>
                    <h1>🧿 Educational toys</h1>
                    <h1>🧿 Construction toys</h1>
                </div>
            </div>
        </div>
    );
};

export default Services;