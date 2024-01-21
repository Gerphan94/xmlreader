import React, { useState, useEffect } from "react";


function XML2Page({ data }) {

    const HEAD_TB = [
       
        { name: 'STT', align: 'left' },
        { name: 'MA_THUOC', align: 'left' },
        { name: 'MA_NHOM', align: 'left' },
        { name: 'TEN_THUOC', align: 'left' },
        { name: 'DON_VI_TINH', align: 'left' },
        { name: 'HAM_LUONG', align: 'left' },
        { name: 'DUONG_DUNG', align: 'left' },
        { name: 'LIEU_DUNG', align: 'left' },
        { name: 'SO_DANG_KY', align: 'left' },
        { name: 'TT_THAU', align: 'left' },
        { name: 'PHAM_Vl', align: 'left' },
        { name: 'TYLE_TT', align: 'left' },
        { name: 'SO_LUONG', align: 'left' },
        { name: 'DON_GIA', align: 'left' },
        { name: 'THANH_TIEN', align: 'left' },
        { name: 'MUC_HUONG', align: 'left' },
        { name: 'T_NGUON KHAC', align: 'left' },
        { name: 'T_BNTT', align: 'left' },
        { name: 'T_BHTT', align: 'left' },
        { name: 'T_BNCCT', align: 'left' },
        { name: 'T_NGOAIDS', align: 'left' },
        { name: 'MA_KHOA', align: 'left' },
        { name: 'MA_BAC_SI', align: 'left' },
        { name: 'MA_BENH', align: 'left' },
        { name: 'NGAY_YL', align: 'left' },
        { name: 'MA_PTTT', align: 'left' }

    ]


    return (
        <>
            <div className="mt-5">
                <div className="text-left font-bold py-2">XML2</div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full min-h-[300px]">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {HEAD_TB.map((header, index) => (
                                    <th key={index} cscope="col" class="px-6 py-1">{header.name}</th>
                                ))}
                            </tr>
                        </thead>
                        {/* Add the rest of your table body here */}
                        <tbody>
                            {data.map((item, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 cursor-auto">
                                    {HEAD_TB.map((header, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`px-6 py-1 whitespace-nowrap  ${header.align === 'center' ? 'text-center' :
                                                header.align === 'right' ? 'text-right' :
                                                    ''
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
            </div>

        </>
    )

}

export default XML2Page;