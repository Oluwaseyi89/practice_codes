import 'package:scoped_model/scoped_model.dart';

class Product extends Model {

  final String name;
  final String description;
  final int price;
  final String image;
  int rating;

  Product(this.name, this.description, this.price, this.image, this.rating);

  factory Product.fromMap(Map<String, dynamic> json) {
    return Product(
        json['name'],
        json['description'],
        json['price'],
        json['image'],
        json['rating']
    );
  }

  void updateRating(int myRating) {
    rating = myRating;
    notifyListeners();
  }


  static List<Product> getProducts() {
    List<Product> items = <Product>[];

    items.add(Product(
        "iPhone",
        "iPhone is the stylish phone ever",
        1000,
        "iphone.png",
        0
    ));

    items.add(Product(
        "Pixel",
        "Pixel is the most featureful phone ever",
        800,
        "pixel.png",
        0
    ));

    items.add(Product(
        "Laptop",
        "Laptop is the most productive development tool",
        2000,
        "laptop.png",
        0
    ));

    items.add(Product(
        "Tablet",
        "Tablet is the most useful device ever for meeting",
        1500,
        "tablet.png",
        0
    ));

    items.add(Product(
        "Pendrive",
        "Pendrive is useful storage medium",
        100,
        "pendrive.png",
        0
    ));

    return items;
  }
}
