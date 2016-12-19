import requests
import pickle

SOURCE = "party"
result = []
response = {'meta': {'next': '/api/v/2/{}/?format=json&limit=100'.format(SOURCE)}}
while response['meta']['next'] is not None:
    print('Querying:', response['meta']['next'])
    response = requests.get('http://www.politifact.com' +
                            response['meta']['next']).json()
    result.extend(response['objects'])

pickle.dump(result, open("{}.pickle".format(SOURCE), 'wb'))
