import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers/reducers';

const subscriptions = {
  "kind": "youtube#subscriptionListResponse",
  "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/ABUl6bX6rSVRzX0WT9YKPA1cCno\"",
  "nextPageToken": "CAUQAA",
  "pageInfo": {
    "totalResults": 21,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#subscription",
      "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/sszxTGTVRPx4MSpjx4i7X0Ia00U\"",
      "id": "roOBps_SoVFaJ1JjcXbQ5kKZSfclVS32kV7BgM6_hEs",
      "snippet": {
        "publishedAt": "2016-04-09T17:42:39.000Z",
        "title": "Star Wars España",
        "description": "Disfruta de los últimos tráilers y clips de las películas de Star Wars.\nSigue las últimas novedades de nuestras películas a través de nuestra página de Facebook https://www.facebook.com/starwars.es\nY hazte fan de nuestro canal en Twitter: https://twitter.com/StarWarsSpain",
        "resourceId": {
          "kind": "youtube#channel",
          "channelId": "UCnochs1lsm15PCcmlil85Tg"
        },
        "channelId": "UCbe6rx9lvLKc0woW3AzO6aw",
        "thumbnails": {
          "default": {
            "url": "https://yt3.ggpht.com/-jh6czY2Nh78/AAAAAAAAAAI/AAAAAAAAAAA/06LzuzU1zM0/s88-c-k-no-rj-c0xffffff/photo.jpg"
          },
          "high": {
            "url": "https://yt3.ggpht.com/-jh6czY2Nh78/AAAAAAAAAAI/AAAAAAAAAAA/06LzuzU1zM0/s240-c-k-no-rj-c0xffffff/photo.jpg"
          }
        }
      },
      "contentDetails": {
        "totalItemCount": 103,
        "newItemCount": 1,
        "activityType": "all"
      }
    },
    {
      "kind": "youtube#subscription",
      "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/FL4nOkEwxZaGB6PjJpYvW3QZqXM\"",
      "id": "roOBps_SoVFaJ1JjcXbQ5rsU9m4eP0_GfWlMAFumK5M",
      "snippet": {
        "publishedAt": "2015-05-18T19:27:02.000Z",
        "title": "AuronPlay",
        "description": "Bienvenido a mi canal, ponte cómodo y bésame.",
        "resourceId": {
          "kind": "youtube#channel",
          "channelId": "UCyQqzYXQBUWgBTn4pw_fFSQ"
        },
        "channelId": "UCbe6rx9lvLKc0woW3AzO6aw",
        "thumbnails": {
          "default": {
            "url": "https://yt3.ggpht.com/-F0M9Ay4sYBk/AAAAAAAAAAI/AAAAAAAAAAA/nBNWDV-jG0M/s88-c-k-no-rj-c0xffffff/photo.jpg"
          },
          "high": {
            "url": "https://yt3.ggpht.com/-F0M9Ay4sYBk/AAAAAAAAAAI/AAAAAAAAAAA/nBNWDV-jG0M/s240-c-k-no-rj-c0xffffff/photo.jpg"
          }
        }
      },
      "contentDetails": {
        "totalItemCount": 250,
        "newItemCount": 0,
        "activityType": "all"
      }
    },
    {
      "kind": "youtube#subscription",
      "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/fvtxuShO-77NDFIQAZH1aPeyQxA\"",
      "id": "roOBps_SoVFaJ1JjcXbQ5pQvF_7ksG4RKmPuitqIVDU",
      "snippet": {
        "publishedAt": "2016-03-16T21:25:53.000Z",
        "title": "Ilustres Ignorantes",
        "description": "Canal Oficial de Ilustres Ignorantes, la charla más gamberra e irreverente de la televisión, en #0 (Movistar+)\n\nDelirante debate que Javier Coronas dirige y presenta en #0 con la participación de Javier Cansado, Pepe Colubi y diferentes invitados. Todos los programas de esta temporada y los episodios anteriores.\n\nNo olvides suscribirte para no perderte nada y disfruta de los programas completos en YOMVI",
        "resourceId": {
          "kind": "youtube#channel",
          "channelId": "UCvnx_5LqODateuzBTLOdPfA"
        },
        "channelId": "UCbe6rx9lvLKc0woW3AzO6aw",
        "thumbnails": {
          "default": {
            "url": "https://yt3.ggpht.com/-hvEDoEU93UA/AAAAAAAAAAI/AAAAAAAAAAA/ZyQmT2pDgo8/s88-c-k-no-rj-c0xffffff/photo.jpg"
          },
          "high": {
            "url": "https://yt3.ggpht.com/-hvEDoEU93UA/AAAAAAAAAAI/AAAAAAAAAAA/ZyQmT2pDgo8/s240-c-k-no-rj-c0xffffff/photo.jpg"
          }
        }
      },
      "contentDetails": {
        "totalItemCount": 418,
        "newItemCount": 3,
        "activityType": "all"
      }
    },
    {
      "kind": "youtube#subscription",
      "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/lq7A2Kps4hQM7xlyHCr39pv27sM\"",
      "id": "roOBps_SoVFaJ1JjcXbQ5q94eqIPnwWrXjMZRcBFfkU",
      "snippet": {
        "publishedAt": "2016-03-19T07:35:32.000Z",
        "title": "OSCARS! OSCARS! OSCARS!",
        "description": "HOY HAY CINE! SUSCRÍBETE! goo.gl/0DFoij\n\nBienvenidos! aprovecha y prepara palomitas que hay noche de cine!\n\n@oscar_martinh\nhttp://thefresquera.blogspot.com.es",
        "resourceId": {
          "kind": "youtube#channel",
          "channelId": "UCUhhlS8LjXCtw7eyYhlaufA"
        },
        "channelId": "UCbe6rx9lvLKc0woW3AzO6aw",
        "thumbnails": {
          "default": {
            "url": "https://yt3.ggpht.com/-f70mVE49lu0/AAAAAAAAAAI/AAAAAAAAAAA/Iy-7t8zi_mI/s88-c-k-no-rj-c0xffffff/photo.jpg"
          },
          "high": {
            "url": "https://yt3.ggpht.com/-f70mVE49lu0/AAAAAAAAAAI/AAAAAAAAAAA/Iy-7t8zi_mI/s240-c-k-no-rj-c0xffffff/photo.jpg"
          }
        }
      },
      "contentDetails": {
        "totalItemCount": 1,
        "newItemCount": 0,
        "activityType": "all"
      }
    },
    {
      "kind": "youtube#subscription",
      "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/d2s8BXI6vlthhppM_c3-KKo5Peo\"",
      "id": "roOBps_SoVFaJ1JjcXbQ5rg03pbV3Y93pVSajAoXrE0",
      "snippet": {
        "publishedAt": "2016-03-20T19:46:07.000Z",
        "title": "JustinGuitar Songs",
        "description": "Hello my virtual friends! Welcome to my Songs channel :) Please subscribe if you dig what I do.\n\nOver on my website - http://www.justinguitar.com - you'll find over 920 lessons and all the lessons are well organised and makes it a load easier to find everything :) So come on by and check it out. It's all free so you got nothing to lose.",
        "resourceId": {
          "kind": "youtube#channel",
          "channelId": "UCcZd_G62wtsCXd-b7OhQdlw"
        },
        "channelId": "UCbe6rx9lvLKc0woW3AzO6aw",
        "thumbnails": {
          "default": {
            "url": "https://yt3.ggpht.com/-J5JjwMbMlbg/AAAAAAAAAAI/AAAAAAAAAAA/79T6mW1XlKU/s88-c-k-no-rj-c0xffffff/photo.jpg"
          },
          "high": {
            "url": "https://yt3.ggpht.com/-J5JjwMbMlbg/AAAAAAAAAAI/AAAAAAAAAAA/79T6mW1XlKU/s240-c-k-no-rj-c0xffffff/photo.jpg"
          }
        }
      },
      "contentDetails": {
        "totalItemCount": 439,
        "newItemCount": 2,
        "activityType": "all"
      }
    }
  ]
}

const initialState = {
  user: {
    state: "unknown", //unknown, loggedIn, notLoggedIn
    data: {}
  },
  tabs: {
    selected: "subscriptions"
  },
  subscriptions: {
    data: subscriptions
  }
};


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer, initialState);

export default store;