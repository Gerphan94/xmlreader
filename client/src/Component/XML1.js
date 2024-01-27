import React, { useState, useEffect } from "react";
import { FaCheck, FaChevronUp, FaChevronDown   } from "react-icons/fa6";
import XmlTag4210 from "./XmlTag4210.json"
import XmlTag130 from "./XmlTag130.json"

function XML1Page({ xmlType, data, setMaLK }) {

    let head_tb;
    if (xmlType === '4210') {
        head_tb = XmlTag4210[0]['tag'];
    }
    else {
        head_tb = XmlTag130[0]['tag'];
    }

    const [sortedData, setSortedData] = useState([])

    const [tableHeight, setTableHeight] = useState('h-full')




    useEffect(() => {
        // Assuming 'STT' is a numeric property, you can sort the data like this:
        const sorted = [...data].sort((a, b) => {
            // Convert 'STT' values to numbers for proper numeric sorting
            const sttA = parseFloat(a.STT);
            const sttB = parseFloat(b.STT);
            return sttA - sttB;
        });

        setSortedData(sorted);
    }, [data]);

    const [selectedRow, setSelectedRow] = useState(-1);
    const handleClick = (index, ma_lk) => {
        setMaLK(ma_lk);
        setSelectedRow(index);
    }

    return (
        <>
            <div className={`relative overflow-x-auto shadow-md w-full ${tableHeight}`}>
                <table className=" w-full  text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="sticky top-0 text-md text-gray-700 uppercase bg-blue-200">
                        <tr>
                            <th cscope="col" className="px-4 py-2">
                                <button className="w-full border border-white px-4 py-1 cursor-pointer rounded-md">
                                <FaChevronUp className=" " />
                                </button>
                                
                            </th>
                            {head_tb.slice(1).map((header, index) => (
                                <th key={index} cscope="col" className="px-6 py-2 z-10">{header.name}</th>
                            ))}
                           
                        </tr>
                    </thead>
                    {/* Add the rest of your table body here */}
                   
                        <tbody>
                            {sortedData.map((item, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    onClick={() => handleClick(rowIndex, item['MA_LK'])}
                                    className={` border-b  dark:border-gray-700 hover:bg-blue-100 cursor-default ${selectedRow === rowIndex ? 'bg-blue-100' : 'bg-white'}`}
                                >
                                    <td className="p-1 text-green-500 flex justify-center">
                                        <FaCheck />
                                    </td>
                                    {head_tb.slice(1).map((header, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`px-3 py-1 whitespace-nowrap  ${header.css}`}
                                        >
                                            {item[header.name]}
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