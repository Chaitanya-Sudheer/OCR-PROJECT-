from paddleocr import PaddleOCR, draw_ocr
from PIL import Image
import numpy as np

# Initialize OCR for English
ocr = PaddleOCR(use_angle_cls=True, lang='en')
img_path = r'C:\Users\Mohammed Hisham\Downloads\drug1.jpg'
result = ocr.ocr(img_path, cls=True)

# Display text results
for line in result[0]:
    print(line)

# Optional: Save visual result with text boxes
image = Image.open(img_path).convert('RGB')
boxes = [line[0] for line in result[0]]
txts = [line[1][0] for line in result[0]]
im_show = draw_ocr(np.array(image), boxes, txts, None)

# Convert the result back to a PIL Image
im_show_pil = Image.fromarray(im_show)

# Save the image
im_show_pil.save('result.jpg')
