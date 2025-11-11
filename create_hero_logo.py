from PIL import Image

# Open the original logo
logo = Image.open("HD_3000X1688_1x-removebg-preview.png")

# Get dimensions
width, height = logo.size
print(f"Original size: {width}x{height}")

# Find the bounding box of non-transparent pixels
bbox = logo.getbbox()
print(f"Content bounding box: {bbox}")

# Crop to content with minimal padding on sides
left_padding = 20
right_padding = 20
top_padding = 10
bottom_padding = 10

cropped = logo.crop((
    bbox[0] - left_padding,
    bbox[1] - top_padding,
    bbox[2] + right_padding,
    bbox[3] + bottom_padding
))

# Save the new hero logo
cropped.save("hive_hero_logo.png")
print(f"New hero logo saved: {cropped.size}")
print("File: hive_hero_logo.png")
