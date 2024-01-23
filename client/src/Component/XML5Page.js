import React from "react";


function XML5Page({ xmlType, data }) {

    const HEAD_TB_4210 = [
        { name: 'STT', align: 'center' },
        { name: 'DIEN_BIEN', align: 'left' },
        { name: 'HOI_CHAN', align: 'left' },
        { name: 'PHAU_THUAT', align: 'left' },
        { name: 'NGAY_YL', align: 'center' }

    ]

    const HEAD_TB_130 = [
       
        { name: 'STT', align: 'left' },
        { name: 'DIEN_BIEN_LS', align: 'left' },
        { name: 'GIAI_DOAN_BENH', align: 'left' },
        { name: 'HOI_CHAN', align: 'left' },
        { name: 'PHAU_THUAT', align: 'left' },
        { name: 'THOI_DIEM_DBLS', align: 'left' },
        { name: 'NGUOI_THUC_HIEN', align: 'left' },
        { name: 'DU_PHONG', align: 'left' }

    ];
    let head_tb;
    if (xmlType === '4210') {
        head_tb = HEAD_TB_4210;
    }
    else {
        head_tb = HEAD_TB_130;
    }


    return (
        <>

            <div class="relative overflow-x-auto shadow-md  w-full h-full">
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
                        {data.map((item, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 cursor-auto">
                                {head_tb.map((header, colIndex) => (
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

export default XML5Page;