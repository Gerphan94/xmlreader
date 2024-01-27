import React, {  } from "react";
import XmlTag4210 from  "./XmlTag4210.json"
import XmlTag130 from "./XmlTag130.json"

function XMLOther({ xmlType, xmlNumber, data }) {
    
    let head_tb;
    if (xmlType === '4210') {
        head_tb = XmlTag4210[xmlNumber-1]['tag'];
    }
    else {
        head_tb = XmlTag130[xmlNumber-1]['tag'];
    }

    const values = data['xml'+xmlNumber]

    return (
        <>
                <div className="relative overflow-x-auto shadow-md w-full h-full">
                    <table className="w-full text-sm text-gray-500 ">
                        <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-blue-200">
                            <tr>
                                {head_tb.slice(1).map((header, index) => (
                                    <th key={index} cscope="col" className="px-6 py-3 whitespace-nowrap">{header.name}</th>
                                ))}
                            </tr>
                        </thead>
                        {/* Add the rest of your table body here */}
                        <tbody>
                            {values.map((item, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 cursor-auto">
                                    {head_tb.slice(1).map((header, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`px-6 py-1 whitespace-nowrap ${header.css} `}
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

export default XMLOther;