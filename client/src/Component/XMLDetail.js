import React from "react";


function XMLDetail({ xml_table, xml_data }) {

    let HEAD_TB;
    let data;


    const XML2_HEAD_TB = [
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
    ];
    const XML3_HEAD_TB = [
        { name: 'STT', align: 'left' },
        { name: 'MA_DICH_VU', align: 'left' },
        { name: 'MA_VAT_TU', align: 'left' },
        { name: 'MA_NHOM', align: 'left' },
        { name: 'GOI_VTYT', align: 'left' },
        { name: 'TEN_VAT_TU', align: 'left' },
        { name: 'TEN_DICH_VU', align: 'left' },
        { name: 'DON_VI_TINH', align: 'left' },
        { name: 'PHAM_VI', align: 'left' },
        { name: 'SO_LUONG', align: 'left' },
        { name: 'DON_GIA', align: 'left' },
        { name: 'TT_THAU', align: 'left' },
        { name: 'TYLE_TT', align: 'left' },
        { name: 'THANH_TIEN', align: 'left' },
        { name: 'T_TRANTT', align: 'left' },
        { name: 'MUC_HUONG', align: 'left' },
        { name: 'T_NGUONKHAC', align: 'left' },
        { name: 'T_BNTT', align: 'left' },
        { name: 'T_BHTT', align: 'left' },
        { name: 'T_BNCCT', align: 'left' },
        { name: 'T_NGOAlDS', align: 'left' },
        { name: 'MA_KHOA', align: 'left' },
        { name: 'MA_GIUONG', align: 'left' },
        { name: 'MA_BAC_SI', align: 'left' },
        { name: 'MA_BENH', align: 'left' },
        { name: 'NGAY_YL', align: 'left' },
        { name: 'NGAY_KQ', align: 'left' },
        { name: 'MA_PTTT', align: 'left' }
    ]

    const XML4_HEAD_TB = [
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

    const XML5_HEAD_TB = [
        { name: 'STT', align: 'left' },
        { name: 'DIEN_BIEN', align: 'left' },
        { name: 'HOI_CHAN', align: 'left' },
        { name: 'PHAU_THUAT', align: 'left' },
        { name: 'NGAY_YL', align: 'left' }

    ]

    switch (xml_table) {
        case 'xml2':
            HEAD_TB = XML2_HEAD_TB;
            data = xml_data['xml2'];
            break
        case 'xml3':
            HEAD_TB = XML3_HEAD_TB;
            data = xml_data['xml3'];
            break
        case 'xml4':
            HEAD_TB = XML4_HEAD_TB;
            data = xml_data['xml4'];
            break
        case 'xml5':
            HEAD_TB = XML5_HEAD_TB;
            data = xml_data['xml5'];
            break
        default:
            break

    }



    return (
        <>
            <div className="">
                
                <div class="relative overflow-x-auto shadow-md  w-full h-full">
                    <table class="w-full text-sm text-gray-500 ">
                        <thead class="text-xs text-gray-700 uppercase bg-blue-200">
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

export default XMLDetail;