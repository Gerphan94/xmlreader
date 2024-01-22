import React from "react";


function XML4Page({ data }) {

    const HEAD_TB = [
        { name: 'STT', align: 'center' },
        { name: 'MA_DICH_VU', align: 'left' },
        { name: 'MA_CHI_SO', align: 'left' },
        { name: 'TEN_CHI_SO', align: 'left' },
        { name: 'GIA_TRI', align: 'left' },
        { name: 'MA_MAY', align: 'left' },
        { name: 'MO_TA', align: 'left' },
        { name: 'KET_LUAN', align: 'left' },
        { name: 'NGAY_KQ', align: 'left' }


    ]


    return (
        <>
            <div className="mt-2">
                <div className="text-center font-bold py-2 bg-blue-200 w-24 rounded-t-md">XML4</div>
                <div class="relative overflow-x-auto shadow-md  w-full min-h-[150px]">
                    <table class="w-full text-sm text-gray-500 ">
                        <thead class="text-xs text-gray-700 uppercase bg-blue-200">
                            <tr>
                                {HEAD_TB.map((header, index) => (
                                    <th key={index} cscope="col" class="px-6 py-3">{header.name}</th>
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

export default XML4Page;