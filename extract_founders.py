import fitz  # PyMuPDF
from PIL import Image
import io

# Open the PDF
pdf_path = "HIVE = EKSKLUZIVNO MEDNARODNO POSLOVNO ZDRUŽENJE.pdf"
doc = fitz.open(pdf_path)

# Get the first page
page = doc[0]

# Get page dimensions
rect = page.rect
page_width = rect.width
page_height = rect.height

print(f"Page dimensions: {page_width} x {page_height}")

# Extract images with position info
image_list = page.get_image_info()

print(f"\nFound {len(image_list)} images on page 1\n")

# Find the main founders group photo (largest image in bottom area)
founders_image = None
max_size = 0

for img_info in image_list:
    bbox = img_info['bbox']
    width = img_info['width']
    height = img_info['height']
    size = width * height

    # Look for large image in the bottom half of the page
    if bbox[1] > page_height / 2 and size > max_size:
        max_size = size
        founders_image = img_info
        print(f"Found large image at position: {bbox}")
        print(f"Size: {width} x {height} pixels")

# Extract the founders group image
if founders_image:
    # Get the image using the transform key
    pix = page.get_pixmap(clip=founders_image['bbox'])
    image_bytes = pix.tobytes("png")

    # Save as PNG
    image = Image.open(io.BytesIO(image_bytes))
    image.save("founders_group.png")
    print(f"\nSaved: founders_group.png ({image.width}x{image.height})")

    # Now crop individual founders from the group photo
    # Based on the PDF, there are 4 founders side by side
    founder_width = image.width // 4

    founder_names = ["bosko_prastalo", "mark_kalin", "marko_hozjan", "rok_kragelj"]

    for i, name in enumerate(founder_names):
        left = i * founder_width
        right = (i + 1) * founder_width

        founder_crop = image.crop((left, 0, right, image.height))
        filename = f"{name}.png"
        founder_crop.save(filename)
        print(f"Saved: {filename}")

doc.close()
print("\nFounder extraction complete!")
