import cakeBithdayChocoalte from '../images/cake_birthday_chocolate.jpeg'
import cakeHeartVanillaChocolate from '../images/cake_heart_chocolate.jpg'
import cakeVanillaWedding from '../images/cake_vanilla_wedding.jpg'
import breadBucket from '../images/breadsBucket.jpg'
import muffinsSet from '../images/muffins.jpg'
import donnutsSet from '../images/donuts.jpg'

class bakeryProduct{
    constructor(name,price,calories,ingredients,image,time){
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.ingredients = ingredients;
        this.image = image;
        this.time = time;
    }
}

export const birthday_chocolate = new bakeryProduct(
    'Chocolate birthday cake',
    500,
    2,
    ['oil','cacao','cream'],
    cakeBithdayChocoalte,
    7
);

export const donnuts = new bakeryProduct(
    'Donnuts set',
    350,
    5,
    ['dough', 'caramel', 'chocolate', 'glaze'],
    donnutsSet,
    3
);

export const muffins = new bakeryProduct(
    'Muffins set',
    300,
    4,
    ['chocolate', 'cacao', 'cream'],
    muffinsSet,
    3
);

export const bread_bucket = new bakeryProduct(
    'Bread bucket',
    200,
    4,
    ['dough', 'sesame'],
    breadBucket,
    2
);

export const heart_vanilla = new bakeryProduct(
    'Chocolate valentine cake',
    750,
    8,
    ['cacao','berries','chocolate'],
    cakeHeartVanillaChocolate,
    4
);

export const vanilla_wedding = new bakeryProduct(
    'Vanilla wedding cake',
    1500,
    10,
    ['strawberries','vanilla','cookies'],
    cakeVanillaWedding,
    12
);