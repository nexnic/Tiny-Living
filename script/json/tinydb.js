// It's not json file i can't make it not but it wil be the database on this site

// Use strict mode
    'use strict';

let tldb = [
    /*
    // Templet for this database 
    [0]: {
        // Title of the product 
        // Name of product
        name: "name",

        // This will be the short description on product
        short_desciption: "",

        // This will be longer Description for this Product
        description: "",

        // This will stat if Privat rent or Company 
        rentagent: {
            privat: true,
            company: false,
        },

        // This will be the price for the file
        price: 200, 
        
        // This will be the Deposit for the product 
        Deposit: 1000, 
        
        // This wil be the specific for the site
        // Like bedroom, area, rent Period, floor, facilities, 
        spec: {
            bedroom: 1, 
            area: "20m2",
            rentalperiod: "data",
            floor: 1,
            facilities: "",
        },
        
        // We need address field for the product 
        // country, City, Adreess
        
        address: {
            contry: "",
            city: "",
            address: "",
        },

        // This site have 2 type of category
        // Van, Tinyhouse

        category: {
            tinyhouse: true,
            vans: false, 
        },
        img: {
            [0]: "URL",
            [1]: "URL",
            [2]: "URL",
        },

    },
    */
    {
        name: "Snug & Cozy Livings",
        short_desciption: "This place where you will get peach of mind. ",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, facilis tempora laborum obcaecati quia consequuntur rerum, harum, molestias labore vitae perspiciatis. Ratione alias placeat minima cupiditate quia illo libero necessitatibus!",
        rentagent: {
            privat: true,
            company: false,
        },
        price: 2200, 
        Deposit: 3000, 
        spec: {
            bedroom: 1, 
            area: "20m2",
            rentalperiod: "1",
            floor: 1,
            facilities: "",
        },
        address: {
            contry: "Norway",
            city: "Tønsberg",
            address: "Dukenveien 21",
        },
        category: {
            tinyhouse: true,
            vans: false, 
        },
        img: {
            [0]: "./src/image/product/TL--01.jpg",
        },
    },
    {
        name: "Hillside Huts",
        short_desciption: "This place where you can fish and tak hike only 1 min walk",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, facilis tempora laborum obcaecati quia consequuntur rerum, harum, molestias labore vitae perspiciatis. Ratione alias placeat minima cupiditate quia illo libero necessitatibus!",
        rentagent: {
            privat: true,
            company: false,
        },
        price: 4000, 
        Deposit: 5000, 
        spec: {
            bedroom: 2, 
            area: "30m2",
            rentalperiod: "data",
            floor: 1,
            facilities: "",
        },
        address: {
            contry: "Norway",
            city: "Hvitsten",
            address: "Strandveien 57",
        },
        category: {
            tinyhouse: true,
            vans: false, 
        },
        img: {
            [0]: "./src/image/product/TL--02.jpg",
        },
    },
   {
        name: "The Small Scale Spaces",
        short_desciption: "You can rent this place where you like to go",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, facilis tempora laborum obcaecati quia consequuntur rerum, harum, molestias labore vitae perspiciatis. Ratione alias placeat minima cupiditate quia illo libero necessitatibus!",
        rentagent: {
            privat: true,
            company: false,
        },
        price: 300, 
        Deposit: 500, 
        spec: {
            bedroom: 1, 
            area: "15m2",
            rentalperiod: "data",
            floor: 1,
            facilities: "",
        },
        address: {
            contry: "Norway",
            city: "Oslo",
            address: "Grev Wedels Plass 2",
        },
        category: {
            tinyhouse: true,
            vans: false, 
        },
        img: {
            [0]: "./src/image/product/TL--03.jpg",
        },
    },
    {
        name: "Triny",
        short_desciption: "You want try van life before you buy it",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, facilis tempora laborum obcaecati quia consequuntur rerum, harum, molestias labore vitae perspiciatis. Ratione alias placeat minima cupiditate quia illo libero necessitatibus!",
        rentagent: {
            privat: true,
            company: false,
        },
        price: 200, 
        Deposit: 1000, 
        spec: {
            bedroom: 0, 
            area: "14m2",
            rentalperiod: "data",
            floor: 1,
            facilities: "",
        },
        address: {
            contry: "Norway",
            city: "Drammen",
            address: "Drammenveien 13",
        },
        category: {
            tinyhouse: true,
            vans: false, 
        },
        img: {
            [0]: "./src/image/product/TL--04.jpg",
        },
    },
    {
        name: "Lex",
        short_desciption: "This van is Perfect first time van to test",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, facilis tempora laborum obcaecati quia consequuntur rerum, harum, molestias labore vitae perspiciatis. Ratione alias placeat minima cupiditate quia illo libero necessitatibus!",
        rentagent: {
            privat: true,
            company: false,
        },
        price: 400, 
        Deposit: 1500, 
        spec: {
            bedroom: 0, 
            area: "20m2",
            rentalperiod: "data",
            floor: 1,
            facilities: "",
        },
        address: {
            contry: "Norway",
            city: "Fetsund",
            address: "Guttersrudvegen 26",
        },
        category: {
            tinyhouse: true,
            vans: false, 
        },
        img: {
            [0]: "./src/image/product/TL--05.jpg",
        },
    },
    {
        name: "Trinity",
        short_desciption: "This make life easy",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, facilis tempora laborum obcaecati quia consequuntur rerum, harum, molestias labore vitae perspiciatis. Ratione alias placeat minima cupiditate quia illo libero necessitatibus!",
        rentagent: {
            privat: true,
            company: false,
        },
        price: 600, 
        Deposit: 2000, 
        spec: {
            bedroom: 0, 
            area: "12m2",
            rentalperiod: "data",
            floor: 0,
            facilities: "",
        },
        address: {
            contry: "Norway",
            city: "Roa",
            address: "Roalinna 9",
        },
        category: {
            tinyhouse: true,
            vans: false, 
        },
        img: {
            [0]: "./src/image/product/TL--05.jpg",
        },
    },

]
