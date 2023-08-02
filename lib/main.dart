import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class Product {
  final String name;
  final String description;
  final int price;
  final String image;

  Product(this.name, this.description, this.price, this.image);

  static List<Product> getProducts() {
    List<Product> items = <Product>[];

    items.add(Product(
        "iPhone",
        "iPhone is the stylish phone ever",
        1000,
        "iphone.png"
    ));

    items.add(Product(
        "Pixel",
        "Pixel is the most featureful phone ever",
        800,
        "pixel.png"
    ));

    items.add(Product(
        "Laptop",
        "Laptop is the most productive development tool",
        2000,
        "laptop.png"
    ));

    items.add(Product(
        "Tablet",
        "Tablet is the most useful device ever for meeting",
        1500,
        "tablet.png"
    ));

    items.add(Product(
        "Pendrive",
        "Pendrive is useful storage medium",
        100,
        "pendrive.png"
    ));

    return items;
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: MyHomePage(title: 'Product Navigation App'),
    );
  }
}

class MyHomePage extends StatelessWidget {

  MyHomePage({super.key, required this.title});

  final String title;
  final items = Product.getProducts();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: ListView.builder(
        itemCount: items.length,
        itemBuilder: (context, index) {
          return GestureDetector(
            child:ProductBox(item: items[index]),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => ProductPage(item: items[index])
                )
              );
            },
          );
        },
      )
    );
  }
}

class ProductPage extends StatelessWidget {

  const ProductPage({super.key, required this.item});

  final Product item;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(item.name)),
      body: Center(
        child: Container(
          padding: const EdgeInsets.all(0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Image.asset("assets/appimages/${item.image}"),
          Expanded(
              child: Container(
            padding: const EdgeInsets.all(5),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              Text(item.name, style: const TextStyle(fontWeight: FontWeight.bold),),
              Text(item.description),
              Text("Price: ${item.price}"),
              RatingBox(),
            ],),
          ))
        ],),),
      ),
    );
  }
}

class RatingBox extends StatefulWidget {

 @override
 _RatingBoxState createState() => _RatingBoxState();
}

class _RatingBoxState extends State<RatingBox> {

  int _rating = 0;

  void _setRatingAsOne() {
    setState(() {
      _rating = 1;
    });
  }

  void _setRatingAsTwo() {
    setState(() {
      _rating = 2;
    });
  }

  void _setRatingAsThree() {
    setState(() {
      _rating = 3;
    });
  }

  @override
  Widget build(BuildContext context) {
    double _size = 20;
    print(_rating);

    return Row(
      mainAxisAlignment: MainAxisAlignment.end,
      crossAxisAlignment: CrossAxisAlignment.end,
      mainAxisSize: MainAxisSize.max,
      children: <Widget>[
        Container(
          padding: const EdgeInsets.all(0),
          child: IconButton(
              icon: (_rating >= 1 ? Icon(Icons.star, size: _size) :
              Icon(Icons.star_border, size: _size)),
              color: Colors.red[500],
              onPressed: _setRatingAsOne,
              iconSize: _size
          ),
        ),
        Container(
          padding: const EdgeInsets.all(0),
          child: IconButton(
              icon: (_rating >= 2 ? Icon(Icons.star, size: _size) :
              Icon(Icons.star_border, size: _size)),
              color: Colors.red[500],
              onPressed: _setRatingAsTwo,
              iconSize: _size
          ),
        ),
        Container(
          padding: const EdgeInsets.all(0),
          child: IconButton(
              icon: (_rating >= 3 ? Icon(Icons.star, size: _size) :
              Icon(Icons.star_border, size: _size)),
              color: Colors.red[500],
              onPressed: _setRatingAsThree,
              iconSize: _size
          ),
        ),
      ],
    );
  }

}

class ProductBox extends StatelessWidget {

  const ProductBox({super.key, required this.item});

  final Product item;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(2),
      height: 160,
      child: Card(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Expanded(
              flex: 1,
              child: Image.asset("assets/appimages/${item.image}"),
            ),
            Expanded(
              flex: 1,
              child: Container(
                padding: const EdgeInsets.all(5),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: <Widget>[
                    Text(item.name, style: const TextStyle(fontWeight: FontWeight.bold)),
                    Text(item.description),
                    Text("Price: ${item.price}"),
                    RatingBox()
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}