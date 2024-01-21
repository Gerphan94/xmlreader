import base64, os.path
from bs4 import BeautifulSoup

class XMLreader():
    def __init__(self, path):
        self.path = path

    def read_xml(self):
        with open(self.path, 'r') as f:
            data = f.read()

        xml_content = BeautifulSoup(data, "lxml")
        file_hoso_list = xml_content.find_all('filehoso')
        obj = []
        for hoso in file_hoso_list:
            loaihs = hoso.find('loaihoso')
            ndfile = hoso.find('noidungfile')
            obj.append({
                'loai_hoso': loaihs.text,
                'noi_dung': ndfile.text
            })
        return obj
    
    def xml1(self, ndfile):
        data_decode = base64.b64decode(ndfile)
        xml_content = BeautifulSoup(data_decode, "xml")
        tonghop = xml_content.find('TONG_HOP')
        tags = tonghop.find_all()
        obj = {}
        for tag in tags:
            obj[tag.name] = tag.text
        return obj
    
    def xml2(self, ndfile):
        print("check2")
        data_decode = base64.b64decode(ndfile)
        xml_content = BeautifulSoup(data_decode, "xml")
        dsthuoc = xml_content.find('DSACH_CHI_TIET_THUOC')
        ar = []
        chi_tiets = dsthuoc.find_all('CHI_TIET_THUOC')
        print(chi_tiets)
        for chi_tiet in chi_tiets:
            obj = {}
            tags = chi_tiet.find_all()
            for tag in tags:
                obj[tag.name] = tag.text
            ar.append(obj)
        return ar
    
    
        
    
if __name__=="__main__":
    xml_path = '../123.xml'
   
    xml_obj = XMLreader(xml_path)
    xmls = xml_obj.read_xml()
    
    for xml in xmls:
        xml_name = xml['loai_hoso']
        match (xml_name):
            case 'XML1':
                xml1 = xml_obj.xml1(xml['noi_dung'])
                print(xml1)
            case 'XML2':
                xml2 = xml_obj.xml2(xml['noi_dung'])
                print(xml2)
        
