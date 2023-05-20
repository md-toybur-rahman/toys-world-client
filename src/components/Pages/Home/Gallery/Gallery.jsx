import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Gallery = () => {
    return (
        <div className="mt-20">
            <div className="text-center p-5">
                <h1 className="text-3xl md:text-5xl font-bold text-[#f9bf00]">Our Gallery</h1>
                <p className="text-md md:text-xl mt-4 text-gray-500">Active toys for smart and active kids. Bring fun and non-stop<br />  learning for your little ones.</p>
            </div>
            <div className="flex justify-center my-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div data-aos="fade-down-right" data-aos-duration="1000" className="h-[250px] w-[300px] carousel carousel-vertical rounded-box border-2 border-[#f9bf00]">
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://images.unsplash.com/photo-1533859583213-c4e11b597ee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://images-na.ssl-images-amazon.com/images/I/71Rzl6D-YNL._AC_UL600_SR600,600_.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://m.media-amazon.com/images/I/81i+Cd47ZXL._AC_UF894,1000_QL80_.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://q5r8i2t3.rocketcdn.me/wp-content/uploads/2020/06/Tiger-Figure-by-Papo.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://i5.walmartimages.com/asr/fd58636f-6fe7-49ce-8d88-818bc5552701_1.bd6e258e2e2bb6fe73c470fab0728ccf.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://images-na.ssl-images-amazon.com/images/I/81GBJZwXpDL._AC_UL600_SR600,600_.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://i.pinimg.com/originals/c2/ac/3c/c2ac3cd3c66664af6e5fbfc4579450d0.jpg" />
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1000" className="h-[250px] w-[300px] carousel carousel-vertical rounded-box border-2 border-[#f9bf00]">
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://m.media-amazon.com/images/I/81aHw2o9dzL.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://i.ibb.co/FByRVKm/pngegg.png" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://static-01.daraz.com.bd/p/e48b2e077f8e3bc278196c8c5cca4b8b.jpg_720x720.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://media.istockphoto.com/id/1139848925/photo/black-cow-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=P-T07qEv2S23ML9OGKAD8f1ggfNI4i4sCW1RPPvkeCU=" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://m.media-amazon.com/images/I/81i+Cd47ZXL._AC_UF894,1000_QL80_.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://i.pinimg.com/originals/c2/ac/3c/c2ac3cd3c66664af6e5fbfc4579450d0.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://images-na.ssl-images-amazon.com/images/I/81GBJZwXpDL._AC_UL600_SR600,600_.jpg" />
                        </div>
                    </div>
                    <div data-aos="fade-down-left" data-aos-duration="1000" className="h-[250px] w-[300px] carousel carousel-vertical rounded-box border-2 border-[#f9bf00]">
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://m.media-amazon.com/images/I/81i+Cd47ZXL._AC_UF894,1000_QL80_.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://i.ibb.co/FByRVKm/pngegg.png" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://static-01.daraz.com.bd/p/e48b2e077f8e3bc278196c8c5cca4b8b.jpg_720x720.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://media.istockphoto.com/id/1139848925/photo/black-cow-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=P-T07qEv2S23ML9OGKAD8f1ggfNI4i4sCW1RPPvkeCU=" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://m.media-amazon.com/images/I/81aHw2o9dzL.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://i.pinimg.com/originals/c2/ac/3c/c2ac3cd3c66664af6e5fbfc4579450d0.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://images-na.ssl-images-amazon.com/images/I/81GBJZwXpDL._AC_UL600_SR600,600_.jpg" />
                        </div>
                    </div>
                    <div data-aos="fade-up-right" data-aos-duration="1000" className="h-[250px] w-[300px] carousel carousel-vertical rounded-box border-2 border-[#f9bf00]">
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://q5r8i2t3.rocketcdn.me/wp-content/uploads/2020/06/Tiger-Figure-by-Papo.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://images-na.ssl-images-amazon.com/images/I/71Rzl6D-YNL._AC_UL600_SR600,600_.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://m.media-amazon.com/images/I/81i+Cd47ZXL._AC_UF894,1000_QL80_.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://q5r8i2t3.rocketcdn.me/wp-content/uploads/2020/06/Tiger-Figure-by-Papo.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://i5.walmartimages.com/asr/fd58636f-6fe7-49ce-8d88-818bc5552701_1.bd6e258e2e2bb6fe73c470fab0728ccf.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://images-na.ssl-images-amazon.com/images/I/81GBJZwXpDL._AC_UL600_SR600,600_.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://i.pinimg.com/originals/c2/ac/3c/c2ac3cd3c66664af6e5fbfc4579450d0.jpg" />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="h-[250px] w-[300px] carousel carousel-vertical rounded-box border-2 border-[#f9bf00]">
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://images-na.ssl-images-amazon.com/images/I/81GBJZwXpDL._AC_UL600_SR600,600_.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://i.ibb.co/FByRVKm/pngegg.png" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://static-01.daraz.com.bd/p/e48b2e077f8e3bc278196c8c5cca4b8b.jpg_720x720.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://media.istockphoto.com/id/1139848925/photo/black-cow-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=P-T07qEv2S23ML9OGKAD8f1ggfNI4i4sCW1RPPvkeCU=" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://m.media-amazon.com/images/I/81i+Cd47ZXL._AC_UF894,1000_QL80_.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://i.pinimg.com/originals/c2/ac/3c/c2ac3cd3c66664af6e5fbfc4579450d0.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://images-na.ssl-images-amazon.com/images/I/81GBJZwXpDL._AC_UL600_SR600,600_.jpg" />
                        </div>
                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1000" className="h-[250px] w-[300px] carousel carousel-vertical rounded-box border-2 border-[#f9bf00]">
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://i5.walmartimages.com/asr/fd58636f-6fe7-49ce-8d88-818bc5552701_1.bd6e258e2e2bb6fe73c470fab0728ccf.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://i.ibb.co/FByRVKm/pngegg.png" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://static-01.daraz.com.bd/p/e48b2e077f8e3bc278196c8c5cca4b8b.jpg_720x720.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://media.istockphoto.com/id/1139848925/photo/black-cow-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=P-T07qEv2S23ML9OGKAD8f1ggfNI4i4sCW1RPPvkeCU=" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://m.media-amazon.com/images/I/81aHw2o9dzL.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://i.pinimg.com/originals/c2/ac/3c/c2ac3cd3c66664af6e5fbfc4579450d0.jpg" />
                        </div>
                        <div className="carousel-item h-full">
                            <img className="w-full h-full" src="https://images-na.ssl-images-amazon.com/images/I/81GBJZwXpDL._AC_UL600_SR600,600_.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;