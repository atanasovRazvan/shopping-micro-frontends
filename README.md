***

System Oriented Architecture  
**Babes-Bolyai University**  
*Atanasov Mihai-Razvan*

***


# Purpose

This is an experiment in which I am building an fully functionat e-commerce type of application using micro frontends.
## Installation

From the root folder, run the following commands:

```python
    cd cart && npm install
    cd products && npm install
    cd shopping && npm install
    cd cart && npm run build && npm run start
    cd products && npm run build && npm run start
    cd shopping && npm run build && npm run start
```

Now, everything should be set up. Opening the browser with [http://localhost:3000](http://localhost:3000), you should be able to open the Application.

The micro frontends can also be checked if the commands above were run correctly, as follows:  
For the Cart micro frontend: [http://localhost:3001](http://localhost:3001)  
For the Products micro frontend: [http://localhost:3002](http://localhost:3002)  
