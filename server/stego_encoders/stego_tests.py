import skimage.io as skio
import skimage.color as skc
import matplotlib.pyplot as plt
import numpy as np
from skimage.transform import rescale as rescale
import stego_functions as sf

lamp = skio.imread('lamp.JPG')
#lampg = skc.rgb2gray(lamp)
#
house = skio.imread('house.JPG')
#houseg = skc.rgb2gray(house)
#
#sf.saveEncodedGray(lampg, houseg, 'newhouse')
#new_house = skio.imread('newhouse.png')
#
#sf.saveDecodedGray(new_house, "Hidden_image")

colorhouse = skio.imread('colorhouse.png')
sf.saveDecodedColor(colorhouse, 'colorlamp')
#sf.saveEncodedColor(house, lamp, 'colorhouse')
