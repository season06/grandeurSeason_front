import os
import json
from datetime import datetime

tag = 'photograph'

root_path = 'C:\\Users\\HP AY111TX\\Pictures\\Phone\\photo\\' + tag

tag_dict = {
    'sunset': 1,
    'tree': 2,
    'waterfall': 3,
    'mountain': 4,
    'sky': 5,
    'sea': 6,
    'photograph': 7
}

image_json = {
    'name': '',
    'image_url': '',
    'type': '',
    'location': '',
    'tag': 3
}

image_json_arr = []
def main():
    my_file = os.listdir(root_path)
    for _file in my_file:
        file_path = f'{root_path}\\{_file}'

        create_unix = os.path.getctime(file_path)
        create_time = datetime.fromtimestamp(create_unix)
        ctime = create_time.isoformat()

        image_json = {
            'name': _file,
            'image_url': file_path,
            'type': _file.split('.')[1],
            'location': '',
            'tag': tag_dict[tag],
            'create_time': ctime.split('.')[0] + 'Z'
        }
        image_json_arr.append(image_json)
    
    image_json = json.dumps(image_json_arr)
    fp = open('my_file.json', 'w')
    fp.write(str(image_json))
    fp.close()

if __name__ == '__main__':
    main()
