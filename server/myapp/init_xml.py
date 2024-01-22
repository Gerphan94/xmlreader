import base64, os.path
from bs4 import BeautifulSoup

class XMLObject():
    def __init__(self, xml_content):
        
        self.xml_content = BeautifulSoup(xml_content, "lxml")
        self.xml1_content = ''
        self.xml2_content = ''
        self.xml3_content = ''
        self.xml4_content = ''
        self.xml5_content = ''
        
        file_hoso_list = self.xml_content.find_all('filehoso')
        for hoso in file_hoso_list:
            loaihs = hoso.find('loaihoso')
            ndfile = hoso.find('noidungfile')
            match (loaihs.text):
                case 'XML1':
                    self.xml1_content = ndfile.text
                case 'XML2':
                    self.xml2_content = ndfile.text
                case 'XML3':
                    self.xml3_content = ndfile.text
                case 'XML4':
                    self.xml4_content = ndfile.text
                case 'XML5':
                    self.xml5_content = ndfile.text
        return
                
            
      
    def xml1(self):
        obj = {}
        if (self.xml1_content != ''):
            data_decode = base64.b64decode(self.xml1_content)
            xml_content = BeautifulSoup(data_decode, "xml")
            tonghop = xml_content.find('TONG_HOP')
            tags = tonghop.find_all()
            
            for tag in tags:
                obj[tag.name] = tag.text
        return obj
    
    def xml2(self):
        ar = []
        if ( self.xml2_content!= '' ):
            data_decode = base64.b64decode(self.xml2_content)
            xml_content = BeautifulSoup(data_decode, "xml")
            dsthuoc = xml_content.find('DSACH_CHI_TIET_THUOC')
            
            chi_tiets = dsthuoc.find_all('CHI_TIET_THUOC')
            for chi_tiet in chi_tiets:
                obj = {}
                tags = chi_tiet.find_all()
                for tag in tags:
                    obj[tag.name] = tag.text
                ar.append(obj)
        return ar
    
    def xml3(self):
        ar = []
        if ( self.xml3_content != '' ):
            data_decode = base64.b64decode(self.xml3_content)
            xml_content = BeautifulSoup(data_decode, "xml")
            dsdichvu = xml_content.find('DSACH_CHI_TIET_DVKT')
            
            chi_tiets = dsdichvu.find_all('CHI_TIET_DVKT')
            for chi_tiet in chi_tiets:
                obj = {}
                tags = chi_tiet.find_all()
                for tag in tags:
                    obj[tag.name] = tag.text
                ar.append(obj)
        return ar
    
    def xml4(self):
        ar = []
        if ( self.xml4_content != '' ):
            data_decode = base64.b64decode(self.xml4_content)
            xml_content = BeautifulSoup(data_decode, "xml")
            dscls = xml_content.find('DSACH_CHI_TIET_CLS')
            
            chi_tiets = dscls.find_all('CHI_TIET_CLS')
            for chi_tiet in chi_tiets:
                obj = {}
                tags = chi_tiet.find_all()
                for tag in tags:
                    obj[tag.name] = tag.text
                ar.append(obj)
        return ar

    def xml5(self):
        ar = []
        if ( self.xml5_content != '' ):
            data_decode = base64.b64decode(self.xml5_content)
            xml_content = BeautifulSoup(data_decode, "xml")
            dsdienbienbenh = xml_content.find('DSACH_CHI_TIET_DIEN_BIEN_BENH')
            
            chi_tiets = dsdienbienbenh.find_all('CHI_TIET_DIEN_BIEN_BENH')
            for chi_tiet in chi_tiets:
                obj = {}
                tags = chi_tiet.find_all()
                for tag in tags:
                    obj[tag.name] = tag.text
                ar.append(obj)
        return ar
    
    
# if __name__=="__main__":
#     xml_path = '../123.xml'
   
#     xml_obj = XMLreader(xml_path)
#     xmls = xml_obj.read_xml()
    
#     for xml in xmls:
#         xml_name = xml['loai_hoso']
#         match (xml_name):
#             case 'XML1':
#                 xml1 = xml_obj.xml1(xml['noi_dung'])
#                 print(xml1)
#             case 'XML2':
#                 xml2 = xml_obj.xml2(xml['noi_dung'])
#                 print(xml2)
        
