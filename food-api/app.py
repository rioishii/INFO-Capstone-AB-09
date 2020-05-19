import boto3 as boto3
import flask
import pandas as pd
import tensorflow as tf
import keras
from keras.preprocessing.image import load_img, img_to_array
from skimage import io
from PIL import Image
import numpy as np
import io
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello World!!!!'


global model

client_s3 = boto3.client("s3")
model = client_s3.download_file("model-info-ray",'weights2.epoch-13-val_loss-0.82.hdf5',
                                     "/tmp/weights2.epoch-13-val_loss-0.82.hdf5")

#model = tf.keras.models.load_model('/Users/rayzhang/Downloads/weights2.epoch-13-val_loss-0.82.hdf5')

food_list = {'apple_pie': 0, 'baby_back_ribs': 1, 'baklava': 2, 'beef_carpaccio': 3, 'beef_tartare': 4, 'beet_salad': 5,
             'beignets': 6, 'bibimbap': 7, 'bread_pudding': 8, 'breakfast_burrito': 9, 'bruschetta': 10,
             'caesar_salad': 11, 'cannoli': 12, 'caprese_salad': 13, 'carrot_cake': 14, 'ceviche': 15, 'cheesecake': 16,
             'cheese_plate': 17, 'chicken_curry': 18, 'chicken_quesadilla': 19, 'chicken_wings': 20,
             'chocolate_cake': 21, 'chocolate_mousse': 22, 'churros': 23, 'clam_chowder': 24, 'club_sandwich': 25,
             'crab_cakes': 26, 'creme_brulee': 27, 'croque_madame': 28, 'cup_cakes': 29, 'deviled_eggs': 30,
             'donuts': 31, 'dumplings': 32, 'edamame': 33, 'eggs_benedict': 34, 'escargots': 35, 'falafel': 36,
             'filet_mignon': 37, 'fish_and_chips': 38, 'foie_gras': 39, 'french_fries': 40, 'french_onion_soup': 41,
             'french_toast': 42, 'fried_calamari': 43, 'fried_rice': 44, 'frozen_yogurt': 45, 'garlic_bread': 46,
             'gnocchi': 47, 'greek_salad': 48, 'grilled_cheese_sandwich': 49, 'grilled_salmon': 50, 'guacamole': 51,
             'gyoza': 52, 'hamburger': 53, 'hot_and_sour_soup': 54, 'hot_dog': 55, 'huevos_rancheros': 56, 'hummus': 57,
             'ice_cream': 58, 'lasagna': 59, 'lobster_bisque': 60, 'lobster_roll_sandwich': 61,
             'macaroni_and_cheese': 62, 'macarons': 63, 'miso_soup': 64, 'mussels': 65, 'nachos': 66, 'omelette': 67,
             'onion_rings': 68, 'oysters': 69, 'pad_thai': 70, 'paella': 71, 'pancakes': 72, 'panna_cotta': 73,
             'peking_duck': 74, 'pho': 75, 'pizza': 76, 'pork_chop': 77, 'poutine': 78, 'prime_rib': 79,
             'pulled_pork_sandwich': 80, 'ramen': 81, 'ravioli': 82, 'red_velvet_cake': 83, 'risotto': 84, 'samosa': 85,
             'sashimi': 86, 'scallops': 87, 'seaweed_salad': 88, 'shrimp_and_grits': 89, 'spaghetti_bolognese': 90,
             'spaghetti_carbonara': 91, 'spring_rolls': 92, 'steak': 93, 'strawberry_shortcake': 94, 'sushi': 95,
             'tacos': 96, 'takoyaki': 97, 'tiramisu': 98, 'tuna_tartare': 99, 'waffles': 100}


food_list = dict((y,x) for x,y in food_list.items())


