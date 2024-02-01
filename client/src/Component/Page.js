import React, { useRef, useState, useEffect } from "react";
import XML1Page from "./XML1";
import XMLOther from "./XMLOther";
import LoadingPopup from "./LoadingPopup";
import InfoModal from "./InfoModal";

import styles from "./styles.module.css";
import AlertPopup from "./AlertPopup";
import { FaEye } from "react-icons/fa6";



function MainPage() {

    const urlAPI = "http://127.0.0.1:5000/api/"

    const [xmlType, setXmlType] = useState('4210');
    // const [urlAPI, setUrlAPI] = useState('http://127.0.0.1:5000/api4210/')
    const fileInputRef = useRef(null);
    const [xmlDetail, setXmlDetail] = useState({});
    const [xmlID, setXmlID] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [msgPopup, setMsgPopup] = useState('')
    const [selectedXML, setSelectedXML] = useState(2);
    const [xmlChilds, setXmlChild] = useState([2, 3, 4, 5]);

    const [xml1, setXml1] = useState([])
    const [isInfoShow, setIsInfoShow] = useState(false);
    const [tagInfo, setTagInfo] = useState({ "title": "", "des": "" })

    const handleSelectChange = (event) => {
        setXmlType(event.target.value);

        if (event.target.value === '4210') {
            setXmlChild([2, 3, 4, 5]);
        }
        else {
            setXmlChild([2, 3, 4, 5, 7, 8, 9, 10, 11]);
        }
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const fetchXML1Data = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(urlAPI + 'get_xml1s/' + xmlType);
            const data = await response.json();
            setXml1(data);
            console.log('chekcing-----', data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        finally {
            setIsLoading(false);
        }
    };
    const [isLoading, setIsLoading] = useState(false);

    const upload = (event) => {
        const fileInput = event.target;
        const files = fileInput.files;
        if (files.length > 0) {
            setIsLoading(true);

            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append('files', files[i]);
            }

            // Now you can send this formData to your backend API
            // Example using fetch:
            fetch(urlAPI + 'create_xml/' + xmlType, { method: 'POST', body: formData, })
                .then(response => {
                    // Check if the response status is OK (status code between 200 and 299)
                    if (response.ok) {
                        setMsgPopup("Uploaded successfully");
                        
                        fetchXML1Data()
                    }
                    else {
                        setMsgPopup("Error occured!");
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                })
                .finally(() => {
                    // This block will be executed regardless of success or error
                    // setIsLoading(false);

                    setShowAlert(true);
                    fileInputRef.current.value = null;
                });
        }


    };

    useEffect(() => {
        console.log("-----Start -----")
        
        fetchXML1Data();
        
    }, [xmlType]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(urlAPI + 'get_otherxml/' + xmlID);
                const data = await response.json();
                setXmlDetail(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (xmlID) {
            fetchData();
        }

    }, [xmlID]);
    // xml1 height and xmlother height

    const [xmlView, setXmlView] = useState(0);
    const [xml1H, setXml1H] = useState('h-1/3')
    const [xmlOtherH, setXmlOtherH] = useState('h-2/3')

    const handleClickView = () => {
        if (xmlView === 2) {
            setXmlView(0);
        }
        else {
            setXmlView(xmlView + 1);
        }
    }

    useEffect(() => {
        console.log(xmlView);
        if (xmlView === 0) {
            setXml1H('h-1/3');
            setXmlOtherH('h-2/3');

        } else {
            if (xmlView === 1) {
                setXml1H('h-1/6');
                setXmlOtherH('h-5/6');
            } else {
                setXml1H('h-5/6');
                setXmlOtherH('h-1/6');
            }
        }

    }, [xmlView])


    return (
        <div>
            <div className="fixed top-0 h-16 w-full ">
                <div className="flex justify-between w-full h-full">
                    <div className="flex gap-4">
                        <div className="flex items-center">
                            <select
                                className="font-bold text-2xl ml-10 p-2 text-shadow-2xl cursor-pointer outline-none"
                                value={xmlType}
                                onChange={handleSelectChange}
                            >
                                <option className="text-lg" value={'4210'}>XML 4210</option>
                                <option className="text-lg" value={'130'} >XML 130</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <span className="border px-2 rounded-full font-bold  shadow-blue-200 shadow-md cursor-pointer">{xml1.length}</span>
                        </div>
                        <div className="flex items-center py-2 ml-24">
                            <input
                                className="border rounded-md py-1 px-2 outline-none"
                                placeholder="Search ... "

                            ></input>
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-2 px-4">
                        <div className="flex items-center ">
                            <button
                                className="text-2xl text-blue-200 hover:text-blue-500"
                                onClick={() => handleClickView()}
                            >
                                <FaEye />
                            </button>
                        </div>

                        <button className="font-semibold bg-blue-300 hover:bg-blue-500 text-white cursor-pointer border py-2 px-4 rounded-md text-sm min-w-24">Test</button>
                            <div className="flex items-center">
                                <input
                                    type="file"
                                    id="select-file"
                                    hidden
                                    ref={fileInputRef}
                                    onChange={upload}
                                    multiple
                                    accept="application/xml"
                                />
                                <label
                                    htmlFor="select-file"
                                    className="border border-w flex text-sm h-full py-2 px-4 rounded-md font-semibold bg-blue-300 hover:bg-blue-500 text-white cursor-pointer"
                                >
                                    Choose file
                                </label>
                            </div>

                    </div> 
                </div>
            </div>

            <div className={styles.MainPage}>
                <div className={xml1H}>
                    <XML1Page
                        xmlType={xmlType}
                        data={xml1}
                        setXmlID={setXmlID}
                        setIsInfoShow={setIsInfoShow}
                        setTagInfo={setTagInfo}
                    />
                    {/* <XML1Page xmlType={xmlType} data={xml1} setXmlID={setXmlID} /> */}
                </div>
                <div className={`${xmlOtherH} mt-10 pb-20 z-50`}>
                    <div className="flex h-10">
                        {xmlChilds.map((child) => (
                            <button
                                key={child}
                                className={`rounded-t-md px-4 py-2 text-gray-700 ${selectedXML === child ? 'bg-blue-200 font-bold' : 'bg-white hover:bg-blue-100'}`}
                                onClick={() => setSelectedXML(child)}
                            >
                                XML{child}
                            </button>
                        ))}
                    </div>
                    <div className={styles.DetailBox}>
                        <XMLOther
                            xmlType={xmlType}
                            xmlNumber={selectedXML}
                            data={xmlDetail}
                            setIsInfoShow={setIsInfoShow}
                            setTagInfo={setTagInfo}

                        />
                    </div>
                </div>

            </div>

            {showAlert &&
                <AlertPopup message={msgPopup} onClose={handleCloseAlert} />
            }

            {isLoading &&
                <LoadingPopup />
            }

            {isInfoShow &&
                <InfoModal setIsInfoShow={setIsInfoShow} tagInfo={tagInfo} />
            }

        </div>
    )

}

export default MainPage;