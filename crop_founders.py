from PIL import Image

# Open the founders group image (this is the largest one extracted)
image = Image.open("founder_17.png")
print(f"Original image size: {image.width} x {image.height}")

# The image has 4 founders side by side
# Let's crop them individually
founder_width = image.width // 4

founder_names = ["bosko_prastalo", "mark_kalin", "marko_hozjan", "rok_kragelj"]

for i, name in enumerate(founder_names):
    left = i * founder_width
    right = (i + 1) * founder_width

    founder_crop = image.crop((left, 0, right, image.height))
    filename = f"{name}.png"
    founder_crop.save(filename)
    print(f"Saved: {filename} ({founder_crop.width}x{founder_crop.height})")

print("\nFounder cropping complete!")
