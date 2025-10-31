var wms_layers = [];


        var lyr_Mapboxstreets_0 = new ol.layer.Tile({
            'title': 'Mapbox streets',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZnJhbmthZG1pbiIsImEiOiJjbHhhbHdqczExZ3RyMnJweDlpMWowY3hsIn0.PDPBceHCj0ddmgsZY3uSHg'
            })
        });
var format_PublicBoatRamps_1 = new ol.format.GeoJSON();
var features_PublicBoatRamps_1 = format_PublicBoatRamps_1.readFeatures(json_PublicBoatRamps_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicBoatRamps_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicBoatRamps_1.addFeatures(features_PublicBoatRamps_1);
var lyr_PublicBoatRamps_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PublicBoatRamps_1, 
                style: style_PublicBoatRamps_1,
                popuplayertitle: 'Public Boat Ramps',
                interactive: true,
    title: 'Public Boat Ramps<br />\
    <img src="styles/legend/PublicBoatRamps_1_0.png" /> Public<br />\
    <img src="styles/legend/PublicBoatRamps_1_1.png" /> Semi-Private<br />\
    <img src="styles/legend/PublicBoatRamps_1_2.png" /> <br />' });
var format_ParishMaintainedBoatRamps_2 = new ol.format.GeoJSON();
var features_ParishMaintainedBoatRamps_2 = format_ParishMaintainedBoatRamps_2.readFeatures(json_ParishMaintainedBoatRamps_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParishMaintainedBoatRamps_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParishMaintainedBoatRamps_2.addFeatures(features_ParishMaintainedBoatRamps_2);
var lyr_ParishMaintainedBoatRamps_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParishMaintainedBoatRamps_2, 
                style: style_ParishMaintainedBoatRamps_2,
                popuplayertitle: 'Parish Maintained Boat Ramps',
                interactive: true,
                title: '<img src="styles/legend/ParishMaintainedBoatRamps_2.png" /> Parish Maintained Boat Ramps'
            });
var format_Parks_3 = new ol.format.GeoJSON();
var features_Parks_3 = format_Parks_3.readFeatures(json_Parks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parks_3.addFeatures(features_Parks_3);
var lyr_Parks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parks_3, 
                style: style_Parks_3,
                popuplayertitle: 'Parks',
                interactive: true,
                title: '<img src="styles/legend/Parks_3.png" /> Parks'
            });
var format_LA_Parishes_4 = new ol.format.GeoJSON();
var features_LA_Parishes_4 = format_LA_Parishes_4.readFeatures(json_LA_Parishes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LA_Parishes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LA_Parishes_4.addFeatures(features_LA_Parishes_4);
var lyr_LA_Parishes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LA_Parishes_4, 
                style: style_LA_Parishes_4,
                popuplayertitle: 'LA_Parishes',
                interactive: false,
    title: 'LA_Parishes<br />\
    <img src="styles/legend/LA_Parishes_4_0.png" /> Iberville Parish<br />' });

