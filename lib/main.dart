import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:scoped_model/scoped_model.dart';
import 'Product.dart';


void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Flutter Demo",
      theme: ThemeData(
        primarySwatch: Colors.deepPurple
      ),
      home: MyHomePage(title: "Product State Demo Home Page"),
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
      appBar: AppBar(title: const Text("Product List with Scoped Model")),
      body: ListView.builder(
        itemCount: items.length,
        itemBuilder: (context, index) {
          return ProductBox(item: items[index]);
        },
      ),
    );
  }
}

class RatingBox extends StatelessWidget {

  const RatingBox({super.key, required this.item});

  final Product item;

  @override
  Widget build(BuildContext context) {

    double _size = 20;
    print(item.rating);

    return Row(
      mainAxisAlignment: MainAxisAlignment.end,
      crossAxisAlignment: CrossAxisAlignment.end,
      mainAxisSize: MainAxisSize.max,
      children: <Widget>[
        Container(
          padding: const EdgeInsets.all(0),
          child: IconButton(
            icon: (item.rating >= 1 ? Icon(Icons.star, size: _size) : Icon(Icons.star_border, size: _size,)),
            color: Colors.red[500],
            onPressed: () => item.updateRating(1),
            iconSize: _size,
          )
        ),
        Container(
          padding: const EdgeInsets.all(0),
          child: IconButton(
            icon: (item.rating >= 2 ? Icon(Icons.star, size: _size) : Icon(Icons.star_border, size: _size,)),
            color: Colors.red[500],
            onPressed: () => item.updateRating(2),
            iconSize: _size,
          )
        ),
        Container(
          padding: const EdgeInsets.all(0),
          child: IconButton(
            icon: (item.rating >= 3 ? Icon(Icons.star, size: _size) : Icon(Icons.star_border, size: _size,)),
            color: Colors.red[500],
            onPressed: () => item.updateRating(3),
            iconSize: _size,
          )
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
              child: Image.asset("assets/appimages/${item.image}")
            ),
            Expanded(
              flex: 1,
              child: Container(
                padding: const EdgeInsets.all(5),
                child: ScopedModel<Product>(
                  model: item,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: <Widget>[
                      Text(item.name, style: const TextStyle(fontWeight: FontWeight.bold)),
                      Text(item.description),
                      Text("price: ${item.price}"),
                      ScopedModelDescendant<Product>(
                          builder: (context, child, item) {
                            return RatingBox(item: item);
                          }
                      )
                    ],
                  ),

                ),
              )
            )
          ],
        ),
      ),
    );
  }
}


