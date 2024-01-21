import React, { useState } from "react";


function XML1Page( { data, setMaLK }  ) {

    const HEAD_TB = [
        { name: 'STT', align: 'center' },
        { name: 'MA_BN', align: 'center' },
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
        { name: 'MA_LYDO_VVIEN', align: 'left' },
        { name: 'MA_NOI_CHUYEN', align: 'left' },
        { name: 'MA_TAI_NAN', align: 'left' },
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
        { name: 'T_NGUONKHAC', align: 'left' },
        { name: 'T_NGOAIDS', align: 'left' },
        { name: 'NAM_QT', align: 'center' },
        { name: 'THANG_QT', align: 'center' },
        { name: 'MA_LOAI_KCB', align: 'center' },
        { name: 'MA_KHOA', align: 'left' },
        { name: 'MA_CSKCB', align: 'left' },
        { name: 'MA_KHUVUC', align: 'left' },
        { name: 'MA_PTTT_QT', align: 'center' },
        { name: 'CAN_NANG', align: 'right' }
    ]
    
    const [selectedRow, setSelectedRow] = useState(-1);
    const handleClick = (index, ma_lk) => {
        setMaLK(ma_lk);
        setSelectedRow(index);
    }

    return (
        <>
            <div className="mt-1">
            <div className="text-left font-bold py-2">XML1</div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-[300px]">
                    <table class="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                    onClick={() => handleClick(rowIndex,  item['MA_LK'] )} 
                                    className={` border-b  dark:border-gray-700 hover:bg-blue-100 cursor-default ${ selectedRow === rowIndex ? 'bg-blue-100': 'bg-white' }`}>
                                    {HEAD_TB.map((header, colIndex) => (
                                        <td
                                        key={colIndex}
                                        className={`px-6 py-1 whitespace-nowrap  ${
                                          header.align === 'center' ? 'text-center' :
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

export default XML1Page;