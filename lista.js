var lista = [
  {
    name: 'Argentina',
    location: [-34.996496, -64.967282],
    zoom: 11,
    children: [
      {
        name: 'Ciudad de Buenos Aires',
        location: [-34.599722, -58.381944],
        zoom: 5,
      },
      {
        name: 'Buenos Aires',
        location: [-36.157222, -60.569722],
        zoom: 7,
        children: [
          {
            name: 'La Plata',
            location: [-34.933333, -57.95],
            zoom: 5,
            children: [
                {
                    name: 'El Barrio'
                }
            ]
          }
        ]
      },
      {
        name: 'Mendoza',
        location: [-32.890278, -68.847222],
        zoom: 7,
        children: [
          {
            name: 'Mendoza',
            location: [-32.883333, -68.833333],
            zoom: 5,
          }
        ]
      }
    ]
  },
  {
    name: 'Brasil',
    location: [-14.235004, -51.925282],
    zoom: 11,
    children: [
      {
        name: 'Paraná',
        location: [-25.252089, -52.021542],
        zoom: 7,
        children: [
          {
            name: 'Curitiba',
            location: [-25.480877, -49.304424],
            zoom: 5,
          },
          {
            name: 'Maringá',
            location: [-1.714575, -48.658287],
            zoom: 5
          }
        ]
      },
      {
        name: 'São Paulo',
        location: [-21.829722, -49.2075],
        zoom: 7,
        children: [
          {
            name: 'São Paulo',
            location: [-23.550520, -46.633308],
            zoom: 5,
          }
        ]
      }
    ]
  },
  {
    name: 'Colombia',
    location: [2.889443, -73.783892],
    zoom: 11,
    children: [
      {
        name: 'Antioquia',
        location: [7.000009, -75.500009],
        zoom: 7,
        children: [
          {
            name: 'Guatapé',
            location: [2.447277, -76.746357],
            zoom: 5,
          },
          {
            name: 'Medellín',
            location: [6.244203, -75.581215],
            zoom: 5,
          },
        ]
      },
      {
        name: 'Cundinamarca',
        location: [5.000009, -74.166676],
        zoom: 7,
        children: [
          {
            name: 'Bogotá',
            location: [4.710989, -74.072090],
            zoom: 5,
          }
        ]
      },
      {
        name: 'Valle del Cauca',
        location: [4.063970, -76.123380],
        zoom: 7,
        children: [
          {
            name: 'Jamundí',
            location: [3.224807, -76.618926],
            zoom: 5,
          },
          {
            name: 'Santiago de Cali',
            location: [3.451647, -76.531982],
            zoom: 5,
          },
        ]
      }
    ]
  },
];