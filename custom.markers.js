/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

      // Pisa
                {
            x: 2800,
            z: 5000,
            image: "images/pisa.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Pisa",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "20px times new roman, sans serif",
        },

      // Mercia
                {
            x: 1699,
            z: 3687,
            image: "images/merica.jpg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Mercia",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "20px times new roman, sans serif",
        },

      // byzantine empire
                {
            x: 4766,
            z: 5033,
            image: "images/buz.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Byzantine Empire",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "20px times new roman, sans serif",
        },

      // Fatimid Caliphate
                {
            x: 5445,
            z: 6386,
            image: "images/fati.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Fatimid Caliphate",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "20px times new roman, sans serif",
        },

      // Caliphate of Cordoba
                {
            x: 953,
            z: 5634,
            image: "images/cordoba.jpg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Caliphate of Cordoba",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "20px times new roman, sans serif",
        },

      // Zirid Dynasty
                {
            x: 2750,
            z: 5975,
            image: "images/zirid.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Zirid Dynasty",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "20px times new roman, sans serif",
        },
   
      // Duchy of Saxony
        {
            x: 2783,
            z: 3559,
            image: "images/saxony.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Duchy of Saxony",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "20px times new roman, sans serif",
        },

              // Georgia
        {
            x: 6174,
            z: 4404,
            image: "images/geo.jpg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Kingdom of Georgia",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "20px times new roman, sans serif",
        },
        // Bavaria
        {
            x: 2850,
            z: 4227,
            image: "images/bavaria.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Duchy of Bavaria",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "20px times new roman, sans serif",
        },
    ]
}
