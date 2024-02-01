import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import XmlTag4210 from "./XmlTag4210.json"
import XmlTag130 from "./XmlTag130.json"


function XML1Page({ xmlType, data, setXmlID, setIsInfoShow, setTagInfo }) {
    
    let head_tb;
    if (xmlType === '4210') {
        head_tb = XmlTag4210[0]['tag'];
    }
    else {
        head_tb = XmlTag130[0]['tag'];
    }

    const [sortedData, setSortedData] = useState([]);
    
    useEffect(() => {
        // Assuming 'STT' is a numeric property, you can sort the data like this:
        const sorted = [...data].sort((a, b) => {
            // Convert 'STT' values to numbers for proper numeric sorting
            const sttA = parseFloat(a.xml1.STT);
            const sttB = parseFloat(b.xml1.STT);
            return sttA - sttB;
        });

        setSortedData(sorted);
    }, [data]);

    const [selectedRow, setSelectedRow] = useState(-1);
    const handleClick = (index, id) => {
        setXmlID(id['$oid']);
        setSelectedRow(index);
    }

    const handClickHeader = (name, des) => {
        setIsInfoShow(true);
        setTagInfo({ "title": name, "des": des })
    }

    return (
        <>
            <div className={`relative overflow-x-auto shadow-md w-full h-full`}>
                <table className=" w-full  text-sm text-gray-500 ">
                    <thead className="sticky top-0 text-md text-gray-700 uppercase bg-blue-200">
                        <tr>
                            <th cscope="col" className="px-4 py-2">
                            </th>
                            {head_tb.slice(1).map((header, index) => (
                                <th
                                    key={index}
                                    cscope="col"
                                    className="px-6 py-2 z-10"
                                    
                                >
                                    <div className="cursor-pointer" onClick={() => handClickHeader(header.name, header.des)}>
                                    {header.name}
                                    </div>
                                    
                                </th>
                            ))}

                        </tr>
                    </thead>
                    {/* Add the rest of your table body here */}

                    <tbody>
                        {sortedData.map((item, rowIndex) => (
                            <tr
                                key={rowIndex}
                                onClick={() => handleClick(rowIndex, item['_id'])}
                                className={` border-b  dark:border-gray-700 hover:bg-blue-100 cursor-default ${selectedRow === rowIndex ? 'bg-blue-100' : 'bg-white'}`}
                            >
                                <td className="p-1 text-green-500 flex justify-center">
                                    <FaCheck />
                                </td>
                                {head_tb.slice(1).map((header, colIndex) => (
                                    <td
                                        key={colIndex} 
                                        className={`px-3 py-1 whitespace-nowrap ${header.align === 'center' ? 'text-center' : (header.align === 'right' ? 'text-right' : 'text-left')}`}
                                    >
                                            {item['xml1'][header.name]}
                                    </td>

                                ))}

                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>
        </>
    )

}

export default XML1Page;