from geo.Geoserver import Geoserver

geo = Geoserver('http://127.0.0.1:8080/geoserver', username='admin', password='geoserver')

## create workspaace
# geo.create_workspace(workspace='demo')

# add Raster
# geo.create_coveragestore(layer_name='raster1', path=r'C:\Users\limei\Documents\05_VSCode\geoproject\geoserver-rest\data\raster\raster1.tif', workspace='demo')

