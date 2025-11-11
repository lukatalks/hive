from PIL import Image, ImageDraw

# Open the original logo
logo = Image.open("HD_3000X1688_1x-removebg-preview.png")

# Get dimensions
width, height = logo.size
print(f"Original size: {width}x{height}")

# Create a new image with rounded corners
rounded = Image.new('RGBA', (width, height), (0, 0, 0, 0))

# Create a rounded rectangle mask
mask = Image.new('L', (width, height), 0)
draw = ImageDraw.Draw(mask)

# Corner radius (adjust for sophistication)
radius = 40

# Draw rounded rectangle
draw.rounded_rectangle([(0, 0), (width, height)], radius=radius, fill=255)

# Apply the mask to the original logo
rounded.paste(logo, (0, 0), mask)

# Save the rounded logo
rounded.save("hive_logo_rounded.png")
print(f"Rounded logo saved: hive_logo_rounded.png")
print(f"Corner radius: {radius}px")
