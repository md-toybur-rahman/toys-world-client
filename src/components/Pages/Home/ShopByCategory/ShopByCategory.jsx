import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductCard from './ProductCard';

const ShopByCategory = () => {
    const [bath, setBath] = useState([]);
    const [plush, setPlush] = useState([]);
    const [puppet, setPuppet] = useState([]);
    const [puzzle, setPuzzle] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys/bath')
            .then(res => res.json())
            .then(data => setBath(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/toys/plush')
            .then(res => res.json())
            .then(data => setPlush(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/toys/puppet')
            .then(res => res.json())
            .then(data => setPuppet(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/toys/puzzle')
            .then(res => res.json())
            .then(data => setPuzzle(data))
    }, [])
    return (
        <div className="mt-28">
            <div className="text-center p-5">
                <h1 className="text-3xl md:text-5xl font-bold text-[#f9bf00]">Categories</h1>
                <p className="text-md md:text-xl mt-4 text-gray-500">Active toys for smart and active kids. Bring fun and non-stop<br />  learning for your little ones.</p>
            </div>
            <div className="px-20 pb-20 mt-10">
                <Tabs>
                    <TabList className='text-lg font-bold border-b-2 border-[#f9bf00]'>
                        <Tab>Bath</Tab>
                        <Tab>Plush</Tab>
                        <Tab>Puppet</Tab>
                        <Tab>Puzzle</Tab>
                    </TabList>

                    <TabPanel className="mt-10">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                            {
                                bath.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                            {
                                plush.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                            {
                                puppet.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                            {
                                puzzle.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;