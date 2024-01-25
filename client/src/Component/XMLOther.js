import React, { useState } from "react";
import XmlTag4210 from  "./XmlTag4210.json"
import XmlTag130 from "./XmlTag130.json"

function XMLOther({ xmlType, xmlNumber, data }) {

    let head_tb;
    if (xmlType === '4210') {
        head_tb = XmlTag4210[xmlNumber]['tag'];
    }
    else {
        head_tb = XmlTag130[xmlNumber]['tag'];
    }

    const values = data['xml'+xmlNumber]

    return (
        <>
                <div class="relative overflow-x-auto shadow-md w-full h-full">
                    <table class="w-full text-sm text-gray-500 ">
                        <thead class="sticky top-0 text-xs text-gray-700 uppercase bg-blue-200">
                            <tr>
                                {head_tb.map((header, index) => (
                                    <th key={index} cscope="col" class="px-6 py-3">{header.name}</th>
                                ))}
                            </tr>
                        </thead>
                        {/* Add the rest of your table body here */}
                        <tbody>
                            {values.map((item, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 cursor-auto">
                                    {head_tb.map((header, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`px-3 py-1 whitespace-nowrap  ${header.align === 'center' ? 'text-center' :
                                                header.align === 'right' ? 'text-right' : 'text-left'
                                                }`}
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