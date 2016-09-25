// D3 Tutorial 005 - @muqueca

/* OBJECTIVE
In this new pen, let's understand the scale function and its applications. It's very unlikely that in any dataset, the given values will fit perfectly inside the SVG area; let's say that your bar has 850 pixels width, but your available SVG area is only 400 pixels, when you plot the rectangle the bar will exceed the 400px area and it will simply overflow off the area - or not show.

D3 Scale functions provide ways to fit the extending elements proportially inside the available SVG area. Let's take a look...
*/

// create some data
var data = [19, 70, 60, 40, 100, 10, 50, 80];

/*
it's not a good practice to enter the values
direct in the attribute, so let's set global variables
*/
var svgW = 400;
var svgH = 300;
var pad = 2;

/*
A Linear Scale is comprised of:

Input DOMAIN - A scale’s input domain is the range of possible input data values. In general, the minimum and maximum values of the data set. The quick tip here would be to use the helper functions min() and max() to determine the smalles and largest data value in the data set.

   d3.scale.linear()
      .domain ([min(), max()])
      .range  ([min, max]);

Output RANGE - A scale’s output range is the range of possible output values, commonly used as display values in pixel units. Think that your smallest data value will be 10 pixels wide, and the largest value in the data set will be 350 pixels wide, then you could set an output range of 10 and 350.
*/

var scaleW = d3.scale.linear()
  .domain ([d3.min(data), d3.max(data)]) //input values
  .range  ([10, svgW]); //output in pixes

var scaleH = d3.scale.linear()
  .domain ([0, data.length]) //input values
  .range  ([10, svgH]); //output in pixes

// create a SVG area to draw on
var svg = d3.select("csr-data-dataviz-article")
  .append("svg")
// use the global variables to set the W and H
  .attr("width",svgW)
  .attr("height",svgH)

// just a little style to help us see the SVG area limits
  .style("border", "solid 1px lightgrey")
  .style("padding", "10px");

// lets draw the bars
var bars = svg.selectAll("rect")
  .data(data)
  .enter()
    .append("rect")
    .attr("height", svgH/data.length - pad)
    .attr("width", function(d) { return scaleW( d + 1 ); })
    .attr("y", function(d,i) { return i * svgH/data.length });
