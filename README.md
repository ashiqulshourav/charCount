# charCount v1.0
### How to use it?

## 1. for single use
````
document.querySelector('.contents').characterCounting();
````

## 2. for multiple usage (implement for all same class name)
````
const contents = document.querySelectorAll('.contents');
contents.forEach((item) => {
    item.characterCounting();
});
````

# How to add options
before adding options I need to share the all options property. 
You can add maxChar option which default value is 50. 
You can add buttonHideText option which default value is Show Less.
You can add buttonShowText option which default value is Show More.


````
document.querySelector('.contents').characterCounting({
  maxChar: 200,
  buttonHideText: "Show Less",
  buttonShowText: "Show More",
});
````

** note: you can add options for multiple items same as single item **

