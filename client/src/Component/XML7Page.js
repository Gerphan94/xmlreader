import React from "react";


function XML7Page({ data }) {


    const HEAD_TB = [

        { name: 'MA_LK', align: 'left' },
        { name: 'SO_LUU_TRU', align: 'left' },
        { name: 'MA_YTE', align: 'left' },
        { name: 'MA_KHOA_RV', align: 'left' },
        { name: 'NGAY_VAO', align: 'left' },
        { name: 'NGAY_RA', align: 'left' },
        { name: 'MA_DINH_CHI_THAI', align: 'left' },
        { name: 'NGUYENNHAN_DINHCHI', align: 'left' },
        { name: 'THOIGIAN_DINHCHI', align: 'left' },
        { name: 'TUOI_THAI', align: 'left' },
        { name: 'CHAN_DOAN_RV', align: 'left' },
        { name: 'PP_DIEUTRI', align: 'left' },
        { name: 'GHI_CHU', align: 'left' },
        { name: 'MA_TTDV', align: 'left' },
        { name: 'MA_BS', align: 'left' },
        { name: 'TEN_BS', align: 'left' },
        { name: 'NGAY_CT', align: 'left' },
        { name: 'MA_CHA', align: 'left' },
        { name: 'MA_ME', align: 'left' },
        { name: 'MA_THE_TAM', align: 'left' },
        { name: 'HO_TEN_CHA', align: 'left' },
        { name: 'HO_TEN_ME', align: 'left' },
        { name: 'SO_NGAY_NGHI', align: 'left' },
        { name: 'NGOAITRU_TUNGAY', align: 'left' },
        { name: 'NGOAITRU_DENNGAY', align: 'left' }


    ];


    return (
        <>

            <div class="relative overflow-x-auto shadow-md  w-full h-full">
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
                                            header.align === 'right' ? 'text-right' : 'text-left'
                                            } ${header.name === 'PHAU_THUAT' ? 'max-w-xl truncate' : ''}   `}
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

export default XML7Page;