const fs = require('fs');
const path = require('path');

const pathToFile = path.resolve(__dirname, 'books.csv');
const fileContents = fs.readFileSync(pathToFile, 'utf8');
const fileContentsArr = fileContents.split('\n').map((n: string) => n.split('; '));
const [columnsName, ...books] = fileContentsArr;

const createObjAuthors = (columns: string[], books: string[]) => {
    const objAuthors = {
        authors: []
    };
    const columnsLowerCase = columns.map((n) => n.toLowerCase())
    const indexTitle = columnsLowerCase.indexOf('Title'),
        indexAuthor = columnsLowerCase.indexOf('Author'),
        indexDescription = columnsLowerCase.indexOf('Annotation');
    
    books.forEach((book: string) : void => {
        const findAuthor = objAuthors.authors.find((element: { author: string, books: {title: string, description: string}[]}[]) => element.author === book[indexAuthor]);

        if (findAuthor) {
            findAuthor.books.push({
                title: book[indexTitle],
                description: book[indexDescription],
            });
        } else {
            objAuthors.authors.push({
                author: book[indexAuthor],
                books: [
                    {
                      title: book[indexTitle],
                      description: book[indexDescription]
                    }
                  ]
            });
        }
    });

    return objAuthors;
}

const objAuthors = createObjAuthors(columnsName, books);
const JSONauthors = JSON.stringify(objAuthors);

fs.writeFileSync(path.resolve(__dirname, 'books.json'), JSONauthors);

// Написать удачно на ts не получилось, превый день с ним работаю, 
// А вот тоже самое на js

const fs = require('fs');
const path = require('path');

const pathToFile = path.resolve(__dirname, 'books.csv');
const fileContents = fs.readFileSync(pathToFile, 'utf8');
const fileContentsArr = fileContents.split('\n').map((n) => n.split('; '));
const [columnsName, ...books] = fileContentsArr;

const createObjAuthors = (columns, books) => {
    const objAuthors = {
        authors: []
    };
    const columnsLowerCase = columns.map((n) => n.toLowerCase())
    const indexTitle = columnsLowerCase.indexOf('title'),
        indexAuthor = columnsLowerCase.indexOf('author'),
        indexDescription = columnsLowerCase.indexOf('annotation');
    
    books.forEach((book) => {
        const findAuthor = objAuthors.authors.find((element) => element.author === book[indexAuthor]);

        if (findAuthor) {
            findAuthor.books.push({
                title: book[indexTitle],
                description: book[indexDescription],
            });
        } else {
            objAuthors.authors.push({
                author: book[indexAuthor],
                books: [
                    {
                      title: book[indexTitle],
                      description: book[indexDescription]
                    }
                  ]
            });
        }
    });

    return objAuthors;
}

const objAuthors = createObjAuthors(columnsName, books);
const JSONauthors = JSON.stringify(objAuthors);

fs.writeFileSync(path.resolve(__dirname, 'books.json'), JSONauthors);