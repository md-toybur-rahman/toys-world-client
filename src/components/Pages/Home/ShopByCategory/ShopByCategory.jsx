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
        <div>
            <div className="px-20 py-20">
                <Tabs>
                    <TabList>
                        <Tab>Bath</Tab>
                        <Tab>Plush</Tab>
                        <Tab>Puppet</Tab>
                        <Tab>Puzzle</Tab>
                    </TabList>

                    <TabPanel className="mt-10">
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                bath.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-3 gap-5'>
                            {
                                plush.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-3 gap-5'>
                            {
                                puppet.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-3 gap-5'>
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