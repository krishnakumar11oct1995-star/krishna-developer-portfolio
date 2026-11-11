# Portfolio File Builder
import os, json

def write(filepath, content):
    os.makedirs(os.path.dirname(filepath) if os.path.dirname(filepath) else '.', exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as out:
        out.write(content.strip() + '\n')
    print('Wrote:', filepath)

