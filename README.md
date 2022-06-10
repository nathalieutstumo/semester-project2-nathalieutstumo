# Aloe skin - Semester project 2

![image](https://i.postimg.cc/gJqsfRBJ/Skjermbilde-2022-01-27-kl-13-05-28.png)

## Description

Aloe Skin is an e-commerce website created for selling skin care products. The project was created for my second year semester project.

## Built With

There are no dependencies necessary to run this project.

- HTML
- SCSS
- JavaScript

## Getting Started

Right click on index.html and then chose open with live server and a tab with the page will open in your browser.

### Installing

To install the project, clone the project in GitHub.

1. Clone the repo:

```bash
git clone https://github.com/nathalieutstumo/semester-project2-nathalieutstumo.git
```

2. Install the dependencies:

```
No depencencies needed
```

### Running

To see the project right click on the index.html file and chose «open with live server». The project will then open in your browser and will work as it should with the exception of the API data, because the API is down at the moment.

## Contributing

The project utilises html, scss and JS. All html pages have corresponding JS files with the same name.
The folder structure is pretty straight forward with all html files in the root, all JS files are in the JS folder in the root. The styling is in the scss folder in the root as well and is contains a style.scss file that imports all the other scss files that are located in the partials folder inside the scss folder.

The structure of the JS folder is all the corresponding JS files to the html pages and three folders.
Components which contains alert.js which is the error message that displays when something is wrong.
Configs which contains the base_url const that contains the api url and is used when fetching data from the api on the other pages as well. It also contains a const called headers which is used to get items from local storage.
And lastly libs which contains multiple files. FilterArray.js contains a const to filter information to lowercase and makes it possible to search. localStorageHelper.js has some earlier code that’s commented out, but the active code is to put information in local storage and to get it out. Route.js imports getUser from localStorageHelper.js and sends the user to the correct location if the user isn’t in local storage. The last file in the libs folder is validation.js and contains validation for input fields.

If you’re unsure what JS file links to where, the scripts used for each page are linked in the bottom of the html pages.

## Contact

This is where you can leave your social links for people to contact you, such as a LinkedIn profile or Twitter link e.g.

[My Instagram page](https://www.instagram.com/nathalieutstumo/)

Email: nathalie.utstumo@gmail.com
