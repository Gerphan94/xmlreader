import base64, os.path
from bs4 import BeautifulSoup

class XMLObject():
    def __init__(self, xml_content):
        self.xml_table = [
            {'name': 'XML1', 'tag_name_1':'', 'tag_name_2': 'TONG_HOP', 'content':''},
            {'name': 'XML2', 'tag_name_1':'DSACH_CHI_TIET_THUOC', 'tag_name_2':'CHI_TIET_THUOC', 'content':''},
            {'name': 'XML3', 'tag_name_1':'DSACH_CHI_TIET_DVKT', 'tag_name_2':'CHI_TIET_DVKT', 'content':''},
            {'name': 'XML4', 'tag_name_1':'DSACH_CHI_TIET_CLS', 'tag_name_2':'CHI_TIET_CLS', 'content':''},
            {'name': 'XML5', 'tag_name_1':'DSACH_CHI_TIET_DIEN_BIEN_BENH', 'tag_name_2':'CHI_TIET_DIEN_BIEN_BENH', 'content':''},
            {'name': 'XML6', 'tag_name_1':'', 'tag_name_2': '', 'content':''},
            {'name': 'XML7', 'tag_name_1':'', 'tag_name_2':'CHI_TIEU_DU_LIEU_GIAY_RA_VIEN', 'content':''},
            {'name': 'XML8', 'tag_name_1':'', 'tag_name_2': 'CHI_TIEU_DU_LIEU_TOM_TAT_HO_SO_BENH_AN', 'content':''},
            {'name': 'XML9', 'tag_name_1':'CHI_TIEU_DU_LIEU_GIAY_CHUNG_SINH', 'tag_name_2': 'DSACH_GIAYCHUNGSINH', 'content':''},
            {'name': 'XML10', 'tag_name_1':'', 'tag_name_2': 'CHI_TIEU_DU_LIEU_GIAY_NGHI_DUONG_THAI', 'content':''},
            {'name': 'XML11', 'tag_name_1':'', 'tag_name_2': 'CHI_TIEU_DU_LIEU_GIAY_CHUNG_NHAN_NGHI_VIEC_HUONG_BAO_HIEM_XA_HOI', 'content':''}
        ]
        self.xml_content = BeautifulSoup(xml_content, "lxml")
        file_hoso_list = self.xml_content.find_all('filehoso')
        for hoso in file_hoso_list:
            loaihs = hoso.find('loaihoso')
            ndfile = hoso.find('noidungfile')
            for ele in self.xml_table:
                if (ele['name'] == loaihs.text):
                    ele['content'] = ndfile.text

        return
    
    def xml_detail(self, xmlType):
        xml =  self.xml_table[xmlType-1]
        xml_content = xml['content']
        xml_tag_1 = xml['tag_name_1']
        xml_tag_2 = xml['tag_name_2']
        result = []
        
        if (xml_content != ''):
            data_decode = base64.b64decode(xml_content)
            BSdata = BeautifulSoup(data_decode, "xml")
            if (xml_tag_1 == ''):
                obj = {}
                detail = BSdata.find(xml_tag_2)
                tags = detail.find_all()
                for tag in tags:
                    obj[tag.name] = tag.text
                result.append(obj)
            else:
                detail_list = BSdata.find(xml_tag_1)
                details = detail_list.find_all(xml_tag_2)
                for detail in details:
                    obj = {}
                    tags = detail.find_all()
                    for tag in tags:
                        obj[tag.name] = tag.text
                    result.append(obj)
            return result
   
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
  
    def xml8(self):
        ar = []
        if ( self.xml5_content != '' ):
            data_decode = base64.b64decode(self.xml5_content)
            xml_content = BeautifulSoup(data_decode, "xml")
            dsdienbienbenh = xml_content.find('CHI_TIEU_DU_LIEU_GIAY_CHUNG_SINH')

            chi_tiets = dsdienbienbenh.find_all('DSACH_GIAYCHUNGSINH')
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
        
