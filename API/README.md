### Get all the positions. It return up to 50 results by query

```
http://localhost:3000/positions
http://localhost:3000/positions?description=python&location=new+york

```
### Paginate. As mentioned it return up to 50 by query, pagination starts by default at 0.


```
http://localhost:3000/positions?page=2

```
### Filter by description

```
http://localhost:3000/positions?description=python&location=new+york
```

#Parameters

* description
* location
* lat
* long
* full_time
* search
```
http://localhost:3000/positions?description=python&full_time=true&location=sf
http://localhost:3000/positions?search=node
http://localhost:3000/positions?lat=37.3229978&long=-122.0321823
```
