import React from "react";


function XML5Page({ data }) {

    const HEAD_TB = [
        { name: 'STT', align: 'left' },
        { name: 'DIEN_BIEN', align: 'left' },
        { name: 'HOI_CHAN', align: 'left' },
        { name: 'PHAU_THUAT', align: 'left' },
        { name: 'NGAY_YL', align: 'left' }

    ]


    return (
        <>
            <div className="">
                <div class="relative overflow-x-auto shadow-md  w-full h-72">
                    <table class="w-full text-sm text-gray-500 ">
                        <thead class="sticky top-0 text-xs text-gray-700 uppercase bg-blue-200">
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

export default XML5Page;