lyr_Mapboxstreets_0.setVisible(true);lyr_PublicBoatRamps_1.setVisible(true);lyr_ParishMaintainedBoatRamps_2.setVisible(true);lyr_Parks_3.setVisible(true);lyr_LA_Parishes_4.setVisible(true);
var layersList = [lyr_Mapboxstreets_0,lyr_PublicBoatRamps_1,lyr_ParishMaintainedBoatRamps_2,lyr_Parks_3,lyr_LA_Parishes_4];
lyr_PublicBoatRamps_1.set('fieldAliases', {'FACILITY': 'FACILITY', 'DATE': 'DATE', 'CONTRACTOR': 'CONTRACTOR', 'TIME': 'TIME', 'CREW': 'CREW', 'ZONE': 'ZONE', 'PARISH': 'PARISH', 'QUAD_24K': 'QUAD_24K', 'WATERWAY': 'WATERWAY', 'GNISNAME': 'GNISNAME', 'LIGHTING': 'LIGHTING', 'USETYPE': 'USETYPE', 'DESCRIPTIO': 'DESCRIPTIO', 'COMMENT': 'COMMENT', 'LAT_DEC83': 'LAT_DEC83', 'LONG_DEC83': 'LONG_DEC83', 'LAT_DEC27': 'LAT_DEC27', 'LONG_DEC27': 'LONG_DEC27', 'UTM_X27Z15': 'UTM_X27Z15', 'UTM_Y27Z15': 'UTM_Y27Z15', 'UTM_X83Z15': 'UTM_X83Z15', 'UTM_Y83Z15': 'UTM_Y83Z15', 'UTM_X27Z16': 'UTM_X27Z16', 'UTM_Y27Z16': 'UTM_Y27Z16', 'UTM_X83Z16': 'UTM_X83Z16', 'UTM_Y83Z16': 'UTM_Y83Z16', });
lyr_ParishMaintainedBoatRamps_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'STATE': 'STATE', 'zip': 'zip', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'CATEGORY': 'CATEGORY', });
lyr_Parks_3.set('fieldAliases', {'FID': 'FID', 'DBO_Parc_4': 'DBO_Parc_4', 'DBO_Parc_5': 'DBO_Parc_5', 'DBO_Parc_6': 'DBO_Parc_6', 'DBO_Par_20': 'DBO_Par_20', 'DBO_Par_48': 'DBO_Par_48', 'ParkName': 'ParkName', 'Stret_Addr': 'Stret_Addr', 'Owner': 'Owner', 'Descr': 'Descr', 'Acres': 'Acres', 'Maintainer': 'Maintainer', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_LA_Parishes_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'COUNTYNS10': 'COUNTYNS10', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'NAMELSAD10': 'NAMELSAD10', 'LSAD10': 'LSAD10', 'CLASSFP10': 'CLASSFP10', 'MTFCC10': 'MTFCC10', 'CSAFP10': 'CSAFP10', 'CBSAFP10': 'CBSAFP10', 'METDIVFP10': 'METDIVFP10', 'FUNCSTAT10': 'FUNCSTAT10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PublicBoatRamps_1.set('fieldImages', {'FACILITY': 'TextEdit', 'DATE': 'TextEdit', 'CONTRACTOR': 'TextEdit', 'TIME': 'TextEdit', 'CREW': 'TextEdit', 'ZONE': 'TextEdit', 'PARISH': 'TextEdit', 'QUAD_24K': 'TextEdit', 'WATERWAY': 'TextEdit', 'GNISNAME': 'TextEdit', 'LIGHTING': 'TextEdit', 'USETYPE': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'COMMENT': 'TextEdit', 'LAT_DEC83': 'TextEdit', 'LONG_DEC83': 'TextEdit', 'LAT_DEC27': 'TextEdit', 'LONG_DEC27': 'TextEdit', 'UTM_X27Z15': 'TextEdit', 'UTM_Y27Z15': 'TextEdit', 'UTM_X83Z15': 'TextEdit', 'UTM_Y83Z15': 'TextEdit', 'UTM_X27Z16': 'TextEdit', 'UTM_Y27Z16': 'TextEdit', 'UTM_X83Z16': 'TextEdit', 'UTM_Y83Z16': 'TextEdit', });
lyr_ParishMaintainedBoatRamps_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'STATE': 'TextEdit', 'zip': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'CATEGORY': 'ValueMap', });
lyr_Parks_3.set('fieldImages', {'FID': 'TextEdit', 'DBO_Parc_4': 'TextEdit', 'DBO_Parc_5': 'TextEdit', 'DBO_Parc_6': 'TextEdit', 'DBO_Par_20': 'TextEdit', 'DBO_Par_48': 'TextEdit', 'ParkName': 'TextEdit', 'Stret_Addr': 'TextEdit', 'Owner': 'TextEdit', 'Descr': 'TextEdit', 'Acres': '', 'Maintainer': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_LA_Parishes_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'STATEFP10': 'TextEdit', 'COUNTYFP10': 'TextEdit', 'COUNTYNS10': 'TextEdit', 'GEOID10': 'TextEdit', 'NAME10': 'TextEdit', 'NAMELSAD10': 'TextEdit', 'LSAD10': 'TextEdit', 'CLASSFP10': 'TextEdit', 'MTFCC10': 'TextEdit', 'CSAFP10': 'TextEdit', 'CBSAFP10': 'TextEdit', 'METDIVFP10': 'TextEdit', 'FUNCSTAT10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', 'INTPTLAT10': 'TextEdit', 'INTPTLON10': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PublicBoatRamps_1.set('fieldLabels', {'FACILITY': 'no label', 'DATE': 'hidden field', 'CONTRACTOR': 'hidden field', 'TIME': 'hidden field', 'CREW': 'hidden field', 'ZONE': 'hidden field', 'PARISH': 'inline label - visible with data', 'QUAD_24K': 'hidden field', 'WATERWAY': 'inline label - visible with data', 'GNISNAME': 'hidden field', 'LIGHTING': 'hidden field', 'USETYPE': 'hidden field', 'DESCRIPTIO': 'hidden field', 'COMMENT': 'hidden field', 'LAT_DEC83': 'hidden field', 'LONG_DEC83': 'hidden field', 'LAT_DEC27': 'hidden field', 'LONG_DEC27': 'hidden field', 'UTM_X27Z15': 'hidden field', 'UTM_Y27Z15': 'hidden field', 'UTM_X83Z15': 'hidden field', 'UTM_Y83Z15': 'hidden field', 'UTM_X27Z16': 'hidden field', 'UTM_Y27Z16': 'hidden field', 'UTM_X83Z16': 'hidden field', 'UTM_Y83Z16': 'hidden field', });
lyr_ParishMaintainedBoatRamps_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAME': 'no label', 'ADDRESS': 'no label', 'CITY': 'hidden field', 'STATE': 'hidden field', 'zip': 'hidden field', 'LAT': 'hidden field', 'LONG': 'hidden field', 'GlobalID': 'hidden field', 'CATEGORY': 'hidden field', });
lyr_Parks_3.set('fieldLabels', {'FID': 'hidden field', 'DBO_Parc_4': 'hidden field', 'DBO_Parc_5': 'hidden field', 'DBO_Parc_6': 'hidden field', 'DBO_Par_20': 'hidden field', 'DBO_Par_48': 'hidden field', 'ParkName': 'no label', 'Stret_Addr': 'no label', 'Owner': 'inline label - visible with data', 'Descr': 'no label', 'Acres': 'no label', 'Maintainer': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_LA_Parishes_4.set('fieldLabels', {'OBJECTID': 'no label', 'STATEFP10': 'no label', 'COUNTYFP10': 'no label', 'COUNTYNS10': 'no label', 'GEOID10': 'no label', 'NAME10': 'no label', 'NAMELSAD10': 'no label', 'LSAD10': 'no label', 'CLASSFP10': 'no label', 'MTFCC10': 'no label', 'CSAFP10': 'no label', 'CBSAFP10': 'no label', 'METDIVFP10': 'no label', 'FUNCSTAT10': 'no label', 'ALAND10': 'no label', 'AWATER10': 'no label', 'INTPTLAT10': 'no label', 'INTPTLON10': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_LA_Parishes_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});