import React, { useRef, useState, useEffect } from "react";
import { FaEye } from "react-icons/fa6";
import Select from 'react-select'

import XML1Page from "./XML1";
import XMLOther from "./XMLOther";
import LoadingPopup from "./LoadingPopup";
import InfoModal from "./InfoModal";
import styles from "./styles.module.css";
import AlertPopup from "./AlertPopup";



function MainPage() {
    const urlAPI = "http://127.0.0.1:5000/api/"

    const [xmlType, setXmlType] = useState('4210');
    // const [urlAPI, setUrlAPI] = useState('http://127.0.0.1:5000/api4210/')
    const fileInputRef = useRef(null);
    const [xmlDetail, setXmlDetail] = useState({ 'xml2': [], 'xml3': [], 'xml4': [], 'xml5': [] });
    const [xmlID, setXmlID] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [msgPopup, setMsgPopup] = useState('')
    const [selectedXML, setSelectedXML] = useState(2);
    const [xmlChilds, setXmlChild] = useState([2, 3, 4, 5]);

    const [xml1, setXml1] = useState([])
    const [isInfoShow, setIsInfoShow] = useState(false);
    const [tagInfo, setTagInfo] = useState({ "title": "", "des": "" })

    const [errorView, setErrorView] = useState(false);


    const handleXmlTypeChange = (selectedOption) => {
        setXmlType(selectedOption.value);

        if (selectedOption.value === '4210') {
            setXmlChild([2, 3, 4, 5]);
        }
        else {
            setXmlChild([2, 3, 4, 5, 7, 8, 9, 10, 11]);
        }
    }


    const [tableView, setTableView] = useState({ 'xml1': true, 'xmlother': true })
    const [tableH, setTableH] = useState({ "XML1H": 'h-1/3', "XMLOtherH": 'h-2/3' });


    const handleViewChange = (selectedOption) => {
        if (selectedOption.value === 1) {
            setTableView({ 'xml1': true, 'xmlother': true });
            setTableH({ "XML1H": 'h-1/3', "XMLOtherH": 'h-2/3' })
        } else if (selectedOption.value === 2) {
            setTableView({ 'xml1': true, 'xmlother': false });
            setTableH({ "XML1H": 'h-full', "XMLOtherH": 'h-0' })
        } else {
            setTableView({ 'xml1': false, 'xmlother': true });
            setTableH({ "XML1H": 'h-0', "XMLOtherH": 'h-full' })
        }
    }

    const handleChangeError = (selectedOption) => {
        console.log(selectedOption.value);
        setErrorView(selectedOption.value);
    }


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




 
    const handleClickCheck = async () => {
        try {
            const response = await fetch(urlAPI + 'check_xml/' + xmlType);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <div>
            {/* <Navbar /> */}

            <div className="fixed top-0 h-16 w-full border-b-2 ">
                <div className="flex justify-between w-full h-full">
                    <div className="flex gap-4">
                        <div className="flex items-center">

                            <Select
                                className="ml-10 w-40 font-bold, text-left"
                                options={[{ value: '4210', label: 'XML 4210' }, { value: '130', label: 'XML 130' }]}
                                menuPortalTarget={document.body}
                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999, border: 0, boxShadow: 'none' }) }}
                                defaultValue={{ value: '4210', label: "XML 4210" }}
                                isSearchable={false}
                                onChange={handleXmlTypeChange}
                            />
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
                        <Select
                            className="w-32 outline-none text-left border-white"
                            isSearchable={false}
                            options={[
                                { value: false, label: "Full" },
                                { value: true, label: "Error" }

                            ]}
                            menuPortalTarget={document.body}
                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                            defaultValue={{ value: false, label: "Full" }}
                            onChange={handleChangeError}
                        />
                        <Select
                            className="w-32 outline-none text-left"
                            isSearchable={false}
                            options={[
                                { value: 1, label: "All" },
                                { value: 2, label: "XML1" },
                                { value: 3, label: "! XML1" }
                            ]}
                            menuPortalTarget={document.body}
                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                            defaultValue={{ value: 1, label: "All" }}
                            onChange={handleViewChange}
                        />
                        <div className="flex">
                        <button
                            className="font-semibold bg-white hover:bg-gray-100 cursor-pointer border py-2 px-4 text-sm min-w-24"
                            onClick={() => handleClickCheck()}
                        >
                            Run Test
                        </button>
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
                                className="border border-w flex text-sm h-full py-2 px-4  font-semibold bg-white hover:bg-gray-100 cursor-pointer"
                            >
                                Choose file
                            </label>
                        </div>
                        </div>
                        

                    </div>
                </div>
            </div>

            <div className={styles.MainPage}>
                {tableView['xml1'] &&
                    <div className={` ${tableH['XML1H']} mb-4 `}>
                        <XML1Page
                            xmlType={xmlType}
                            data={xml1}
                            setXmlID={setXmlID}
                            setIsInfoShow={setIsInfoShow}
                            setTagInfo={setTagInfo}
                            errorView={errorView}
                        />
                        {/* <XML1Page xmlType={xmlType} data={xml1} setXmlID={setXmlID} /> */}
                    </div>
                }

                {tableView['xmlother'] && 

                <div className={`${tableH['XMLOtherH']} pb-20 z-50`}>
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
}

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