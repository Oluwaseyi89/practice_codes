import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> with SingleTickerProviderStateMixin {
  late Animation<double> animation;
  late AnimationController controller;

  @override
  void initState() {
    super.initState();
    controller = AnimationController(duration: const Duration(seconds: 10), vsync: this);
    animation = Tween<double>(begin: 0.0, end: 1.0).animate(controller);
    controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    controller.forward();
    return MaterialApp(title: 'Flutter Demo', theme: ThemeData(
        primarySwatch: Colors.amber
    ), home: MyHomePage(title: 'Product Animation App', animation: animation)
    );
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

}


class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key, required this.title, required this.animation});

  final String title;
  final Animation<double> animation;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: ListView(
        shrinkWrap: true,
        padding: const EdgeInsets.fromLTRB(2.0, 10.0, 2.0, 10.0),
        children: <Widget>[
          FadeTransition(
            opacity: animation,
            child: const ProductBox(
              name: "iPhone",
              description: "iPhone is the stylish phone ever",
              price: 1000,
              image: "iphone.png"
            )),
          MyAnimatedWidget(
            animation: animation,
            child: const ProductBox(
                name: "Pixel",
                description: "Pixel is the most featureful phone ever",
                price: 800,
                image: "pixel.png"
            )
          ),
          const ProductBox(
              name: "Laptop",
              description: "Laptop is the most productive development tool",
              price: 2000,
              image: "laptop.png"
          ),
          const ProductBox(
              name: "Tablet",
              description: "Tablet is the most useful device ever for meeting",
              price: 1500,
              image: "tablet.png"
          ),
          const ProductBox(
              name: "Pendrive",
              description: "Pendrive is useful storage medium",
              price: 100,
              image: "pendrive.png"
          ),
        ],
      ),
    );
  }
}

class ProductBox extends StatelessWidget {
  const ProductBox({super.key, required this.name, required this.description, required this.price, required this.image});

  final String name;
  final String description;
  final int price;
  final String image;

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
                child: Image.asset("assets/appimages/$image")
            ),
            Expanded(
              flex: 1,
              child: Container(
                padding: const EdgeInsets.all(5),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: <Widget>[
                    Text(name, style: const TextStyle(fontWeight: FontWeight.bold)),
                    Text(description),
                    Text("Price: $price")
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

class MyAnimatedWidget extends StatelessWidget {
  const MyAnimatedWidget({super.key, required this.child, required this.animation});

  final Widget child;
  final Animation<double> animation;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: AnimatedBuilder(
        animation: animation,
        builder: (context, child) => Opacity(
          opacity: animation.value,
        child: child
        ),
        child: child,
      ),
    );
  }
}


