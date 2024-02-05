


class XmlCheck_4210():
    def __init__(self, xml_content):
        self.xml_content = xml_content
        self.id = self.xml_content['_id']
        

    def xml1_check(self):
        xml1 = self.xml_content['xml1'][0]
        error_obj = {}
        # Set Rule
        if (len(xml1['NGAY_SINH']) != 8):
            error_obj['NGAY_SINH'] = 'Fail'
        c_gioi_tinh = xml1['GIOI_TINH']
        if (c_gioi_tinh != '1' and c_gioi_tinh != '2'):
            error_obj['GIOI_TINH'] = 'Fail'
        # check địa chỉ
        for element in str(xml1['DIA_CHI']).split(","):
            if  str(element).strip() == '':
                
                error_obj['DIA_CHI'] = 'Fail'
        return error_obj