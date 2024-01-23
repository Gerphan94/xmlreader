import React from "react";


function XML4Page({ xmlType, data }) {

    const HEAD_TB_4210 = [
        { name: 'STT', align: 'center' },
        { name: 'MA_DICH_VU', align: 'left' },
        { name: 'MA_CHI_SO', align: 'center' },
        { name: 'TEN_CHI_SO', align: 'left' },
        { name: 'GIA_TRI', align: 'center' },
        { name: 'MA_MAY', align: 'left' },
        { name: 'MO_TA', align: 'left' },
        { name: 'KET_LUAN', align: 'left' },
        { name: 'NGAY_KQ', align: 'center' }
    ];

    const HEAD_TB_130 = [
       
        {name:'STT', align:'left'},
        {name:'MA_DICH_VU', align:'left'},
        {name:'MA_CHI_SO', align:'left'},
        {name:'TEN_CHI_SO', align:'left'},
        {name:'GIA_TRI', align:'left'},
        {name:'DON_VI_DO', align:'left'},
        {name:'MO_TA', align:'left'},
        {name:'KET_LUAN', align:'left'},
        {name:'NGAY_KQ', align:'left'},
        {name:'MA_BS_DOC_KQ', align:'left'},
        {name:'DU_PHONG', align:'left'}
        
    ]

    let head_tb;
    if (xmlType === '4210') {
        head_tb = HEAD_TB_4210;
    }
    else {
        head_tb = HEAD_TB_130;
    }


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
                        {data.map((item, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 cursor-auto">
                                {head_tb.map((header, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={`px-6 py-1   ${header.align === 'center' ? 'text-center' :
                                            header.align === 'right' ? 'text-right' : 'text-left'
                                            } ${header.name === 'MO_TA'? 'max-w-xl truncate': 'whitespace-nowrap'}  `}
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

export default XML4Page;