new_dict = {'apple_pie': 2.9, 'baby_back_ribs': 18.1, 'baklava': 4.3, 'beef_carpaccio': 32.0, 'beef_tartare': 33.0, 'beet_salad': 2.0,
             'beignets': 7.8, 'bibimbap': 50, 'bread_pudding': 10.2, 'breakfast_burrito': 45, 'bruschetta': 10,
             'caesar_salad': 2.1, 'cannoli': 6.8, 'caprese_salad': 4.2, 'carrot_cake': 8.0, 'ceviche': 15, 'cheesecake': 18.9,
             'cheese_plate': 3.0, 'chicken_curry': 20.2, 'chicken_quesadilla': 19.2, 'chicken_wings': 20.2,
             'chocolate_cake': 15.2, 'chocolate_mousse': 22.3, 'churros': 9.3, 'clam_chowder': 9.4, 'club_sandwich': 17.2,
             'crab_cakes': 20.4, 'creme_brulee': 8.4, 'croque_madame': 8.3, 'cup_cakes': 9.5, 'deviled_eggs': 6.2,
             'donuts': 8.4, 'dumplings': 12.5, 'edamame': 2.1, 'eggs_benedict': 8.4, 'escargots': 5.6, 'falafel': 5.2,
             'filet_mignon': 37.2, 'fish_and_chips': 14.5, 'foie_gras': 6.2, 'french_fries': 7.5, 'french_onion_soup': 9.3,
             'french_toast': 11.2, 'fried_calamari': 15.3, 'fried_rice': 9.4, 'frozen_yogurt': 4.4, 'garlic_bread': 5.5,
             'gnocchi': 4.4, 'greek_salad': 1.6, 'grilled_cheese_sandwich': 4.3, 'grilled_salmon': 14.2, 'guacamole': 2.4,
             'gyoza': 14.2, 'hamburger': 30.2, 'hot_and_sour_soup': 6.7, 'hot_dog': 4.3, 'huevos_rancheros': 15.2, 'hummus': 2.4,
             'ice_cream': 6.2, 'lasagna': 14.5, 'lobster_bisque': 20.4, 'lobster_roll_sandwich': 22.4,
             'macaroni_and_cheese': 8.3, 'macarons': 4.3, 'miso_soup': 1.4, 'mussels': 6.4, 'nachos': 5.7, 'omelette': 8.4,
             'onion_rings': 5.2, 'oysters': 8.2, 'pad_thai': 9.2, 'paella': 4.5, 'pancakes': 6.2, 'panna_cotta': 4.2,
             'peking_duck': 34.2, 'pho': 14.2, 'pizza': 20.4, 'pork_chop': 12.3, 'poutine': 2.3, 'prime_rib': 30.1,
             'pulled_pork_sandwich': 10.1, 'ramen': 4.2, 'ravioli': 4.4, 'red_velvet_cake': 6.2, 'risotto': 4.1, 'samosa': 5.7,
             'sashimi': 4.2, 'scallops': 4.1, 'seaweed_salad': 1.4, 'shrimp_and_grits': 8.4, 'spaghetti_bolognese': 3.2,
             'spaghetti_carbonara': 3.6, 'spring_rolls': 3.8, 'steak': 25.0, 'strawberry_shortcake': 3.8, 'sushi': 4.8,
             'tacos': 8.1, 'takoyaki': 6.9, 'tiramisu': 4.2, 'tuna_tartare': 7.4, 'waffles': 4.2}


new_dict = dict((x, round(y/2.2, 2)) for x,y in new_dict.items())

@app.route('/predict', methods=["GET", "POST"])
def predict_food():
    response = {"success": False}
    if flask.request.method == "POST":
        if flask.request.files.get("image"):
            image = flask.request.files["image"].read()
            image = Image.open(io.BytesIO(image))
            prediction, prob = predict(image)
            response['prediction'] = prediction
            response['probability'] = prob
            response['emissions'] = new_dict[prediction]
            response["success"] = True
    return flask.jsonify(response)


def predict(img):
    img = img.resize((299,299))
    img = img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img /= 255.
    img_pred = model.predict(img)
    top_pred = np.argmax(img_pred, axis=1)[0]
    prob = str(round(max(img_pred)[top_pred] * 100, 2)) + '% probability'
    prediction = food_list[top_pred]
    return prediction, prob


if __name__ == '__main__':
    app.run()
