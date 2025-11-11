import fitz  # PyMuPDF
from PIL import Image
import io

# Open the PDF
pdf_path = "HIVE = EKSKLUZIVNO MEDNARODNO POSLOVNO ZDRUŽENJE.pdf"
doc = fitz.open(pdf_path)

# Get the first page
page = doc[0]

# Extract images
image_list = page.get_images()

print(f"Found {len(image_list)} images on page 1")

# Extract and save each image
for img_index, img in enumerate(image_list):
    xref = img[0]
    base_image = doc.extract_image(xref)
    image_bytes = base_image["image"]

    # Save the image
    image_filename = f"founder_{img_index + 1}.png"

    # Open image with PIL
    image = Image.open(io.BytesIO(image_bytes))

    # Save as PNG
    image.save(image_filename)
    print(f"Saved: {image_filename}")

doc.close()
print("Image extraction complete!")
