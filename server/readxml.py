import base64, os.path
from bs4 import BeautifulSoup


xml_path = 'abc.xml'



with open(xml_path, 'r') as f:
    data = f.read()

xml_content = BeautifulSoup(data, "lxml")
file_hoso_list = xml_content.find_all('filehoso')
for hoso in file_hoso_list:
    loaihs = hoso.find('loaihoso')
    ndfile = hoso.find('noidungfile')
    data_decode = base64.b64decode(ndfile.text)
    print(data_decode)
