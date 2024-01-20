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
        print(xml_content)
        tonghop = xml_content.find('TONG_HOP')
        
        tags = tonghop.find_all()
        obj = {}
        for tag in tags:
            obj[tag.name] = tag.text
        return obj
        
    
if __name__=="__main__":
    xml_path = '../123.xml'
   
    xml_obj = XMLreader(xml_path)
    xmls = xml_obj.read_xml()
    for xml in xmls:
        match xml['loai_hoso']:
            case 'XML1':
                xml1_content = xml_obj.xml1(xml['noi_dung'])
                break
            
            case _:
                break
