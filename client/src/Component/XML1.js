import React, { useState, useEffect } from "react";
import { FaCheck, FaCircleInfo  } from "react-icons/fa6";
import XmlTag4210 from "./XmlTag4210.json"
import XmlTag130 from "./XmlTag130.json"


function XML1Page({ xmlType, data, setXmlID, setIsInfoShow, setTagInfo, errorView }) {
    
    console.log(errorView);
    let head_tb;
    if (xmlType === '4210') {
        head_tb = XmlTag4210[0]['tag'];
    }
    else {
        head_tb = XmlTag130[0]['tag'];
    }

    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
        if (errorView) {
            const filterData = data.filter(item => item['status'] === 'FAIL');
            setFilterData(filterData);
        } else {
            setFilterData(data);
        }
        
    }, [data, errorView])

    const [sortedData, setSortedData] = useState([]);
    
    useEffect(() => {
        // Assuming 'STT' is a numeric property, you can sort the data like this:
        const sorted = [...filterData].sort((a, b) => {
            // Convert 'STT' values to numbers for proper numeric sorting
            const sttA = parseFloat(a.xml1[1].STT);
            const sttB = parseFloat(b.xml1[1].STT);
            return sttA - sttB;
        });
        setSortedData(sorted);
    }, [filterData]);

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
            <div className={`relative overflow-x-auto shadow-md w-full h-full z-10`}>
                <table className=" w-full text-xs text-gray-500 ">
                    <thead className="sticky top-0 text-gray-700 uppercase bg-blue-200">
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
                                <td className="p-1  flex justify-center">
                                   
                                    {item['status'] === 'PASS' ?
                                    <FaCheck className="text-green-500" /> : <FaCircleInfo className="text-red-600" />
                                    
                                    }
                                    
                                </td>
                                {head_tb.slice(1).map((header, colIndex) => (
                                    <td
                                    key={colIndex} 
                                    className={`px-3 py-1 whitespace-nowrap ${header.align === 'center' ? 'text-center' : (header.align === 'right' ? 'text-right' : 'text-left')}
                                        ${item['xml1'][colIndex+1]['status'] ==='PASS' ? '': 'bg-red-300'}
                                    `}
                                >
                                    {item['xml1'][colIndex+1][header.name]}
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