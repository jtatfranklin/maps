var wms_layers = [];


        var lyr_Mapboxmonochromelight_0 = new ol.layer.Tile({
            'title': 'Mapbox monochrome light',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://api.mapbox.com/styles/v1/frankadmin/clxysw2cj004b01nz6k4cfz6f/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZnJhbmthZG1pbiIsImEiOiJjajhvbW51NHYwNWI2MzNyejV4Y2s0aDN4In0.FSOtZl6iInZhjDUiS6Xscg'
            })
        });
var format_ParishBoatRamps_1 = new ol.format.GeoJSON();
var features_ParishBoatRamps_1 = format_ParishBoatRamps_1.readFeatures(json_ParishBoatRamps_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParishBoatRamps_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParishBoatRamps_1.addFeatures(features_ParishBoatRamps_1);
var lyr_ParishBoatRamps_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParishBoatRamps_1, 
                style: style_ParishBoatRamps_1,
                popuplayertitle: 'Parish Boat Ramps',
                interactive: true,
                title: '<img src="styles/legend/ParishBoatRamps_1.png" /> Parish Boat Ramps'
            });
var format_Parks_2 = new ol.format.GeoJSON();
var features_Parks_2 = format_Parks_2.readFeatures(json_Parks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parks_2.addFeatures(features_Parks_2);
var lyr_Parks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parks_2, 
                style: style_Parks_2,
                popuplayertitle: 'Parks',
                interactive: true,
                title: '<img src="styles/legend/Parks_2.png" /> Parks'
            });
var format_LA_Parishes_3 = new ol.format.GeoJSON();
var features_LA_Parishes_3 = format_LA_Parishes_3.readFeatures(json_LA_Parishes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LA_Parishes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LA_Parishes_3.addFeatures(features_LA_Parishes_3);
var lyr_LA_Parishes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LA_Parishes_3, 
                style: style_LA_Parishes_3,
                popuplayertitle: 'LA_Parishes',
                interactive: false,
    title: 'LA_Parishes<br />\
    <img src="styles/legend/LA_Parishes_3_0.png" /> Iberville Parish<br />' });

lyr_Mapboxmonochromelight_0.setVisible(true);lyr_ParishBoatRamps_1.setVisible(true);lyr_Parks_2.setVisible(true);lyr_LA_Parishes_3.setVisible(true);
var layersList = [lyr_Mapboxmonochromelight_0,lyr_ParishBoatRamps_1,lyr_Parks_2,lyr_LA_Parishes_3];
lyr_ParishBoatRamps_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'STATE': 'STATE', 'zip': 'zip', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'CATEGORY': 'CATEGORY', });
lyr_Parks_2.set('fieldAliases', {'FID': 'FID', 'DBO_Parc_4': 'DBO_Parc_4', 'DBO_Parc_5': 'DBO_Parc_5', 'DBO_Parc_6': 'DBO_Parc_6', 'DBO_Par_20': 'DBO_Par_20', 'DBO_Par_48': 'DBO_Par_48', 'ParkName': 'ParkName', 'Stret_Addr': 'Stret_Addr', 'Owner': 'Owner', 'Descr': 'Descr', });
lyr_LA_Parishes_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'COUNTYNS10': 'COUNTYNS10', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'NAMELSAD10': 'NAMELSAD10', 'LSAD10': 'LSAD10', 'CLASSFP10': 'CLASSFP10', 'MTFCC10': 'MTFCC10', 'CSAFP10': 'CSAFP10', 'CBSAFP10': 'CBSAFP10', 'METDIVFP10': 'METDIVFP10', 'FUNCSTAT10': 'FUNCSTAT10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ParishBoatRamps_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'STATE': 'TextEdit', 'zip': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'CATEGORY': 'ValueMap', });
lyr_Parks_2.set('fieldImages', {'FID': 'TextEdit', 'DBO_Parc_4': 'TextEdit', 'DBO_Parc_5': 'TextEdit', 'DBO_Parc_6': 'TextEdit', 'DBO_Par_20': 'TextEdit', 'DBO_Par_48': 'TextEdit', 'ParkName': 'TextEdit', 'Stret_Addr': 'TextEdit', 'Owner': 'TextEdit', 'Descr': 'TextEdit', });
lyr_LA_Parishes_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'STATEFP10': 'TextEdit', 'COUNTYFP10': 'TextEdit', 'COUNTYNS10': 'TextEdit', 'GEOID10': 'TextEdit', 'NAME10': 'TextEdit', 'NAMELSAD10': 'TextEdit', 'LSAD10': 'TextEdit', 'CLASSFP10': 'TextEdit', 'MTFCC10': 'TextEdit', 'CSAFP10': 'TextEdit', 'CBSAFP10': 'TextEdit', 'METDIVFP10': 'TextEdit', 'FUNCSTAT10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', 'INTPTLAT10': 'TextEdit', 'INTPTLON10': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ParishBoatRamps_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAME': 'no label', 'ADDRESS': 'no label', 'CITY': 'hidden field', 'STATE': 'hidden field', 'zip': 'hidden field', 'LAT': 'hidden field', 'LONG': 'hidden field', 'GlobalID': 'hidden field', 'CATEGORY': 'hidden field', });
lyr_Parks_2.set('fieldLabels', {'FID': 'hidden field', 'DBO_Parc_4': 'hidden field', 'DBO_Parc_5': 'hidden field', 'DBO_Parc_6': 'hidden field', 'DBO_Par_20': 'hidden field', 'DBO_Par_48': 'hidden field', 'ParkName': 'no label', 'Stret_Addr': 'no label', 'Owner': 'inline label - visible with data', 'Descr': 'no label', });
lyr_LA_Parishes_3.set('fieldLabels', {'OBJECTID': 'no label', 'STATEFP10': 'no label', 'COUNTYFP10': 'no label', 'COUNTYNS10': 'no label', 'GEOID10': 'no label', 'NAME10': 'no label', 'NAMELSAD10': 'no label', 'LSAD10': 'no label', 'CLASSFP10': 'no label', 'MTFCC10': 'no label', 'CSAFP10': 'no label', 'CBSAFP10': 'no label', 'METDIVFP10': 'no label', 'FUNCSTAT10': 'no label', 'ALAND10': 'no label', 'AWATER10': 'no label', 'INTPTLAT10': 'no label', 'INTPTLON10': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_LA_Parishes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});