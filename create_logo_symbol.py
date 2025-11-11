from PIL import Image

# Open the logo with text
logo = Image.open("HD_3000X1688_1x-removebg-preview.png")
print(f"Original logo size: {logo.width} x {logo.height}")

# The hexagon symbol is at the top portion of the image
# Let's crop to keep only the hexagon symbol
# Based on the image, the symbol appears to be in the top ~40% of the image

width = logo.width
height = logo.height

# Crop to get just the hexagon symbol (top portion, before the text)
# The text "HIVE" starts around 60% down
crop_height = int(height * 0.45)  # Take top 45% which includes the symbol

# Center crop horizontally to focus on the symbol
left = 0
right = width
top = 0
bottom = crop_height

hexagon_only = logo.crop((left, top, right, bottom))

# Save the hexagon-only logo
hexagon_only.save("hive_symbol_only.png")
print(f"Hexagon symbol saved: {hexagon_only.width} x {hexagon_only.height}")
