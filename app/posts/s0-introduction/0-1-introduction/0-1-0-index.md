---
title: Rural Accessibility Map
date: 2017-08-01
layout: post.html
permalink: /
---

The Rural Accessibility Map allows you to assess the accessibility of rural populations in relation to critical services. Using the [Open Source Routing Machine](http://project-osrm.org/), RAM calculates travel times from population centers to the nearest POI.

RAM is under active development. Its codebase is available on Github:

- [RAM backend](https://github.com/WorldBank-Transport/ram-backend) is the main backend of the project with the API, database and file storage.
- [RAM frontend](https://github.com/WorldBank-Transport/ram-frontend) with the code for the user interface
- [RAM iD](https://github.com/WorldBank-Transport/ram-iD), a customized version of [iD](https://github.com/openstreetmap/iD) to allow editing of the road network
- [RAM data pipeline](https://github.com/WorldBank-Transport/ram-datapipeline) that handles some of the more intensive data processing

To get a local dev version of everything up and running quickly check out https://github.com/WorldBank-Transport/ram-backend#offline-usage
