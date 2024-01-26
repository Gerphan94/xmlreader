import React, { useRef, useState, useEffect } from "react";
import XML1Page from "./XML1";
import XMLOther from "./XMLOther";
import LoadingPopup from "./LoadingPopup";

import styles from "./styles.module.css";
import AlertPopup from "./AlertPopup";

function MainPage() {

    const [xmlType, setXmlType] = useState('4210');
    const [urlAPI, setUrlAPI] = useState('http://127.0.0.1:5000/api4210/')
    const fileInputRef = useRef(null);
    const [xmlDetail, setXmlDetail] = useState({ 'xml2': [], 'xml3': [], 'xml4': [], 'xml5': [] });
    const [MaLK, setMaLK] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [msgPopup, setMsgPopup] = useState('')
    const [selectedXML, setSelectedXML] = useState(2);
    const [xmlChilds, setXmlChild] = useState([2,3,4,5]);

    const [xml1, setXml1] = useState([])


    const handleSelectChange = (event) => {
        setXmlType(event.target.value);
       
        if (event.target.value === '4210') {
            setUrlAPI('http://127.0.0.1:5000/api4210/');
            setXmlChild([2,3,4,5]);
        }
        else {
            setUrlAPI('http://127.0.0.1:5000/api130/');
            setXmlChild([2,3,4,5,7,8,9,10,11]);
        }
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const fetchXML1Data = async () => {
        try {
            const response = await fetch(urlAPI + 'get_xml1s');
            const data = await response.json();
            setXml1(data);
        } catch (error) {
            console.error('Error fetching data:', error);
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
            fetch(urlAPI + 'create_xml', { method: 'POST', body: formData, })
                .then(response => {
                    // Check if the response status is OK (status code between 200 and 299)
                    if (response.ok) {
                        setMsgPopup("Uploaded successfully");
                        setShowAlert(true);
                        fetchXML1Data()
                    }
                    else {
                        setMsgPopup("Error occured!");
                        setShowAlert(true);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                })
                .finally(() => {
                    // This block will be executed regardless of success or error
                    setIsLoading(false);
                    fileInputRef.current.value = null;
                });



        }
       

    };

    useEffect(() => {
        console.log("Fetch data", urlAPI);
        fetchXML1Data();
    }, [xmlType]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(urlAPI + 'get_xml_other/' + MaLK);
                const data = await response.json();
                setXmlDetail(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (MaLK) {
            fetchData();
        }

    }, [MaLK]);

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

                    <form>
                        <div className="flex items-center h-full mr-10">
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
                                className="border border-w block text-sm mr-4 py-2 px-4 rounded-md font-semibold bg-blue-300 hover:bg-blue-500 text-white cursor-pointer"
                            >
                                Choose file
                            </label>
                            <label className="text-sm text-slate-500">{ }</label>
                        </div>
                    </form>
                </div>
            </div>

            <div className={styles.MainPage}>
                <div className="h-1/3">
                    <XML1Page  xmlType={xmlType} data={xml1} setMaLK={setMaLK} />
                    {/* <XML1Page xmlType={xmlType} data={xml1} setMaLK={setMaLK} /> */}
                </div>
                <div className="h-2/3 mt-10 pb-20">
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
                        <XMLOther xmlType={xmlType} xmlNumber={selectedXML} data={xmlDetail}  />
                    </div>
                </div>

            </div>

            {showAlert &&
                <AlertPopup message={msgPopup} onClose={handleCloseAlert} />
            }

            {isLoading &&
            <LoadingPopup />
            }

        </div>
    )

}

export default MainPage;