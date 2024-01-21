import React, { useRef, useState, useEffect } from "react";
import XML1Page from "./XML1Page";
import XML2Page from "./XML2Page";
import XML3Page from "./XML3Page";

import AlertPopup from "./AlertPopup";

function MainPage() {

    const fileInputRef = useRef(null);
    const [xmlDetail, setXmlDetail] = useState({ 'xml2': [], 'xml3': [], 'xml4': [], 'xml5': [] });
    const [MaLK, setMaLK] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [msgPopup, setMsgPopup] = useState('')

    const handleShowAlert = () => {
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const fetchXML1Data = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/get_xml1s');
            const data = await response.json();
            setXml1(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const upload = (event) => {
        const fileInput = event.target;
        const files = fileInput.files;
        if (files.length > 0) {
            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                console.log(files[i])
                formData.append('files', files[i]);
            }

            // Now you can send this formData to your backend API
            // Example using fetch:
            fetch('http://127.0.0.1:5000/api/create_xml', { method: 'POST', body: formData, })
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
                .catch(error => console.error('Error:', error));
        }
        fileInputRef.current.value = null;

    };

    const [xml1, setXml1] = useState([])

    useEffect(() => {
        fetchXML1Data();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/get_xml_other/' + MaLK);
                const data = await response.json();
                console.log(data)
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
        <>
            <div className="px-6 mb-10">
                <div className="p-4 flex justify-between">
                    <div>XML</div>
                    <form>
                        <div class="flex flex-row items-center">
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
                                for="select-file"
                                className="block text-sm mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-blue-300 hover:bg-blue-500 text-white cursor-pointer"
                            >
                                Choose file
                            </label>
                            <label class="text-sm text-slate-500">{ }</label>
                        </div>
                    </form>

                </div>
                <XML1Page data={xml1} setMaLK={setMaLK} />
                <XML2Page data={xmlDetail['xml2']} />
                <XML3Page data={xmlDetail['xml3']} />
            </div>

            {showAlert &&
                <AlertPopup message={msgPopup} onClose={handleCloseAlert} />
            }


        </>
    )

}

export default MainPage;