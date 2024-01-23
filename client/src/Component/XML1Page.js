import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";


function XML1Page({ xmlType, data, setMaLK }) {

    const HEAD_TB_4210 = [
        { name: 'STT', align: 'center' },
        { name: 'MA_BN', align: 'right' },
        { name: 'HO_TEN', align: 'left' },
        { name: 'NGAY_SINH', align: 'center' },
        { name: 'GIOI_TINH', align: 'center' },
        { name: 'DIA_CHI', align: 'left' },
        { name: 'MA_THE', align: 'center' },
        { name: 'MA_DKBD', align: 'center' },
        { name: 'GT_THE_TU', align: 'center' },
        { name: 'GT.THE_DEN', align: 'center' },
        { name: 'MIEN_CUNG_CT', align: 'center' },
        { name: 'TEN_BENH', align: 'left' },
        { name: 'MA_BENH', align: 'left' },
        { name: 'MA_BENHKHAC', align: 'left' },
        { name: 'MA_LYDO_VVIEN', align: 'center' },
        { name: 'MA_NOI_CHUYEN', align: 'center' },
        { name: 'MA_TAI_NAN', align: 'center' },
        { name: 'NGAY_VAO', align: 'center' },
        { name: 'NGAY_RA', align: 'center' },
        { name: 'SO_NGAY_DTRI', align: 'center' },
        { name: 'KET_QUA_DTRI', align: 'center' },
        { name: 'TINH_TRANG_RV', align: 'center' },
        { name: 'NGAY_TTOAN', align: 'center' },
        { name: 'T_THUOC', align: 'right' },
        { name: 'T_VTYT', align: 'right' },
        { name: 'T_TONGCHI', align: 'right' },
        { name: 'T_BNTT', align: 'right' },
        { name: 'T_BNCCT', align: 'right' },
        { name: 'T_BHTT', align: 'right' },
        { name: 'T_NGUONKHAC', align: 'right' },
        { name: 'T_NGOAIDS', align: 'right' },
        { name: 'NAM_QT', align: 'center' },
        { name: 'THANG_QT', align: 'center' },
        { name: 'MA_LOAI_KCB', align: 'center' },
        { name: 'MA_KHOA', align: 'center' },
        { name: 'MA_CSKCB', align: 'center' },
        { name: 'MA_KHUVUC', align: 'center' },
        { name: 'MA_PTTT_QT', align: 'center' },
        { name: 'CAN_NANG', align: 'center' }
    ];
    const HEAD_TB_130 = [
        { name: 'STT', align: 'left' },
        { name: 'MA_BN', align: 'left' },
        { name: 'HO_TEN', align: 'left' },
        { name: 'SO_CCCD', align: 'left' },
        { name: 'NGAY_SINH', align: 'left' },
        { name: 'GIOI_TINH', align: 'left' },
        { name: 'MA_QUOCTICH', align: 'left' },
        { name: 'MA_DANTOC', align: 'left' },
        { name: 'MA_NGHE_NGHIEP', align: 'left' },
        { name: 'DIA_CHI', align: 'left' },
        { name: 'MATINH_CU_TRU', align: 'left' },
        { name: 'MAHUYEN_CU_TRU', align: 'left' },
        { name: 'MAXA_CU_TRU', align: 'left' },
        { name: 'DIEN_THOAI', align: 'left' },
        { name: 'MA_THE_BHYT', align: 'left' },
        { name: 'MA_DKBD', align: 'left' },
        { name: 'GT_THE_TU', align: 'left' },
        { name: 'GT_THE_DEN', align: 'left' },
        { name: 'NGAY_MIEN_CCT', align: 'left' },
        { name: 'LY_DO_VV', align: 'left' },
        { name: 'LY_DO_VNT', align: 'left' },
        { name: 'MA_LY_DO_VNT', align: 'left' },
        { name: 'CHAN_DOAN_VAO', align: 'left' },
        { name: 'CHAN_DOAN_RV', align: 'left' },
        { name: 'MA_BENH_CHINH', align: 'left' },
        { name: 'MA_BENH_KT', align: 'left' },
        { name: 'MA_BENH_YHCT', align: 'left' },
        { name: 'MA_PTTT_QT', align: 'left' },
        { name: 'MA_DOITUONG_KCB', align: 'left' },
        { name: 'MA_NOI_DI', align: 'left' },
        { name: 'MA_NOI_DEN', align: 'left' },
        { name: 'MA_TAI_NAN', align: 'left' },
        { name: 'NGAY_VAO', align: 'left' },
        { name: 'NGAY_VAO_NOI_TRU', align: 'left' },
        { name: 'NGAY_RA', align: 'left' },
        { name: 'GIAY_CHUYEN_TUY EN', align: 'left' },
        { name: 'SO_NGAY_DTRI', align: 'left' },
        { name: 'PP_DIEU_TRI', align: 'left' },
        { name: 'KET_QUA_DTRI', align: 'left' },
        { name: 'MA_LOAI_RV', align: 'left' },
        { name: 'GHI_CHU', align: 'left' },
        { name: 'NGAY_TTOAN', align: 'left' },
        { name: 'T_THUOC', align: 'left' },
        { name: 'T_VTYT', align: 'left' },
        { name: 'T_TONGCHI_BV', align: 'left' },
        { name: 'T_TONGCHI_BH', align: 'left' },
        { name: 'T_BNTT', align: 'left' },
        { name: 'T_BNCCT', align: 'left' },
        { name: 'T_BHTT', align: 'left' },
        { name: 'T_NGUONKHAC', align: 'left' },
        { name: 'T_BHTT_GDV', align: 'left' },
        { name: 'NAM_QT', align: 'left' },
        { name: 'THANG_QT', align: 'left' },
        { name: 'MA_LOAI_KCB', align: 'left' },
        { name: 'MA_KHOA', align: 'left' },
        { name: 'MA_CSKCB', align: 'left' },
        { name: 'MA_KHUVUC', align: 'left' },
        { name: 'CAN_NANG', align: 'left' },
        { name: 'CAN_NANG_CON', align: 'left' },
        { name: 'NAM_NAM_LIEN_TUC', align: 'left' },
        { name: 'NGAY_TAI_KHAM', align: 'left' },
        { name: 'MA_HSBA', align: 'left' },
        { name: 'MA_TTDV', align: 'left' },
        { name: 'DU_PHONG', align: 'left' }
    ];

    let head_tb;
    if (xmlType === '4210') {
        head_tb = HEAD_TB_4210;
    }
    else {
        head_tb = HEAD_TB_130;
    }


    
    const [sortedData, setSortedData] = useState([])


    useEffect(() => {
        // Assuming 'STT' is a numeric property, you can sort the data like this:
        const sorted = [...data].sort((a, b) => {
            // Convert 'STT' values to numbers for proper numeric sorting
            const sttA = parseFloat(a.STT);
            const sttB = parseFloat(b.STT);

            return sttA - sttB;
        });

        setSortedData(sorted);
    }, [data]);

    const [selectedRow, setSelectedRow] = useState(-1);
    const handleClick = (index, ma_lk) => {
        setMaLK(ma_lk);
        setSelectedRow(index);
    }

    return (
        <>
            <div class="relative overflow-x-auto shadow-md w-full h-full">
                <table class=" w-full  text-sm text-left rtl:text-right text-gray-500 ">
                    <thead class="sticky top-0 text-md text-gray-700 uppercase bg-blue-200">
                        <tr>
                            <th cscope="col" class="px-6 py-2"></th>
                            {head_tb.map((header, index) => (
                                <th key={index} cscope="col" class="px-6 py-2">{header.name}</th>
                            ))}
                        </tr>
                    </thead>
                    {/* Add the rest of your table body here */}
                    <tbody>
                        {sortedData.map((item, rowIndex) => (
                            <tr
                                key={rowIndex}
                                onClick={() => handleClick(rowIndex, item['MA_LK'])}
                                className={` border-b  dark:border-gray-700 hover:bg-blue-100 cursor-default ${selectedRow === rowIndex ? 'bg-blue-100' : 'bg-white'}`}
                            >
                                <td className="p-1 text-green-500 flex justify-center">
                                    <FaCheck />
                                </td>
                                {head_tb.map((header, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={`px-3 py-1 whitespace-nowrap  ${header.align === 'center' ? 'text-center' :
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


        </>
    )

}

export default XML1Page;