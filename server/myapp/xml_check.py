


class XmlCheck_4210():
    def __init__(self, xml_content):
        self.xml_content = xml_content
        self.id = self.xml_content['_id']
        
    def xml1_check(self):
        xml1 = self.xml_content['xml1'][0]
        check_obj = {}
        # Set Rule
        if (len(xml1['NGAY_SINH']) != 8):
            check_obj['NGAY_SINH'] = 'Fail'
        c_gioi_tinh = xml1['GIOI_TINH']
        if (c_gioi_tinh != '1' and c_gioi_tinh != '2'):
            check_obj['GIOI_TINH'] = 'Fail'
        # check địa chỉ
        for element in str(xml1['DIA_CHI']).split(","):
            if  str(element).strip() == '':
                check_obj['DIA_CHI'] = 'Fail'
        return check_obj
    
    def xml2_check(self):
        tag_name = 'xml2'
        check_ar = []
        
        if tag_name in self.xml_content:
            xml2 = self.xml_content['xml2']
            for ele in xml2:
                check_obj = {}
                stt = ele['STT']
                if(ele['MA_NHOM'] != '4'):
                    check_obj['MA_NHOM'] = 'Fail'
                if(ele['PHAM_VI'] != '1'):
                    check_obj['PHAM_VI'] = 'Fail'
                # if(ele['TYLE_TT'] != '100'):
                #     check_obj['TYLE_TT'] = 'Fail'
                if check_obj:
                    check_ar.append({"STT": stt, "ERROR_TAG": check_obj})
                    
            return check_ar