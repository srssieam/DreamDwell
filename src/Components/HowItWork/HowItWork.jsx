import findHome from '../../assets/findHome.png'
import relator from '../../assets/relator.png'
import document from '../../assets/document.png'
import key from '../../assets/key.png'

const HowItWork = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-24 px-6 lg:px-0">
            <h1 className="text-3xl lg:text-5xl font-semibold mb-10">How it works ?<br />
                Find a perfect home
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
                <div className="px-6 md:border-r border-r-green-600 space-y-3">
                    <img src={findHome} className='w-20' alt="" />
                    <p className='text-3xl font-semibold'>Find real estate</p>
                    <p>Discovering Your Perfect Space: Begin your journey
                        to finding the ideal property with our streamlined process.
                    </p>
                </div>
                <div className="px-6 lg:border-r border-r-green-600 space-y-3 mt-6 lg:mt-0">
                    <img src={relator} className='w-20' alt="" />
                    <p className='text-3xl font-semibold'>Meet relator</p>
                    <p>Meet our expert realtors—your guides to the perfect property.
                        Get personalized assistance and insider knowledge to find your ideal home.
                    </p>
                </div>
                <div className="px-6 md:border-r border-r-green-600 space-y-3 mt-6 lg:mt-0">
                    <img src={document} className='w-20' alt="" />
                    <p className='text-3xl font-semibold'>Documents</p>
                    <p>Documents made easy. Find, download, and manage all
                         your real estate paperwork efficiently in one central location.
                    </p>
                </div>
                <div className="px-6 space-y-3 mt-6 lg:mt-0">
                    <img src={key} className='w-20' alt="" />
                    <p className='text-3xl font-semibold'>Take the keys</p>
                    <p> As we finalize the details,
                         our support ensures a hassle-free transition. Receive your keys and step into a new beginning.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;