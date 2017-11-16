---
title: OSRM Profile
date: 2017-08-01
layout: post.html
permalink: /setting-up-a-project/osrm-profile
---

The OSRM Profile contains the configuration for the routing, most importantly the speed limits per road type. For example:

``` json
speed_profile = {
  ["Expressway"] = 120,
  ["National"] = 80,
  ["Provincial"] = 60,
  ["Township"] = 20,
  ...
}
```

## Default profile
RAM contains a default OSRM Profile that is a good starting point for OSM based datasets. See the default [RAM profile](https://raw.githubusercontent.com/WorldBank-Transport/ram-backend/develop/app/utils/default.profile.lua).

## File upload
A custom profile can be provided through file upload. The OSRM project has more information about writing custom [profiles](https://github.com/Project-OSRM/osrm-backend/wiki/Profiles).
