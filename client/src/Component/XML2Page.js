import React, { useState } from "react";


function XML2Page({ xmlType, data }) {

    const HEAD_TB_4210 = [
        { name: 'STT', align: 'center' },
        { name: 'MA_THUOC', align: 'left' },
        { name: 'MA_NHOM', align: 'center' },
        { name: 'TEN_THUOC', align: 'left' },
        { name: 'DON_VI_TINH', align: 'center' },
        { name: 'HAM_LUONG', align: 'left' },
        { name: 'DUONG_DUNG', align: 'center' },
        { name: 'LIEU_DUNG', align: 'left' },
        { name: 'SO_DANG_KY', align: 'left' },
        { name: 'TT_THAU', align: 'left' },
        { name: 'PHAM_Vl', align: 'center' },
        { name: 'TYLE_TT', align: 'center' },
        { name: 'SO_LUONG', align: 'left' },
        { name: 'DON_GIA', align: 'left' },
        { name: 'THANH_TIEN', align: 'left' },
        { name: 'MUC_HUONG', align: 'center' },
        { name: 'T_NGUON KHAC', align: 'left' },
        { name: 'T_BNTT', align: 'right' },
        { name: 'T_BHTT', align: 'right' },
        { name: 'T_BNCCT', align: 'right' },
        { name: 'T_NGOAIDS', align: 'right' },
        { name: 'MA_KHOA', align: 'center' },
        { name: 'MA_BAC_SI', align: 'left' },
        { name: 'MA_BENH', align: 'left' },
        { name: 'NGAY_YL', align: 'center' },
        { name: 'MA_PTTT', align: 'center' }
    ]
    const HEAD_TB_130 = [
        {name:'STT', align:'center'},
        {name:'MA_THUOC', align:'left'},
        {name:'MA_PP_CHEBIEN', align:'left'},
        {name:'MA_CSKCB_THUOC', align:'left'},
        {name:'MA_NHOM', align:'center'},
        {name:'TEN_THUOC', align:'left'},
        {name:'DON_VI_TINH', align:'center'},
        {name:'HAM_LUONG', align:'left'},
        {name:'DUONG_DUNG', align:'center'},
        {name:'DANG_BAO_CHE', align:'left'},
        {name:'LIEU_DUNG', align:'left'},
        {name:'CACH_DUNG', align:'left'},
        {name:'SO_DANG_KY', align:'left'},
        {name:'TT_THAU', align:'left'},
        {name:'PHAM_VI', align:'center'},
        {name:'TYLE_TT_BH', align:'center'},
        {name:'SO_LUONG', align:'left'},
        {name:'DON_GIA', align:'right'},
        {name:'THANH_TIEN_BV', align:'right'},
        {name:'THANH_TIEN_BH', align:'right'},
        {name:'T_NGUONKHAC_NSNN', align:'right'},
        {name:'T_NGUONKHAC_VTNN', align:'right'},
        {name:'T_NGUONKHAC_VTTN', align:'right'},
        {name:'T_NGUONKHAC_CL', align:'right'},
        {name:'T_NGUONKHAC', align:'right'},
        {name:'MUC_HUONG', align:'center'},
        {name:'T_BNTT', align:'right'},
        {name:'T_BNCCT', align:'right'},
        {name:'T_BHTT', align:'right'},
        {name:'MA_KHOA', align:'center'},
        {name:'MA_BAC_SI', align:'center'},
        {name:'MA_DICH_VU', align:'left'},
        {name:'NGAY_YL', align:'center'},
        {name:'MA_PTTT', align:'center'},
        {name:'NGUON_CTRA', align:'center'},
        {name:'VET_THUONG_TP', align:'left'},
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

export default XML2Page;