import React from "react";


function XML3Page({ xmlType, data }) {

    const HEAD_TB_4210 = [
        { name: 'STT', align: 'center' },
        { name: 'MA_DICH_VU', align: 'left' },
        { name: 'MA_VAT_TU', align: 'left' },
        { name: 'MA_NHOM', align: 'center' },
        { name: 'GOI_VTYT', align: 'center' },
        { name: 'TEN_VAT_TU', align: 'left' },
        { name: 'TEN_DICH_VU', align: 'left' },
        { name: 'DON_VI_TINH', align: 'center' },
        { name: 'PHAM_VI', align: 'center' },
        { name: 'SO_LUONG', align: 'right' },
        { name: 'DON_GIA', align: 'lrighteft' },
        { name: 'TT_THAU', align: 'left' },
        { name: 'TYLE_TT', align: 'center' },
        { name: 'THANH_TIEN', align: 'right' },
        { name: 'T_TRANTT', align: 'right' },
        { name: 'MUC_HUONG', align: 'center' },
        { name: 'T_NGUONKHAC', align: 'right' },
        { name: 'T_BNTT', align: 'right' },
        { name: 'T_BHTT', align: 'right' },
        { name: 'T_BNCCT', align: 'right' },
        { name: 'T_NGOAlDS', align: 'right' },
        { name: 'MA_KHOA', align: 'center' },
        { name: 'MA_GIUONG', align: 'center' },
        { name: 'MA_BAC_SI', align: 'left' },
        { name: 'MA_BENH', align: 'left' },
        { name: 'NGAY_YL', align: 'center' },
        { name: 'NGAY_KQ', align: 'center' },
        { name: 'MA_PTTT', align: 'center' }
    ];

    const HEAD_TB_130 = [
      
        { name: 'STT', align: 'left' },
        { name: 'MA_DICH_VU', align: 'left' },
        { name: 'MA_PTTT_QT', align: 'left' },
        { name: 'MA_VAT_TU', align: 'left' },
        { name: 'MA_NHOM', align: 'left' },
        { name: 'GOI_VTYT', align: 'left' },
        { name: 'TEN_VAT_TU', align: 'left' },
        { name: 'TEN_DICH_VU', align: 'left' },
        { name: 'MA_XANG_DAU', align: 'left' },
        { name: 'DON_VI_TINH', align: 'left' },
        { name: 'PHAM_VI', align: 'left' },
        { name: 'SO_LUONG', align: 'left' },
        { name: 'DON_GIA_BV', align: 'left' },
        { name: 'DON_GIA_BH', align: 'left' },
        { name: 'TT_THAU', align: 'left' },
        { name: 'TYLE_TT_DV', align: 'left' },
        { name: 'TYLE_TT_BH', align: 'left' },
        { name: 'THANH_TIEN_BV', align: 'left' },
        { name: 'THANH_TIEN_BH', align: 'left' },
        { name: 'T_TRANTT', align: 'left' },
        { name: 'MUC_HUONG', align: 'left' },
        { name: 'T_NGUONKHAC_NSNN', align: 'left' },
        { name: 'T_NGUONKHAC_VTNN', align: 'left' },
        { name: 'T_NGUONKHAC_VTTN', align: 'left' },
        { name: 'T_NGUONKHAC_CL', align: 'left' },
        { name: 'T_NGUONKHAC', align: 'left' },
        { name: 'T_BNTT', align: 'left' },
        { name: 'T_BNCCT', align: 'left' },
        { name: 'T_BHTT', align: 'left' },
        { name: 'MA_KHOA', align: 'left' },
        { name: 'MA_GIUONG', align: 'left' },
        { name: 'MA_BAC_SI', align: 'left' },
        { name: 'NGUOI_THUC_HIEN', align: 'left' },
        { name: 'MA_BENH', align: 'left' },
        { name: 'MA_BENH_YHCT', align: 'left' },
        { name: 'NGAY_YL', align: 'left' },
        { name: 'NGAY_TH_YL', align: 'left' },
        { name: 'NGAY_KQ', align: 'left' },
        { name: 'MA_PTTT', align: 'left' },
        { name: 'VET_THUONG_TP', align: 'left' },
        { name: 'PP_VO_CAM', align: 'left' },
        { name: 'VI_TRI_TH_DVKT', align: 'left' },
        { name: 'MA_MAY', align: 'left' },
        { name: 'MA_HIEU_SP', align: 'left' },
        { name: 'TAI_SU_DUNG', align: 'left' },
        { name: 'DU_PHONG', align: 'left' }

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

            <div className="relative overflow-x-auto shadow-md w-full h-full">
                <table className="w-full text-sm text-gray-500 ">
                    <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-blue-200">
                        <tr>
                            {head_tb.map((header, index) => (
                                <th key={index} cscope="col" className="px-6 py-3">{header.name}</th>
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

export default XML3Page;