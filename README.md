![Bing Logo](public/img/MicrosoftBingLogo.png)

# Microsoft Bing APIs

This document assumes you already know which services you want to use from the API if you don't go through the list [here](https://msdn.microsoft.com/en-us/library/ff701713.aspx) . 

## Bing Maps Rest Services  

Microsoft Bing Maps Api exposes an Rest Endpoint that gives back important map related data. The feature rich API provides rest services that are very important to companies and organisations. Some of the features include

### Feature list 

1. Location 
2. Elevation  
3. Imagery  
4. Routing  
5. Traffic   

*__Location__*

Location services provide location data based on an address, point or query. 

*__Elevation__*

Evelation services provides elevation data based on a query to the microsoft bing endpoint. 


*__Imagery__*

Imagery services provices static images to queries like specific regions and routes to locations.

*__Routes__*

Routing services gives back routing data such as walking walking route or driving route to a place and also gives traffic information on specific areas.

*__Traffic__*

Traffic services provides traffic information about for a geographycal area. 

### Authentication
![](public/img/bingMapsLogo.png)

Its easy to start Leveraging Microsoft Bing Maps API and start using in your apps or business and other solutions you are working on, all you need to do is get a [key](https://www.bingmapsportal.com/Application) with __authenticates__ your application to the microsoft servers. If you have an **Azure** subscription you can add the cloud service from there and use it in your application see my [post](http://devscenter.com/article/to/azure/bing/cloud/service) . Manage your keys from the bingmapsportal .

![bingmapsportal](public/img/bingmapkeys.png)

### API usage (demo)

Bing Maps API can be used in alot of ways in this tiny code sample project i have used the API in different ways. 


#### Rendering the Map 

![map smaple](public/img/staticmap-1.png)

```javascript

    /**
     * @param{Object} - Dom object element 
     * @param{Object} - Object option settions for the map
     */
    map = new Microsoft.Maps.Map(document.getElementById('Map'), {
        credentials: 'asdfasdfasdfasdfasdfasdfasdfsadfasdf',
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 15
    });


```


#### Bing Map Services 

Bing maps provide a large namespaces with different modules that help use make use the API in a more efficient way. The API large and having all the modules loaded together with your Application would be too heavy.


![Bing Maps Services](public/img/bingmapsServices.png)

```javascript

    /**
     * @param{Object} - Module namespace 
     * @param{Function} - Callback function 
     */
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function(){

        /// Instanciate the directionmanager 
        var directionMan  = new Microsoft.Maps.Directions.DirectionsManager(map);
        /// Set and Render the input directions controls 
        directionMan.setRenderOptions({itineraryContainer: directionsManager});
        directionMan.showInputPanel("directionsInputPanel");
        
    });

```

This code sample is very basic but i might be updating it to something different than a code sample if you have any review, comments or get in touch on my [email](http://mailto:bigkevin2682@gmail.com) .


__Thank you **@bigkevzs**__








