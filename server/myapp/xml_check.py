


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
        if (xml1['GIOI_TINH'] == '1'):
            error_obj['GIOI_TINH'] = 'Giới tính =  2'
            
        return error_obj